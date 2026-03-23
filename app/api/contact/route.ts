import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  const body = await req.json();

  const { email, service, message, name, phone } = body;

  if (!email || !service) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"Contato Site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Novo contato: ${service}`,
      html: `
        <h2>Novo contato</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Motivo:</strong> ${service}</p>
        <p><strong>Nome:</strong> ${name || "-"}</p>
        <p><strong>Telefone:</strong> ${phone || "-"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message || "-"}</p>
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
