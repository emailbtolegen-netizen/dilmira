import Image from "next/image";
import { site } from "@/content/site";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] shadow-lift">
            <Image
              src={about.image}
              alt="Руки мастера во время массажа спины"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-3 -z-10 h-[62%] w-[70%] rounded-[var(--radius-panel)] bg-lilac md:-right-6"
          />
          <div className="absolute -right-2 top-8 rounded-2xl bg-white/90 px-5 py-4 shadow-soft backdrop-blur md:-right-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">мастер</p>
            <p className="serif-accent text-[28px] leading-none text-plum">{site.specialist}</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="reveal">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="h-section mt-5">{about.title}</h2>
          </div>
          <div className="reveal mt-7 space-y-4" style={{ ["--reveal-delay" as string]: "120ms" }}>
            {about.paragraphs.map((p) => (
              <p key={p} className="lede">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-10 grid gap-3">
            {about.values.map((v, i) => (
              <li
                key={v.title}
                className="reveal card flex gap-5 p-5 md:p-6"
                style={{ ["--reveal-delay" as string]: `${180 + i * 90}ms` }}
              >
                <span className="serif-accent pt-0.5 text-[26px] leading-none text-violet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{v.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
