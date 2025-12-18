import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  marginBottom: "24px",
  textAlign: "center",
};

const text = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "24px",
};

const buttonContainer = {
  textAlign: "center",
  marginTop: "32px",
};

const button = {
  backgroundColor: "#f28b00",
  borderRadius: "4px",
  color: "#fff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "600",
  padding: "12px 24px",
  textDecoration: "none",
};

const footerText = {
  color: "#999",
  fontSize: "14px",
  lineHeight: "1.5",
  marginTop: "24px",
  textAlign: "center",
};

export default function ResetPasswordEmail({ resetUrl }) {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Reset your password</Heading>

          <Text style={text}>
            We received a request to reset your password. Click the button
            below to set a new one.
          </Text>

          <Text style={text}>
            If you did not request a password reset, you can safely ignore
            this email.
          </Text>

          <Section style={buttonContainer}>
            <Link style={button} href={resetUrl}>
              Reset Password
            </Link>
          </Section>

          <Text style={footerText}>
            Or copy and paste this link in your browser:<br />
            {resetUrl}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}