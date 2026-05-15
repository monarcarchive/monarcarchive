import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide",
  description: "Monarc Archive clothing size guide.",
};

const rows = [
  ["S", "34-36", "28-30"],
  ["M", "38-40", "31-33"],
  ["L", "42-44", "34-36"],
  ["XL", "46-48", "37-39"],
  ["XXL", "50-52", "40-42"],
];

export default function SizeGuidePage() {
  return (
    <section>
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Fit
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          Size guide
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-(--color-text-secondary)">
          Monarc Archive tops are designed with a relaxed streetwear fit. Order
          your normal size for the intended shape or size down for a cleaner fit.
        </p>
        <div className="mt-10 overflow-hidden rounded-md border border-(--color-border)">
          <table className="w-full border-collapse bg-(--color-bg-surface) text-left">
            <thead>
              <tr className="border-b border-(--color-border)">
                <th className="p-4">Size</th>
                <th className="p-4">Chest</th>
                <th className="p-4">Waist</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([size, chest, waist]) => (
                <tr key={size} className="border-b border-(--color-border) last:border-b-0">
                  <td className="p-4 font-semibold">{size}</td>
                  <td className="p-4 text-(--color-text-secondary)">{chest} in</td>
                  <td className="p-4 text-(--color-text-secondary)">{waist} in</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
