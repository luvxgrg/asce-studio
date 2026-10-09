This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact configuration

`contactEmail` in `config/contact.ts` contains the temporary official ASCE Studio
email supplied by the project owner. When a custom-domain mailbox is introduced,
update this single field and rebuild the site. Use a plain email address without
a `mailto:` prefix or query parameters. This address is public in the site's links.

All four “Start a Project” CTAs (hero, contact section, desktop navigation, and
mobile menu) use this shared configuration. Their native
`mailto:` links open the visitor's email application with the subject
“Project Enquiry — ASCE Studio” and a short project brief template. The mobile
menu also closes on activation. The Contact section at the end of `/work/vanta`
uses the same enquiry link. Links open in the visitor's email application without
requesting a new browser tab and support keyboard activation with visible focus.

To verify after changing configuration, activate each CTA on desktop and mobile
with an email application configured, and check the recipient, subject, and body
in the draft.

## Local development

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
