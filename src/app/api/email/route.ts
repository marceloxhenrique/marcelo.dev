import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const trasnporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

export async function POST(request: NextRequest) {
  const { username, email, message } = await request.json();
  try {
    const info = await trasnporter.sendMail({
      from: `${email}`,
      to: "marcelodasilva.dev@gmail.com",
      subject: `Portfolio message from ${username}`,
      text: `
      Username: ${username}.
      E-mail: ${email}.
      Message: ${message}`,
      html: `<p>
      Portfolio message from ${username}. <br />
      E-mail: ${email}. <br /> 
      Message: ${message}
      </p>`,
    });
    return NextResponse.json(info);
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
