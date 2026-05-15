import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Monarc Archive lookbook concepts for streetwear capsules.",
};

const scenes = ["Warehouse light", "Night market", "Concrete steps", "Studio rack"];

export default function LookbookPage() {
  return (
    <section>
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Lookbook
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          Campaign frames
        </h1>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {scenes.map((scene, index) => (
            <div key={scene} className={`lookbook-frame lookbook-frame-${index + 1}`}>
              <span>{scene}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
