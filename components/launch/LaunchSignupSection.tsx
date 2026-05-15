import { launchConfig } from "@/data/launch";
import { SignupForm } from "@/components/launch/SignupForm";

export function LaunchSignupSection() {
  return (
    <section className="launch-section">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[0.85fr_1.15fr] md:py-20">
        <div>
          <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
            {launchConfig.eyebrow}
          </p>
          <h2 className="m-0 mt-3 text-4xl font-black uppercase leading-none md:text-6xl">
            {launchConfig.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-(--color-text-secondary)">
            {launchConfig.description}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-(--color-text-muted)">
            {launchConfig.launchDateLabel}
          </p>
        </div>
        <div className="launch-panel">
          <h3 className="m-0 text-xl font-bold uppercase">{launchConfig.dropName}</h3>
          <div className="mt-5 grid gap-3">
            {launchConfig.perks.map((perk) => (
              <div key={perk} className="launch-perk">
                {perk}
              </div>
            ))}
          </div>
          <div className="mt-7">
            <SignupForm label="launch-section" />
          </div>
        </div>
      </div>
    </section>
  );
}
