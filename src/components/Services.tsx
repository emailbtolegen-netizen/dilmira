import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { site } from "@/content/site";
import { serviceBookingUrl } from "@/lib/links";

export function Services() {
  return (
    <section id="services" className="relative bg-white py-24 md:py-36">
      <div className="container-x">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">услуги</span>
            <h2 className="h-section mt-5 max-w-[14ch]">
              массаж и <span className="serif-accent text-plum">телесные практики</span>
            </h2>
          </div>
          <p className="lede max-w-[380px]">
            Выберите направление — или просто опишите в сообщении, что вас беспокоит, и вам помогут подобрать процедуру.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {site.services.map((s, i) => (
            <li
              key={s.id}
              className="reveal group card flex flex-col overflow-hidden p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.06]"
                />
                <span className="absolute left-3 top-3 grid h-9 min-w-9 place-items-center rounded-full bg-white/90 px-2 text-[13px] font-semibold text-plum backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-5">
                <h3 className="text-[21px] font-semibold tracking-[-0.025em]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.description}</p>
                <div className="mb-6 mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
                  <div className="text-[14px]">
                    <span className="flex items-center gap-1.5 text-muted">
                      <Clock size={14} />
                      {s.duration ?? "время уточняйте"}
                    </span>
                    {s.price && <span className="mt-0.5 block font-semibold text-ink">{s.price}</span>}
                  </div>
                  <a
                    href={serviceBookingUrl(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm border border-line-strong bg-white text-ink hover:border-violet hover:bg-violet hover:text-white"
                    aria-label={`Записаться: ${s.title}`}
                  >
                    Записаться
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
