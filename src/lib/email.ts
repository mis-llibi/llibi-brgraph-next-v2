import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: false, // true for 465, false for other ports like 587, 2525
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates for testing
  },
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 5000, // 5 seconds
  socketTimeout: 10000, // 10 seconds
});

export interface SendCredentialsEmailParams {
  to: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  permissions: string[];
  createdBy: string;
}

export async function sendCredentialsEmail({
  to,
  name,
  email,
  password,
  role,
  permissions,
  createdBy,
}: SendCredentialsEmailParams) {
  console.log("Attempting to send email with config:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    to: to,
  });

  try {
    // Test connection first
    console.log("Testing SMTP connection...");
    const isConnected = await verifyEmailConnection();
    if (!isConnected) {
      throw new Error("SMTP connection verification failed");
    }
    console.log("SMTP connection verified successfully");

    const subject = `Welcome to LLIBI - Your Account Credentials`;

    const permissionsList =
      permissions.length > 0
        ? permissions.map((p) => `• ${p}`).join("\n    ")
        : "No specific permissions assigned";

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to LLIBI</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .credentials { background: #fff; padding: 15px; border-left: 4px solid #3498db; margin: 20px 0; }
        .permissions { background: #fff; padding: 15px; border-left: 4px solid #27ae60; margin: 20px 0; }
        .warning { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0; }
        .footer { background: #34495e; color: white; padding: 15px; text-align: center; font-size: 12px; }
        code { background: #ecf0f1; padding: 2px 5px; border-radius: 3px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Welcome to LLIBI</h1>
        <p>Your account has been created successfully</p>
      </div>
      
      <div class="content">
        <p>Hello <strong>${name}</strong>,</p>
        
        <p>Your ${
          role === "admin" ? "Administrator" : "User"
        } account has been created by <strong>${createdBy}</strong>. Below are your login credentials:</p>
        
        <div class="credentials">
          <h3>Login Credentials</h3>
          <p><strong>Email:</strong> <code>${email}</code></p>
          <p><strong>Temporary Password:</strong> <code>${password}</code></p>
          <p><strong>Login URL:</strong> <a href="${
            process.env.NEXTAUTH_URL
          }">${process.env.NEXTAUTH_URL}</a></p>
        </div>
        
        <div class="permissions">
          <h3>Your Permissions</h3>
          <p><strong>Role:</strong> ${
            role === "admin" ? "Administrator" : "User"
          }</p>
          <p><strong>Granted Permissions:</strong></p>
          <pre>    ${permissionsList}</pre>
        </div>
        
        <div class="warning">
          <h3>⚠️ Important Security Notice</h3>
          <p><strong>You must change your password on first login.</strong></p>
          <p>This temporary password is for initial access only. For security reasons, you'll be prompted to create a new password when you first log in.</p>
        </div>
        
        <p>If you have any questions or need assistance, please contact your administrator.</p>
        
        <p>Best regards,<br>LLIBI Team</p>
      </div>
      
      <div class="footer">
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>LLIBI © ${new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;

    const text = `
Welcome to LLIBI

Hello ${name},

Your ${
      role === "admin" ? "Administrator" : "User"
    } account has been created by ${createdBy}.

Login Credentials:
- Email: ${email}
- Temporary Password: ${password}
- Login URL: ${process.env.NEXTAUTH_URL}

Role: ${role === "admin" ? "Administrator" : "User"}
Granted Permissions:
${permissionsList}

IMPORTANT: You must change your password on first login for security reasons.

If you have any questions, please contact your administrator.

Best regards,
LLIBI Team

---
This is an automated message. Please do not reply to this email.
LLIBI © ${new Date().getFullYear()}. All rights reserved.
  `;

    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: to,
      subject: subject,
      text: text,
      html: html,
    });

    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(
      `Failed to send email: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function verifyEmailConnection() {
  try {
    await transporter.verify();
    console.log("SMTP connection verified successfully");
    return true;
  } catch (error) {
    console.error("SMTP connection failed:", error);
    return false;
  }
}
