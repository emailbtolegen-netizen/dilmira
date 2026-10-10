import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { site } from "@/content/site";
import { bookingChannel, bookingUrl, hasWhatsApp, instagramUrl } from "@/lib/links";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Hero() {
  const { hero } = site;
  return (
    <section id="top" className="relative overflow-hidden pt-[112px] md:pt-[136px]">
      {/* Мягкое лиловое свечение за заголовком */}
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute left-1/2 top-[30%] h-[min(900px,130vw)] w-[min(900px,130vw)] rounded-full opacity-90 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgb(116 70 181 / 0.16), transparent 58%), radial-gradient(circle at 70% 65%, rgb(233 221 247 / 0.9), transparent 62%)",
        }}
      />

      <div className="container-x relative flex flex-col items-center text-center">
        <span className="eyebrow hero-in" style={{ ["--d" as string]: "50ms" }}>
          {hero.eyebrow}
        </span>

        <h1 className="h-display mt-6 max-w-[15ch]">
          <span className="hero-in block" style={{ ["--d" as string]: "200ms" }}>
            {hero.titleLine1}
          </span>
          <span
            className="hero-in serif-accent mt-1 block text-[1.04em] leading-[0.95] text-plum normal-case"
            style={{ ["--d" as string]: "380ms" }}
          >
            {hero.titleLine2}
          </span>
        </h1>

        <p className="lede hero-in mt-7 max-w-[540px]" style={{ ["--d" as string]: "600ms" }}>
          {hero.lede}
        </p>

        <div className="hero-in mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row" style={{ ["--d" as string]: "780ms" }}>
          <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
            {hasWhatsApp ? <WhatsAppIcon size={18} /> : <InstagramIcon size={18} />}
            Записаться в {bookingChannel}
          </a>
          <a href="#services" className="btn btn-ghost w-full sm:w-auto">
            Посмотреть услуги
            <ArrowDown size={16} />
          </a>
        </div>
      </div>

      <div className="container-x relative mt-14 md:mt-20">
        <div className="hero-in relative" style={{ ["--d" as string]: "950ms" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-lift sm:aspect-[16/10] md:rounded-[var(--radius-panel)] lg:aspect-[21/9]">
            <Image
              src={hero.image}
              alt="Сеанс расслабляющего массажа с маслом"
              fill
              priority
              sizes="(min-width: 1240px) 1180px, 100vw"
              className="object-cover object-[60%_center]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-plum-deep/45 via-transparent to-transparent" />

            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3 md:inset-x-8 md:bottom-8">
              <p className="max-w-[300px] text-left text-[15px] font-medium leading-snug text-white md:text-[17px]">
                Массаж и телесные практики
                <span className="serif-accent block text-[22px] text-lilac md:text-[26px]">с Дильмирой</span>
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="float-y inline-flex items-center gap-3 rounded-full bg-white/85 py-2 pl-2 pr-5 text-left shadow-soft backdrop-blur-md transition-colors hover:bg-white"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet to-plum text-white">
                  <InstagramIcon size={18} />
                </span>
                <span className="leading-tight">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">фото и видео</span>
                  <span className="block text-[14px] font-semibold text-ink">@{site.instagram.handle}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
