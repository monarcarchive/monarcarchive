import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post?.title ?? "Journal",
    description: post?.excerpt,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div className="container-site grid gap-10 py-14 md:grid-cols-[0.75fr_1.25fr] md:py-20">
        <aside>
          <div className="journal-post-art">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover"
              style={{ objectPosition: post.imagePosition ?? "center" }}
            />
          </div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">
            {post.date} · {post.readTime}
          </p>
        </aside>
        <div>
          <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
            {post.eyebrow}
          </p>
          <h1 className="m-0 mt-3 text-4xl font-black uppercase leading-none md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-(--color-text-secondary)">
            {post.excerpt}
          </p>
          <div className="mt-10 space-y-6 text-lg leading-8 text-(--color-text-secondary)">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
