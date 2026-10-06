# Workforce and Metricz page evidence

## Metricz

Captured 6 October 2026 from the current local Metricz production build at 1440 × 1000.
The real `/audits/new` import workbench processed `/api/examples`' synthetic XLSX in
an isolated SQLite database under this website's ignored `.validation` directory.
No customer files or existing product database were used or changed.

Website-owned files in `public/images/metricz/`:

- `mapping.webp`: actual uploaded-file inspection and field mapping.
- `validation.webp`: reconciliation and source-linked warnings for that import.
- `analysis.webp`: saved synthetic material audit dashboard.
- `evidence.webp`: investigation and source-row links for an imported finding.
- `reporting.webp`: Excel review-pack screen for the same import.

Images are genuine unretouched captures converted to WebP. The application's generic
“Imported customer data” banner denotes import mode; it does not describe the
synthetic contents. Website captions explicitly disclose this. Current application
labels mentioning fixture rows are retained. No image from the fixture-only
`/audits/demo-import` walkthrough is used. Values are examples, not outcomes or savings.

## Shunter

`public/images/shunter/workforce-request.webp` uses the existing desktop-request.png
capture from the Shunter repository's `.audit/workforce-browser` directory. It shows
actual Workforce components and persisted synthetic records from the product's
database-backed browser test.

`workforce-assignments.webp` uses the 768 × 650 assignment-detail region starting at
y=1214 of tablet-schedule.png from the same test output. The original full capture
identifies the seeded demonstration records. The website caption discloses synthetic
data and the crop. No names, states or values were altered; only WebP compression
and the documented crop were applied. These are existing test captures, not fresh
production screenshots. No live Shunter database or real personnel records were accessed.

## Scope

Shunter's page describes operational people, requests, readiness and assignment
workflows, with separate-product links to Requestz and Timesheetz. It makes no
automated messaging, recruitment-suite, payroll, fatigue or roster-optimisation claims.

Metricz's page describes the implemented upload-first material-audit workflow.
Real SAP mappings and movement interpretation still require validation. Direct SAP
connections, task-list/plan-versus-actual analysis, authenticated approvals, enterprise
hosting, universal compatibility and verified savings are not claimed.

## Implementation file manifest

- `.gitignore`
- `README.md`
- `app/api/contact/route.ts`
- `app/industries/page.tsx`
- `app/metricz/page.tsx`
- `app/page.tsx`
- `app/shunter/page.tsx`
- `app/sitemap.ts`
- `app/solutions/[slug]/page.tsx`
- `app/solutions/page.tsx`
- `app/solutions/solution-data.ts`
- `app/solutions/workforce-data.ts`
- `components/BuyerFaqs.tsx`
- `components/ContactForm.tsx`
- `components/DemoContactForm.tsx`
- `components/MiningShutdownPage.tsx`
- `components/MiningWorkforcePage.tsx`
- `components/Navbar.tsx`
- `components/ProductEvidence.tsx`
- `components/ProductScreenshot.tsx`
- `components/SolutionPage.tsx`
- `docs/landing-page-evidence.md`
- `eslint.config.mjs`
- `lib/demo-interest.ts`
- `lib/product-evidence.ts`
- `lib/site-data.ts`
- `public/images/metricz/analysis.webp`
- `public/images/metricz/evidence.webp`
- `public/images/metricz/mapping.webp`
- `public/images/metricz/reporting.webp`
- `public/images/metricz/validation.webp`
- `public/images/shunter/workforce-assignments.webp`
- `public/images/shunter/workforce-request.webp`
- `tests/contact-route.test.mjs`
- `tests/seo-http.test.mjs`

## Local validation

- TypeScript, ESLint and production build passed.
- 18 contact/SEO HTTP tests passed with no skips against the local production build.
- Contact tests mocked Resend; browser submissions intercepted the contact endpoint. No real emails were sent.
- Both pages passed browser checks at 1440, 390 and 320 pixels, including image loading, horizontal overflow, keyboard FAQs, mobile navigation and contextual CTAs. Final layout checks also covered 1024 pixels.
- Workforce, Metricz and existing shutdown demos retained the correct interest and emitted one non-PII lead event after mock success, none after failure.
- All sitemap page canonicals, new page metadata/schema, discovery/internal links, the shutdown redirect and favicon passed HTTP checks.
- Manual buyer review retained the practical capability boundaries and refined the workforce assignment screenshot crop.
- Nonblocking build notice: installed Browserslist data is nine months old. Dependencies were not changed.
- No deployment was performed.
