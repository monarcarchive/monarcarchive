"use client";

import { useState, useEffect, startTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { analytics } from "@/lib/analytics";

/* Canonical focus ring — reuse everywhere in this file */
const focusRing = "focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 rounded-sm";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-(--color-border)"
          : "bg-black"
      }`}
    >
      <div className="container-site">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="relative flex h-16 items-center justify-between md:h-20"
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.04em] text-white md:text-base ${focusRing}`}
            aria-label={`${siteConfig.name} home`}
            onClick={() => analytics.navClick("Logo", "/")}
          >
            <Image
              src="/brand/monarcharchive-logo.png"
              alt=""
              width={54}
              height={54}
              priority
              className="h-10 w-10 object-contain md:h-12 md:w-12"
            />
            <span>MonarcArchive</span>
          </Link>

          {/* Desktop nav */}
          <ul className="ml-auto mr-9 hidden md:flex items-center gap-9" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-xs font-bold uppercase transition-colors duration-250 ${focusRing} ${
                      isActive
                        ? "text-(--color-accent)"
                        : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                    }`}
                    onClick={() => analytics.navClick(link.label, link.href)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-5 shrink-0">
            <Link className={`text-xs font-bold uppercase text-(--color-text-secondary) hover:text-white ${focusRing}`} href="/account">
              Account
            </Link>
            <Link className={`text-xs font-bold uppercase text-white ${focusRing}`} href="/cart">
              Bag 0
            </Link>
          </div>

          {/* Mobile theme + menu */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            <Link className={`text-xs font-bold uppercase text-white ${focusRing}`} href="/cart">
              Bag
            </Link>
            <button
              className={`flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${focusRing}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
            <span
              className={`block w-5 h-0.5 bg-(--color-text-primary) transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-(--color-text-primary) transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-(--color-text-primary) transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`md:hidden fixed inset-0 top-16 bg-(--color-bg-base) z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-site flex flex-col gap-2 pt-8">
          <ul role="list" className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center py-3 text-xl font-medium border-b border-(--color-border) transition-colors duration-250 ${
                      isActive
                        ? "text-(--color-accent)"
                        : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                    }`}
                    onClick={() => analytics.navClick(link.label, link.href)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-6">
            <Link className="store-button store-button-primary w-full" href="/cart">
              Bag
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
