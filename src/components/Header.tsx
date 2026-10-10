"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { bookingUrl, hasWhatsApp, instagramUrl } from "@/lib/links";
import { DilmiraMark, InstagramIcon, WhatsAppIcon } from "./icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-2.5" aria-label={`${site.name} — на главную`}>
      <DilmiraMark size={32} className="transition-transform duration-500 group-hover:rotate-12" />
      <span className={`text-[22px] font-bold lowercase tracking-[-0.04em] ${light ? "text-white" : "text-ink"}`}>
        dilmira
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open ? "border-b border-line/80 bg-white/80 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Основная навигация" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3.5 py-2 text-[14.5px] font-medium text-ink-soft transition-colors hover:bg-lilac-soft hover:text-plum"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="icon-btn hidden sm:inline-grid" aria-label="Instagram салона Dilmira">
              <InstagramIcon size={18} />
            </a>
            {hasWhatsApp && (
              <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="icon-btn hidden sm:inline-grid" aria-label="Написать в WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
            )}
            <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Записаться
            </a>
            <button
              type="button"
              className="icon-btn lg:hidden"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню — вне <header>: backdrop-filter шапки ломает position: fixed у потомков */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        inert={!open}
      >
        <nav aria-label="Мобильная навигация" className="container-x flex h-full flex-col pb-8 pt-4">
          <ul className="flex-1">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={`border-b border-line transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-[26px] font-semibold lowercase tracking-[-0.03em] text-ink"
                >
                  {item.label}
                  <ArrowUpRight size={20} className="text-violet" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
              {hasWhatsApp ? <WhatsAppIcon size={18} /> : <InstagramIcon size={18} />}
              Записаться
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">
              <InstagramIcon size={18} />@{site.instagram.handle}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
