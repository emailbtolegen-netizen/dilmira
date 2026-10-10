import { CircleDashed, Clapperboard, ImageIcon, Quote } from "lucide-react";
import { site } from "@/content/site";
import { instagramUrl } from "@/lib/links";
import { DilmiraMark, InstagramIcon } from "./icons";

export function Reviews() {
  const { reviews } = site;

  return (
    <section id="reviews" className="bg-white py-24 md:py-36">
      <div className="container-x">
        {reviews.length > 0 ? (
          <>
            <div className="reveal">
              <span className="eyebrow">отзывы</span>
              <h2 className="h-section mt-5">
                что говорят <span className="serif-accent text-plum">гости</span>
              </h2>
            </div>
            <ul className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
              {reviews.map((r) => (
                <li key={r.name + r.text.slice(0, 12)} className="reveal card flex w-[85%] shrink-0 snap-start flex-col p-7 md:w-auto">
                  <Quote size={26} className="text-lilac" fill="currentColor" />
                  <p className="mt-4 flex-1 text-[16px] leading-relaxed text-ink-soft">{r.text}</p>
                  <p className="mt-6 font-semibold">{r.name}</p>
                  <p className="text-[13px] text-muted">{r.source}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          // Достоверных отзывов пока нет — приглашаем в Instagram
          <div className="reveal relative overflow-hidden rounded-[var(--radius-panel)] bg-lilac-soft px-6 py-14 md:px-16 md:py-20">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lilac blur-2xl" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="eyebrow">отзывы</span>
                <h2 className="h-section mt-5 max-w-[15ch]">
                  впечатления гостей — <span className="serif-accent text-plum">в Instagram</span>
                </h2>
                <p className="lede mt-6 max-w-[460px]">
                  Мы не публикуем отзывы без разрешения. Фото, видео, ответы на вопросы и живые реакции после сеансов — в профиле салона.
                </p>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                  <InstagramIcon size={18} />
                  Смотреть Instagram
                </a>
              </div>

              {/* Карточка профиля */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group card relative mx-auto block w-full max-w-[380px] rotate-[-2deg] p-6 transition-transform duration-700 hover:rotate-0"
                aria-label={`Открыть профиль @${site.instagram.handle} в Instagram`}
              >
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-gradient-to-tr from-violet via-plum to-lilac p-[3px]">
                    <span className="block rounded-full bg-white p-[3px]">
                      <DilmiraMark size={56} />
                    </span>
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[16px] font-semibold">{site.instagram.handle}</p>
                    <p className="text-[13px] text-muted">Массаж · Дильмира · Телесные практики</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-1.5">
                  {[
                    { Icon: ImageIcon, label: "фото" },
                    { Icon: Clapperboard, label: "reels" },
                    { Icon: CircleDashed, label: "stories" },
                  ].map(({ Icon, label }, i) => (
                    <span
                      key={label}
                      className={`flex aspect-square flex-col items-center justify-center gap-1.5 rounded-lg text-plum ${
                        i === 1 ? "bg-lilac" : "bg-lilac-soft"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.6} />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em]">{label}</span>
                    </span>
                  ))}
                </div>
                <span className="mt-5 flex h-10 items-center justify-center rounded-xl bg-violet text-[14px] font-semibold text-white">
                  Подписаться
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
