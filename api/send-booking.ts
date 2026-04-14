import { Resend } from 'resend';

export const config = { runtime: 'edge' };

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const body = await req.json();

  const {
    firstName, lastName, email, phone,
    address, city, postalCode, notes,
    service, bedrooms, bathrooms, windows,
    condition, frequency, addons,
    date, time,
  } = body;

  const addonList = addons?.length
    ? addons.map((a: string) => `<li>${a}</li>`).join('')
    : '<li>None</li>';

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <div style="background:#10b981;padding:32px;border-radius:12px 12px 0 0;">
        <h1 style="color:white;margin:0;font-size:28px;">New Booking Request</h1>
        <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;">Tidy Touch Cleaning Solutions</p>
      </div>
      <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">

        <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Customer</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Name</td><td style="font-weight:600;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="font-weight:600;">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="font-weight:600;">${phone}</td></tr>
        </table>

        <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Service Details</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Service</td><td style="font-weight:600;text-transform:capitalize;">${service?.replace('-', ' ')}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Bedrooms</td><td style="font-weight:600;">${bedrooms}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Bathrooms</td><td style="font-weight:600;">${bathrooms}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Windows</td><td style="font-weight:600;">${windows}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Condition</td><td style="font-weight:600;text-transform:capitalize;">${condition}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Frequency</td><td style="font-weight:600;text-transform:capitalize;">${frequency}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Date</td><td style="font-weight:600;">${date || 'Not specified'}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Time</td><td style="font-weight:600;">${time || 'Not specified'}</td></tr>
        </table>

        <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Add-ons</h2>
        <ul style="margin:0 0 24px;padding-left:20px;color:#374151;">${addonList}</ul>

        <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Location</h2>
        <p style="margin:0 0 4px;font-weight:600;">${address}</p>
        <p style="margin:0 0 24px;color:#6b7280;">${city}, ${postalCode}</p>

        ${notes ? `
        <h2 style="font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Notes</h2>
        <p style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:0;">${notes}</p>
        ` : ''}

      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'Tidy Touch <onboarding@resend.dev>',
    to: 'tidytouchab@protonmail.com',
    subject: `New Booking Request — ${firstName} ${lastName}`,
    html,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
