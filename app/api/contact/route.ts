import { MY_EMAIL } from "@/lib/data";
import { contactSchema } from "@/lib/schema";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: Record<string, string> = {
  "product-modeling": "Product Modeling",
  "product-visualization": "Product Visualization",
  "product-animation": "Product Animation",
  "art-direction": "Art Direction",
  "full-campaign": "Full Campaign Package",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const { name, company, email, service, brief, honeypot } = parsed.data;

    if (honeypot) return NextResponse.json({ success: true });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: MY_EMAIL,
      replyTo: email,
      subject: `[soumak.studio] New client inquiry — ${serviceLabels[service]}`,
      text: `
Name: ${name}
${company ? `Company: ${company}` : ""}
Email: ${email}
Service: ${serviceLabels[service]}

${brief}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
