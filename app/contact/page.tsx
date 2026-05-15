import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Monarc Archive for wholesale, support, and brand inquiries.",
};

export default function ContactPage() {
  return (
    <section className="section-band">
      <div className="container-site py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
            Contact
          </p>
          <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
            Support, wholesale, collabs
          </h1>
          <p className="mt-6 text-lg leading-8 text-(--color-text-secondary)">
            Reach out for customer service, wholesale requests, drop questions,
            and collaboration inquiries.
          </p>
          <a className="store-button store-button-primary mt-8" href={`mailto:${siteConfig.email}`}>
            Email Monarc Archive
          </a>
        </div>
      </div>
    </section>
  );
}
