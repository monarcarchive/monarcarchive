import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "Drop notes, style guides, and social content from Monarc Archive.",
};

export default function JournalPage() {
  return (
    <section className="section-band">
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Journal
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          Drop notes & style guides
        </h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
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
                  {post.eyebrow} · {post.readTime}
                </p>
                <h2 className="m-0 mt-3 text-2xl font-bold uppercase">{post.title}</h2>
                <p className="m-0 mt-3 text-sm leading-6 text-(--color-text-secondary)">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
