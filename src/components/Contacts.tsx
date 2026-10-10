import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { bookingChannel, bookingUrl, hasWhatsApp, instagramUrl } from "@/lib/links";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Contacts() {
  const { contacts } = site;
  const ask = "уточняйте при записи";

  const rows = [
    {
      Icon: MapPin,
      label: "Адрес",
      value: contacts.address || ask,
      href: contacts.mapUrl || undefined,
      hrefLabel: "Построить маршрут",
    },
    {
      Icon: Phone,
      label: "Телефон",
      value: contacts.phoneDisplay || (hasWhatsApp ? "напишите в WhatsApp" : ask),
      href: contacts.phoneDisplay ? `tel:${contacts.phoneDisplay.replace(/[^\d+]/g, "")}` : undefined,
      hrefLabel: "Позвонить",
    },
    {
      Icon: Clock,
      label: "График",
      value: contacts.hours.length ? contacts.hours.join(" · ") : "по предварительной записи",
    },
  ];

  return (
    <section id="contacts" className="pb-24 md:pb-32">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[var(--radius-panel)] bg-plum px-6 py-14 text-white md:px-14 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, #7446B5, transparent 65%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #E9DDF7, transparent 65%)" }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <span className="eyebrow !text-lilac">контакты и запись</span>
              <h2 className="h-section mt-5 max-w-[14ch] lowercase">
                найдите время <span className="serif-accent normal-case text-lilac">для себя</span>
              </h2>
              <p className="mt-6 max-w-[440px] text-[16.5px] leading-relaxed text-white/75">
                Напишите, какая процедура вам интересна, — в ответ пришлют свободные окна и стоимость. Без звонков и ожидания на линии.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  {hasWhatsApp ? <WhatsAppIcon size={18} /> : <InstagramIcon size={18} />}
                  Записаться в {bookingChannel}
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                  <InstagramIcon size={18} />
                  Наш Instagram
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/60">{site.fullName}</p>
              <ul className="grid gap-3">
                {rows.map(({ Icon, label, value, href, hrefLabel }) => (
                  <li key={label} className="flex items-start gap-4 rounded-[20px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-lilac">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-medium uppercase tracking-[0.12em] text-white/55">{label}</p>
                      <p className="mt-1 text-[16.5px] font-medium text-white">{value}</p>
                      {href && (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1.5 inline-flex items-center gap-1 text-[14px] font-semibold text-lilac hover:text-white">
                          {hrefLabel} <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-[20px] border border-white/12 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.12]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-lilac">
                      <InstagramIcon size={19} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-medium uppercase tracking-[0.12em] text-white/55">Instagram</p>
                      <p className="mt-1 truncate text-[16.5px] font-medium">@{site.instagram.handle}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-lilac" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {contacts.mapEmbedUrl && (
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[22px] md:aspect-[21/8]">
              <iframe src={contacts.mapEmbedUrl} title="Карта: как добраться до Dilmira" loading="lazy" className="h-full w-full border-0" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
