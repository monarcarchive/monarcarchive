import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/commerce/ProductCard";
import { LaunchSignupSection } from "@/components/launch/LaunchSignupSection";
import { SignupForm } from "@/components/launch/SignupForm";
import { posts } from "@/data/posts";
import { collections, products } from "@/data/products";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <section className="store-hero">
        <div className="container-site grid grid-cols-1 items-center gap-8 py-10 md:gap-12 md:py-16 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 max-w-2xl">
            <p className="m-0 font-mono text-xs uppercase tracking-[0.26em] text-(--color-accent)">
              Monarc Archive
            </p>
            <h1 className="m-0 mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] text-white text-balance md:text-7xl">
              Built different. Made to last.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--color-text-secondary)">
              Timeless pieces. Limited archives. Not for everyone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="store-button store-button-primary" href="/shop">
                Shop the drop
              </Link>
              <Link className="store-button store-button-secondary" href="/collections">
                View archive
              </Link>
            </div>
            <div className="mt-8 max-w-md">
              <SignupForm label="hero" compact />
            </div>
            <p className="mt-20 hidden font-mono text-xs text-(--color-text-muted) md:block">
              34.0522° N, 118.2437° W
            </p>
          </div>
          <div className="hero-photo" aria-label="Featured Monarc Archive hoodie">
            <Image
              src="/brand/products/hero-hoodie.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <LaunchSignupSection />

      <section className="section-band">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-text-muted)">
                Archive Drop 001
              </p>
              <h2 className="m-0 mt-3 text-3xl font-bold uppercase md:text-5xl">
                Latest drop
              </h2>
            </div>
            <Link className="store-link" href="/shop">
              Full shop
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(4, 7).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-2">
          <div className="brand-flag" />
          <div className="flex items-center bg-[radial-gradient(circle_at_10%_10%,rgba(255,48,56,0.12),transparent_34%),#070707] px-6 py-16 md:px-16">
            <div className="max-w-xl">
              <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
                The brand
              </p>
              <h2 className="m-0 mt-3 text-3xl font-bold uppercase text-white md:text-5xl">
                Monarc Archive
              </h2>
              <p className="mt-6 text-base leading-7 text-(--color-text-secondary)">
                A collection of moments, memories, and pieces that represent the
                journey. Each drop is a chapter. This is more than clothing.
                This is the archive.
              </p>
              <Link className="store-link mt-8 inline-flex" href="/about">
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-site grid gap-8 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div>
            <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
              Shop by lane
            </p>
            <h2 className="m-0 mt-3 text-3xl font-bold uppercase md:text-5xl">
              Numbered drops, essentials, utility, and accessories
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {collections.map((collection) => (
              <Link key={collection.slug} href="/collections" className="rounded-md border border-(--color-border) bg-(--color-bg-surface) p-5 transition hover:border-(--color-accent)">
                <p className="m-0 text-base font-semibold text-(--color-text-primary)">
                  {collection.name}
                </p>
                <p className="m-0 mt-2 text-sm text-(--color-text-secondary)">
                  {collection.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-text-muted)">
                Journal
              </p>
              <h2 className="m-0 mt-3 text-3xl font-bold uppercase md:text-5xl">
                Stories to push the drop
              </h2>
            </div>
            <Link className="store-link" href="/journal">
              Read journal
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`} className="journal-card">
                <div className="journal-card-art">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: post.imagePosition ?? "center" }}
                  />
                </div>
                <div className="p-5">
                  <p className="m-0 font-mono text-xs uppercase tracking-[0.2em] text-(--color-accent)">
                    {post.eyebrow}
                  </p>
                  <h3 className="m-0 mt-3 text-xl font-bold uppercase">{post.title}</h3>
                  <p className="m-0 mt-2 text-sm leading-6 text-(--color-text-secondary)">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
