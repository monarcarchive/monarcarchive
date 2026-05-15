import Link from "next/link";
import { siteConfig, footerIntro, footerLocationNote } from "@/data/site";
import { SignupForm } from "@/components/launch/SignupForm";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { footerLinks } from "@/data/nav";
import { Container } from "@/components/ui/Container";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 rounded-sm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mm-footer-bg border-t border-(--color-border) mt-auto">
      <Container className="pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 lg:items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <SiteLogo
                className={`${focusRing} w-fit opacity-90 hover:opacity-100 transition-opacity duration-250`}
              />
              <p className="text-(--color-text-secondary) text-sm leading-relaxed max-w-md text-pretty">
                {footerIntro}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 pt-1">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-xl bg-(--color-accent) text-(--color-text-inverse) text-sm font-semibold px-4 py-2.5 shadow-[0_0_20px_var(--color-accent-glow)] hover:bg-(--color-accent-dim) transition-colors ${focusRing}`}
              >
                Contact
              </Link>
              <p className="text-xs text-(--color-text-muted) leading-snug max-w-xs m-0 sm:m-0">
                {footerLocationNote}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:pl-4 lg:border-l lg:border-(--color-border)">
            {footerLinks.map((group) => (
              <div key={group.group} className="flex flex-col gap-3.5">
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-(--color-text-muted) m-0">
                  {group.group}
                </h3>
                <ul role="list" className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm text-(--color-text-secondary) hover:text-(--color-accent) transition-colors duration-250 ${focusRing}`}
                          aria-label={`${link.label} (opens in new tab)`}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={`text-sm text-(--color-text-secondary) hover:text-(--color-accent) transition-colors duration-250 ${focusRing}`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-md border border-(--color-border) bg-(--color-bg-surface) p-6 md:grid md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-8">
          <div>
            <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
              Join the Archive
            </p>
            <h2 className="m-0 mt-2 text-2xl font-black uppercase">
              First access to drops
            </h2>
          </div>
          <div className="mt-5 md:mt-0">
            <SignupForm label="footer" compact />
          </div>
        </div>

        <div className="mt-12 md:mt-14 pt-8 border-t border-(--color-border) flex flex-col gap-5">
          <p className="text-xs text-(--color-text-muted) leading-relaxed max-w-3xl text-pretty m-0">
            Orders ship in 2-4 business days after processing. Limited drops may
            not restock once sold through. For sizing, order help, or wholesale
            inquiries, contact the Monarc Archive team.
          </p>
          <p className="text-xs text-(--color-text-muted) m-0">
            © {year} {siteConfig.name}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
