import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account",
  description: "Monarc Archive account access.",
};

export default function AccountPage() {
  return (
    <section>
      <div className="container-site py-14 md:py-20">
        <div className="max-w-xl">
          <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
            Account
          </p>
          <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
            Archive access
          </h1>
          <p className="mt-6 text-lg leading-8 text-(--color-text-secondary)">
            Customer accounts will hold order history, saved details, and early
            drop access. For now, continue shopping the live archive.
          </p>
          <Link className="store-button store-button-primary mt-8" href="/shop">
            Shop the drop
          </Link>
        </div>
      </div>
    </section>
  );
}
