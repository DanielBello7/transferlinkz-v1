# TransferLinkz

**Reducing Arrival Risk & Operational Escalations**

Landing page and marketing site for TransferLinkz — Arrival Risk Management software. TransferLinkz is not a messaging tool; it is arrival insurance.

---

## Features

- **Landing page** — Hero, problem/solution, what it fixes, operational impact, commercial model, success metrics, FAQ
- **Contact form** — Full name, email, message; sends to you via [Brevo](https://www.brevo.com/) (transactional email)
- **Request a quote** — Email capture; sends quote requests to you via Brevo
- **Toasts** — Success/error feedback with [Sonner](https://sonner.emilkowal.ski/) (shadcn-style)
- **UI** — shadcn-style components (Button, Input, Label, Textarea), dark blue theme with cyan accents and grid background

---

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com/) 4, [Radix UI](https://www.radix-ui.com/) (Label, Slot), [Sonner](https://sonner.emilkowal.ski/)
- **Email:** [Brevo](https://www.brevo.com/) (transactional API)

---

## Prerequisites

- Node.js 18+
- pnpm (or npm / yarn)
- Brevo account and API key

---

## Installation

1. **Clone and install dependencies**

   ```bash
   cd v1
   pnpm install
   ```

2. **Environment variables**

   Create a `.env` file in the project root:

   ```env
   # Brevo API key (required for contact and quote forms)
   EMAIL_API_KEY=your-brevo-api-key

   # Email address where contact form and quote requests are sent
   CONTACT_RECIPIENT_EMAIL=you@example.com

   # Optional: sender shown on outgoing emails (must be a verified sender in Brevo)
   # BREVO_SENDER_EMAIL=noreply@yourdomain.com
   # BREVO_SENDER_NAME=TransferLinkz
   ```

   - Get your API key from [Brevo → Settings → API Keys](https://app.brevo.com/settings/keys/api).
   - `CONTACT_RECIPIENT_EMAIL` is where form submissions and quote requests are delivered.
   - If you omit `BREVO_SENDER_EMAIL` / `BREVO_SENDER_NAME`, the app uses `CONTACT_RECIPIENT_EMAIL` and `"TransferLinkz"` as the sender (the sender address must be verified in Brevo).

3. **Run the dev server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command      | Description             |
| ------------ | ----------------------- |
| `pnpm dev`   | Start dev server        |
| `pnpm build` | Build for production    |
| `pnpm start` | Start production server |
| `pnpm lint`  | Run ESLint              |

---

## Project structure

```
v1/
├── app/
│   ├── api/
│   │   ├── contact/route.ts   # POST: contact form → Brevo
│   │   └── quote/route.ts     # POST: quote request → Brevo
│   ├── globals.css            # Tailwind + page theme (gradient, grid)
│   ├── layout.tsx             # Root layout, metadata, Sonner Toaster
│   └── page.tsx               # Landing page
├── components/
│   ├── contact-form.tsx       # Contact form (name, email, message)
│   ├── quote-form.tsx        # Quote form (email)
│   └── ui/                    # shadcn-style components
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
├── lib/
│   ├── brevo.ts               # Brevo send + sender/recipient helpers
│   └── utils.ts               # cn() for class names
├── public/
│   └── transferlinkz-logo.png # Logo (favicon + header)
├── .env                       # Local env (not committed)
└── package.json
```

---

## Deployment

The app can be deployed to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any Node host that supports Next.js.

1. Set the same environment variables in your host’s dashboard.
2. Build command: `pnpm build` (or `npm run build`).
3. Output: use the default Next.js build output (e.g. `.next` + `pnpm start` or the platform’s Next.js preset).

---

## License

Private. All rights reserved.
