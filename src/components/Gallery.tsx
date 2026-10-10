"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { site } from "@/content/site";
import { instagramUrl } from "@/lib/links";
import { InstagramIcon } from "./icons";

// Разные размеры плиток для «живой» сетки (повторяется по кругу)
const layout = [
  "md:col-span-2 md:row-span-2",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "md:col-span-2",
];

export function Gallery() {
  const { items, isPlaceholder } = site.gallery;
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index === null ? null : items[index];

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-white py-24 md:py-36">
      <div className="container-x">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">атмосфера</span>
            <h2 id="gallery-title" className="h-section mt-5 max-w-[16ch]">
              тишина, тепло и <span className="serif-accent text-plum">забота о себе</span>
            </h2>
          </div>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost self-start md:self-auto">
            <InstagramIcon size={18} />
            Наш Instagram
          </a>
        </div>

        <ul className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4 lg:auto-rows-[230px]">
          {items.map((item, i) => (
            <li key={item.src} className={`reveal ${layout[i % layout.length]}`} style={{ ["--reveal-delay" as string]: `${(i % 4) * 70}ms` }}>
              <button
                type="button"
                onClick={() => open(i)}
                className="group relative block h-full w-full overflow-hidden rounded-[20px] bg-lilac-soft"
                aria-label={`Открыть фото: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 bg-plum-deep/0 transition-colors duration-500 group-hover:bg-plum-deep/25" />
                <span className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/90 text-plum opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand size={16} />
                </span>
              </button>
            </li>
          ))}
        </ul>

        {isPlaceholder && (
          <p className="mt-6 text-center text-[13px] text-muted">
            Иллюстративные фотографии. Реальные фото и видео сеансов — в{" "}
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-violet underline-offset-4 hover:underline">
              Instagram @{site.instagram.handle}
            </a>
          </p>
        )}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
        aria-label="Просмотр фотографии"
      >
        {current && (
          <div className="pointer-events-none flex h-full w-full items-center justify-center p-4 md:p-12">
            <div className="pointer-events-auto relative h-full max-h-[86vh] w-full max-w-[1100px]">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <button type="button" onClick={close} className="pointer-events-auto absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink" aria-label="Закрыть">
              <X size={20} />
            </button>
            <button type="button" onClick={() => step(-1)} className="pointer-events-auto absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink md:left-6" aria-label="Предыдущее фото">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => step(1)} className="pointer-events-auto absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink md:right-6" aria-label="Следующее фото">
              <ChevronRight size={20} />
            </button>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-[13px] font-medium text-ink">
              {(index ?? 0) + 1} / {items.length}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
