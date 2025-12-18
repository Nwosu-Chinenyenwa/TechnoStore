import { createClient } from "@/utils/supabase/server";

export async function POST(req) {
  try {
    const { token, password } = await req.json();
    if (!token || !password) {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const supabase = createClient();

    // 1️⃣ Validate token
    const { data, error } = await supabase
      .from("password_resets")
      .select("*")
      .eq("token", token)
      .eq("used", false)
      .single();

    if (
      error ||
      !data ||
      new Date(data.expires_at) < new Date()
    ) {
      return Response.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // 2️⃣ Update password
    const { error: updateError } =
      await supabase.auth.admin.updateUserById(
        data.user_id,
        { password }
      );

    if (updateError) {
      return Response.json(
        { error: updateError.message },
        { status: 500 }
      );
    }

    // 3️⃣ Invalidate token
    await supabase
      .from("password_resets")
      .update({ used: true })
      .eq("id", data.id);

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
