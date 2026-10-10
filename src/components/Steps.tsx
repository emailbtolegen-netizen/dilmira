import { CalendarHeart, MessageCircleHeart, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { bookingChannel, bookingUrl } from "@/lib/links";

const icons = [MessageCircleHeart, CalendarHeart, Sparkles];

export function Steps() {
  return (
    <section aria-labelledby="steps-title" className="py-24 md:py-32">
      <div className="container-x">
        <div className="reveal mx-auto max-w-[680px] text-center">
          <span className="eyebrow">почему это просто</span>
          <h2 id="steps-title" className="h-section mt-5">
            запись в <span className="serif-accent text-plum">три шага</span>
          </h2>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
          {site.steps.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li
                key={step.title}
                className="reveal card relative overflow-hidden p-7 md:p-8"
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              >
                <span aria-hidden="true" className="serif-accent absolute right-6 top-2 text-[96px] leading-none text-lilac-soft">
                  {i + 1}
                </span>
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-lilac text-plum">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="relative mt-6 text-[19px] font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-10 text-center">
          <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Написать в {bookingChannel}
          </a>
        </div>
      </div>
    </section>
  );
}
