This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Google Analytics

The shared layout loads Google tag `G-SW6LXY29P7` through `components/GoogleAnalytics.tsx` after hydration. Successful contact and demo submissions send `generate_lead` with `form_name` set to `contact_enquiry` or `demo_request`; form contents are not included in this event.

After deployment, use Google's **Test installation** and GA4 Realtime to verify collection. In the web stream's enhanced measurement settings, enable page views on browser history changes to measure Next.js client navigation. Check that each navigation produces one page view, and mark `generate_lead` as a key event to report enquiries as conversions. Live collection and account settings must be verified in Google Analytics.

## Landing page validation

Run `npm run lint`, `npx tsc --noEmit`, `npm test` and `npm run build`.
Contact regression tests replace Resend with an in-memory mock; they never deliver email.

For the read-only SEO/HTTP checks, start the production build locally with
`npm start -- --hostname 127.0.0.1 --port 3100`, then in another PowerShell terminal:

```powershell
$env:SEO_BASE_URL = "http://127.0.0.1:3100"
node --test tests/seo-http.test.mjs
```

Without `SEO_BASE_URL`, the HTTP suite is skipped by `npm test`. It checks the two
new pages, discovery links, all sitemap canonicals, OpenGraph, structured data,
internal links, the legacy shutdown redirect and the generated favicon URL.
Browser checks should cover 1440px, 390px and 320px, keyboard navigation, screenshots
and the demo interests `mining-workforce-management` and `sap-maintenance-analytics`.
Intercept `/api/contact` in browser tests: never submit a real enquiry during validation.
Verify one `generate_lead` event after a successful mock response and none after failure.

See [screenshot provenance and product boundaries](docs/landing-page-evidence.md).

## Learning resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
