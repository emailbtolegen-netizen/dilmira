import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { bookingChannel, bookingUrl, priceRequestUrl } from "@/lib/links";

export function Prices() {
  const hasAnyPrice = site.services.some((s) => s.price);
  return (
    <section id="prices" className="py-24 md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">цены</span>
          <h2 className="h-section mt-5">
            прайс-<span className="serif-accent text-plum">лист</span>
          </h2>
          <p className="lede mt-6 max-w-[400px]">
            {hasAnyPrice
              ? "Стоимость зависит от процедуры и длительности сеанса. Если не знаете, что выбрать, — напишите, подскажем."
              : "Стоимость зависит от процедуры и длительности сеанса. Актуальные цены и свободное время пришлют в ответ на сообщение."}
          </p>
          <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
            Узнать цены в {bookingChannel}
          </a>
        </div>

        <ul className="reveal card divide-y divide-line overflow-hidden p-2" style={{ ["--reveal-delay" as string]: "120ms" }}>
          {site.services.map((s) => (
            <li
              key={s.id}
              className={`flex flex-col gap-3 rounded-[16px] px-4 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6 ${
                s.featured ? "bg-lilac-soft" : ""
              }`}
            >
              <div>
                <p className="flex flex-wrap items-center gap-2 text-[17px] font-semibold tracking-[-0.015em]">
                  {s.title}
                  {s.featured && (
                    <span className="rounded-full bg-violet px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                      основное
                    </span>
                  )}
                </p>
                <p className="mt-1 text-[14px] text-muted">{s.duration ?? "Длительность — по запросу"}</p>
              </div>

              {s.price ? (
                <p className="text-[20px] font-bold tracking-[-0.02em] text-plum">{s.price}</p>
              ) : (
                <a
                  href={priceRequestUrl(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 self-start text-[14.5px] font-semibold text-violet sm:self-auto"
                >
                  Уточнить стоимость в {bookingChannel}
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
