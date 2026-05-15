# Monarc Archive

Streetwear storefront for limited drops, product browsing, collection
storytelling, cart behavior, and customer-facing shop pages.

## Run locally

```bash
npm run dev
```

The app runs on `http://localhost:3003`.

## Store content

- Products live in `data/products.ts`.
- Main selling pages: `/`, `/shop`, `/product/[slug]`, `/collections`, `/lookbook`, and `/cart`.
- Customer pages: `/shipping`, `/size-guide`, `/faq`, `/privacy`, `/terms`, `/about`, and `/contact`.
- Domain and support email defaults live in `.env.example`.
- Analytics supports GA4 and Meta Pixel through `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_META_PIXEL_ID`.
- Launch signup copy and local signup storage settings live in `data/launch.ts`.
- Launch signups POST to `/api/subscribe` and can send to Resend with `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, `RESEND_FROM_EMAIL`, and `RESEND_NOTIFY_EMAIL`.
