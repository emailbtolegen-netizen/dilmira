"use client";

import { useSyncExternalStore } from "react";
import { nav, site } from "@/content/site";
import { bookingChannel, bookingUrl, hasWhatsApp, instagramUrl } from "@/lib/links";
import { Logo } from "./Header";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const BUILD_YEAR = 2026;
const noopSubscribe = () => () => {};

export function Footer() {
  // Год вычисляется в браузере, чтобы не «застывать» в статической сборке
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );

  return (
    <footer className="border-t border-line bg-white pb-28 pt-16 md:pb-12">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[340px] text-[15px] leading-relaxed text-muted">
              Массаж и телесные практики с Дильмирой. Запись — в переписке, фото и видео — в Instagram.
            </p>
            <div className="mt-6 flex gap-2">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              {hasWhatsApp && (
                <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="WhatsApp">
                  <WhatsAppIcon size={18} />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Навигация в подвале">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">Разделы</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[15px] text-ink-soft transition-colors hover:text-violet">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">Связаться</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-soft">
              <li>
                <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-violet">
                  Записаться в {bookingChannel}
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-violet">
                  @{site.instagram.handle}
                </a>
              </li>
              {site.contacts.phoneDisplay && (
                <li>
                  <a href={`tel:${site.contacts.phoneDisplay.replace(/[^\d+]/g, "")}`} className="hover:text-violet">
                    {site.contacts.phoneDisplay}
                  </a>
                </li>
              )}
              {site.contacts.address && <li>{site.contacts.address}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-6 text-[13px] text-muted sm:flex-row">
          <p>
            © {year} {site.name}. Все права защищены.
          </p>
          <p>
            Разработка сайта —{" "}
            <a href="https://weblink-app.vercel.app/" target="_blank" rel="noopener" className="font-semibold text-plum transition-colors hover:text-violet">
              WebLink
            </a>
          </p>
        </div>
        <p className="mt-3 text-[12px] text-muted/80">
          Массаж не заменяет медицинскую помощь. При противопоказаниях проконсультируйтесь с врачом.
        </p>
      </div>
    </footer>
  );
}
