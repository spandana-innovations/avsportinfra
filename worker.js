// ───────────────────────────────────────────────────────────────────────────
// Cloudflare Worker: serves the static Astro build and handles enquiry form
// submissions at POST /api/enquiry. Sends two emails through Resend:
//   1. A notification to the business inbox (info@avsportinfra.com).
//   2. A branded confirmation / auto-reply to the enquirer.
//
// Secrets / vars (set in Cloudflare, NEVER committed):
//   RESEND_API_KEY  (required)  — `npx wrangler secret put RESEND_API_KEY`
//   ENQUIRY_TO      (optional)  — defaults to info@avsportinfra.com
//   RESEND_FROM     (optional)  — defaults to the info@ address; the sending
//                                 domain must be verified in Resend.
// ───────────────────────────────────────────────────────────────────────────

const BRAND = 'AV Sports and Infrastructure';
const SITE = 'https://avsportinfra.com';
const WA_DIGITS = '919372449834';
const WA_DISPLAY = '+91 93724 49834';
const WA_LINK = 'https://wa.me/' + WA_DIGITS;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/enquiry') {
      if (request.method !== 'POST') {
        return json({ ok: false, error: 'Method not allowed' }, 405);
      }
      return handleEnquiry(request, env);
    }
    // Everything else is a static asset from the Astro build.
    return env.ASSETS.fetch(request);
  },
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function readBody(request) {
  const ct = request.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    return await request.json();
  }
  const form = await request.formData();
  const o = {};
  for (const [k, v] of form.entries()) o[k] = v;
  return o;
}

async function handleEnquiry(request, env) {
  let data;
  try {
    data = await readBody(request);
  } catch (e) {
    return json({ ok: false, error: 'Invalid request body' }, 400);
  }

  // Honeypot: real users never fill this hidden field.
  if (data.company) return json({ ok: true });

  const name = (data.name || '').toString().trim();
  const phone = (data.phone || '').toString().trim();
  const email = (data.email || '').toString().trim();
  const city = (data.city || '').toString().trim();
  const service = (data.service || '').toString().trim();
  const area = (data.area || '').toString().trim();
  const message = (data.message || '').toString().trim();

  if (!name || !phone || !city) {
    return json({ ok: false, error: 'Please fill in your name, phone and city.' }, 422);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: 'Email service is not configured yet.' }, 500);
  }

  const TO = env.ENQUIRY_TO || 'info@avsportinfra.com';
  const FROM = env.RESEND_FROM || (BRAND + ' <info@avsportinfra.com>');

  // 1) Notification to the business.
  const bizHtml = businessEmail({ name, phone, email, city, service, area, message });
  const bizSend = sendEmail(env, {
    from: FROM,
    to: [TO],
    reply_to: email || undefined,
    subject: `New enquiry: ${name}${service ? ' - ' + service : ''} (${city})`,
    html: bizHtml,
  });

  // 2) Confirmation to the enquirer (only if they gave an email).
  let confSend = Promise.resolve(null);
  if (email && /\S+@\S+\.\S+/.test(email)) {
    confSend = sendEmail(env, {
      from: FROM,
      to: [email],
      reply_to: TO,
      subject: `We've received your enquiry - ${BRAND}`,
      html: confirmationEmail({ name, service, city }),
    });
  }

  try {
    const [bizRes] = await Promise.all([bizSend, confSend]);
    if (bizRes && !bizRes.ok) {
      const t = await bizRes.text().catch(() => '');
      return json({ ok: false, error: 'Could not send right now. Please WhatsApp us instead.', detail: t.slice(0, 200) }, 502);
    }
  } catch (e) {
    return json({ ok: false, error: 'Could not send right now. Please WhatsApp us instead.' }, 502);
  }

  return json({ ok: true });
}

function sendEmail(env, payload) {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + env.RESEND_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

function row(label, value) {
  if (!value) return '';
  return `<tr>
    <td style="padding:6px 14px 6px 0;color:#6b7b6e;font-size:13px;vertical-align:top;white-space:nowrap;">${esc(label)}</td>
    <td style="padding:6px 0;color:#14241a;font-size:14px;font-weight:600;">${esc(value)}</td>
  </tr>`;
}

function businessEmail(d) {
  return `<!doctype html><html><body style="margin:0;background:#eef3ee;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#eef3ee;padding:24px 0;">
   <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #d8e2d9;">
      <tr><td style="background:#0b3b1e;padding:20px 28px;color:#fff;font-size:18px;font-weight:700;">New website enquiry</td></tr>
      <tr><td style="padding:24px 28px;">
        <p style="margin:0 0 16px;color:#36483b;font-size:14px;">A new enquiry just came in from the website.</p>
        <table cellpadding="0" cellspacing="0" width="100%">
          ${row('Name', d.name)}
          ${row('Phone / WhatsApp', d.phone)}
          ${row('Email', d.email)}
          ${row('City / Location', d.city)}
          ${row('Service', d.service)}
          ${row('Approx. area', d.area)}
        </table>
        ${d.message ? `<div style="margin-top:16px;padding:14px 16px;background:#f3f7f3;border-radius:10px;color:#14241a;font-size:14px;line-height:1.6;"><strong style="color:#6b7b6e;font-size:12px;text-transform:uppercase;letter-spacing:.06em;">Message</strong><br>${esc(d.message).replace(/\n/g, '<br>')}</div>` : ''}
        ${d.phone ? `<p style="margin:20px 0 0;"><a href="${WA_LINK}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:10px 18px;border-radius:999px;">Reply on WhatsApp</a></p>` : ''}
      </td></tr>
      <tr><td style="padding:14px 28px;background:#f3f7f3;color:#8a9a8d;font-size:12px;">Sent from the ${esc(BRAND)} website enquiry form.</td></tr>
    </table>
   </td></tr>
  </table></body></html>`;
}

function confirmationEmail(d) {
  const first = (d.name || '').split(' ')[0] || 'there';
  return `<!doctype html><html><body style="margin:0;background:#eef3ee;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#eef3ee;padding:24px 0;">
   <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #d8e2d9;">
      <tr><td style="background:linear-gradient(135deg,#0b3b1e,#0a5027);padding:30px 32px;">
        <div style="color:#8ff06a;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;">${esc(BRAND)}</div>
        <div style="color:#ffffff;font-size:24px;font-weight:800;margin-top:8px;line-height:1.25;">Thanks, ${esc(first)}! We've got your enquiry.</div>
      </td></tr>
      <tr><td style="padding:28px 32px 8px;">
        <p style="margin:0 0 16px;color:#36483b;font-size:15px;line-height:1.7;">Thank you for reaching out to ${esc(BRAND)}. We've received your enquiry${d.service ? ` about <strong>${esc(d.service)}</strong>` : ''}${d.city ? ` in <strong>${esc(d.city)}</strong>` : ''}, and a member of our team will get back to you shortly with the next steps.</p>

        <div style="margin:18px 0;padding:18px 20px;background:#eafbe6;border:1px solid #bfe6ad;border-radius:12px;">
          <div style="color:#0b3b1e;font-size:15px;font-weight:800;margin-bottom:6px;">⚡ Want a faster reply? Message us on WhatsApp.</div>
          <div style="color:#36483b;font-size:14px;line-height:1.6;">WhatsApp is the quickest way to reach us for quotes, site visits and questions. Tap below or save our number <strong>${esc(WA_DISPLAY)}</strong>.</div>
          <div style="margin-top:14px;">
            <a href="${WA_LINK}" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:12px 22px;border-radius:999px;">Chat on WhatsApp →</a>
          </div>
        </div>

        <p style="margin:18px 0 6px;color:#36483b;font-size:14px;line-height:1.7;">In the meantime, you can explore our work and services:</p>
        <p style="margin:0 0 20px;">
          <a href="${SITE}/projects" style="color:#1f9d3f;font-weight:700;text-decoration:none;font-size:14px;">Our projects</a>
          &nbsp;·&nbsp;
          <a href="${SITE}/services" style="color:#1f9d3f;font-weight:700;text-decoration:none;font-size:14px;">Services</a>
          &nbsp;·&nbsp;
          <a href="${SITE}" style="color:#1f9d3f;font-weight:700;text-decoration:none;font-size:14px;">Website</a>
        </p>
      </td></tr>
      <tr><td style="padding:20px 32px;background:#0b3b1e;color:#cfe6d4;font-size:13px;line-height:1.7;">
        <strong style="color:#ffffff;">${esc(BRAND)}</strong><br>
        Call / WhatsApp: <a href="tel:+919372449834" style="color:#8ff06a;text-decoration:none;">${esc(WA_DISPLAY)}</a><br>
        Email: <a href="mailto:info@avsportinfra.com" style="color:#8ff06a;text-decoration:none;">info@avsportinfra.com</a><br>
        Best Driven Turfs &amp; Sports Structures · Mumbai &amp; PAN-India
      </td></tr>
    </table>
   </td></tr>
  </table></body></html>`;
}
