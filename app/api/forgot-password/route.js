import { Resend } from "resend";
import ResetPasswordEmail from "@/lib/emails/ResetPasswordEmail";
import { render } from "@react-email/render";
import { createClient } from "@/lib/supabase/server";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const supabase = createClient();
    const { data: userData, error: userError } = await supabase
      .from('auth.users')
      .select('id')
      .eq('email', email)
      .single();

    if (userError || !userData) {
      // Return generic message for security
      return Response.json({
        success: true,
        message: "If an account exists with this email, you will receive a reset link."
      });
    }

    // Generate a reset token
    const { data: resetData, error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/ResetPassword`,
    });

    if (resetError) {
      console.error("Supabase reset error:", resetError);
      return Response.json({ error: "Failed to generate reset token" }, { status: 500 });
    }

    // Actually, for Supabase, we should use the built-in reset email
    // But if you want to customize it with Resend:
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/ResetPassword?token=${resetData?.access_token || ''}&email=${encodeURIComponent(email)}`;

    const html = await render(
      ResetPasswordEmail({
        resetUrl,
      })
    );

    const { data, error: emailError } = await resend.emails.send({
      from: "onboarding@resend.dev", // Change to your verified domain
      to: email,
      subject: "Reset Your Password",
      html,
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      // Still return success to user, but log the error
      console.log("Email sending failed, but reset token was generated");
    }

    return Response.json({
      success: true,
      message: "If an account exists with this email, you will receive a reset link."
    });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}