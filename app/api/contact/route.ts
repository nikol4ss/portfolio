import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const serviceLabels: Record<string, string> = {
  freelance: "Freelance",
  hiring: "Vaga",
  collaboration: "Colaboração",
  api_maintenance: "Manutenção de API",
  other: "Outro",
};

function sanitize(value?: string) {
  if (!value) return "-";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const body = await req.json();

  const { email, service, message, name, phone } = body;

  if (!email || !service) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const serviceLabel = serviceLabels[service] || "Não informado";

  const safeEmail = sanitize(email);
  const safeName = sanitize(name);
  const safePhone = sanitize(phone);
  const safeMessage = sanitize(message);

  try {
    await transporter.sendMail({
      from: `"Contato Site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Novo contato: ${serviceLabel}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;line-height:1.5;">

          <h2 style="margin-bottom:16px;">Novo contato</h2>

          <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:4px 12px 4px 0;color:#555;">Email:</td>
              <td style="padding:4px 0;font-weight:500;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:4px 12px 4px 0;color:#555;">Motivo:</td>
              <td style="padding:4px 0;font-weight:500;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding:4px 12px 4px 0;color:#555;">Nome:</td>
              <td style="padding:4px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:4px 12px 4px 0;color:#555;">Telefone:</td>
              <td style="padding:4px 0;">${safePhone}</td>
            </tr>
          </table>

          <div style="margin:16px 0;border-top:1px solid #eee;"></div>

          <p style="margin:0 0 6px;color:#555;">Mensagem:</p>
          <div style="white-space:pre-line;">
            ${safeMessage}
          </div>

        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 },
    );
  }
}
