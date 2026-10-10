"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { site } from "@/content/site";
import { bookingChannel, bookingUrl } from "@/lib/links";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <span className="eyebrow">вопросы</span>
          <h2 className="h-section mt-5">
            частые <span className="serif-accent text-plum">вопросы</span>
          </h2>
          <p className="lede mt-6 max-w-[380px]">Не нашли ответ? Спросите напрямую — это быстрее, чем кажется.</p>
          <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8">
            Задать вопрос в {bookingChannel}
          </a>
        </div>

        <ul className="reveal space-y-3" style={{ ["--reveal-delay" as string]: "120ms" }}>
          {site.faq.map((item, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <li key={item.q} data-open={isOpen} className={`card transition-colors duration-500 ${isOpen ? "border-line-strong" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`${id}-btn`}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold tracking-[-0.015em] md:px-7 md:py-6"
                  >
                    {item.q}
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-500 ${
                        isOpen ? "rotate-45 bg-violet text-white" : "bg-lilac-soft text-plum"
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                <div id={id} role="region" aria-labelledby={`${id}-btn`} className="accordion-body">
                  <div>
                    <p className="px-6 pb-6 text-[15.5px] leading-relaxed text-muted md:px-7">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
