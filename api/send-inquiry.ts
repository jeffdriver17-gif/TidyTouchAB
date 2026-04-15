import { Resend } from 'resend';

export const config = { runtime: 'edge' };

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { firstName, lastName, company, email, details } = await req.json();

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <div style="background:#F97316;padding:32px;border-radius:12px 12px 0 0;">
        <h1 style="color:white;margin:0;font-size:28px;">New Commercial Inquiry</h1>
        <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;">Mopd — We cleaned that.</p>
      </div>
      <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
        <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Contact</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Name</td><td style="font-weight:600;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Company</td><td style="font-weight:600;">${company}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="font-weight:600;">${email}</td></tr>
        </table>
        ${details ? `
        <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Facility Details</h2>
        <p style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:0;">${details}</p>
        ` : ''}
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'Mopd <onboarding@resend.dev>',
    to: 'mopd-ab@protonmail.com',
    subject: `Commercial Inquiry — ${firstName} ${lastName} @ ${company}`,
    html,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
