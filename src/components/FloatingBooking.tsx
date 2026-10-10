"use client";

import { useEffect, useState } from "react";
import { bookingChannel, bookingUrl, hasWhatsApp } from "@/lib/links";
import { InstagramIcon, WhatsAppIcon } from "./icons";

/** Плавающая кнопка записи на мобильных — появляется после первого экрана. */
export function FloatingBooking() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={bookingUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Записаться в ${bookingChannel}`}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 inline-flex h-14 items-center gap-2.5 rounded-full pl-4 pr-5 text-[15px] font-semibold text-white shadow-[0_14px_34px_-10px_rgb(41_35_51/0.5)] transition-all duration-500 md:hidden ${
        hasWhatsApp ? "bg-[#25D366]" : "bg-violet"
      } ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      {hasWhatsApp ? <WhatsAppIcon size={24} /> : <InstagramIcon size={22} />}
      Записаться
    </a>
  );
}
