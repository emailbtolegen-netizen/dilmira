# Dilmira — сайт массажного салона

Одностраничный сайт для **Dilmira · массаж и телесные практики** (Instagram [@massage_dilmira.kz](https://www.instagram.com/massage_dilmira.kz/)).

Стек: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react.

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production-сборка
npm start        # запуск собранной версии
```

## Где что редактировать

| Что | Где |
| --- | --- |
| **Номер WhatsApp**, текст сообщения | `src/content/site.ts` → `whatsapp.phone` (только цифры, например `77011234567`) |
| Адрес, телефон, график, карта | `src/content/site.ts` → `contacts` |
| Услуги, цены, длительность | `src/content/site.ts` → `services` (`price` / `duration`; `null` = «уточнить») |
| Тексты блоков, FAQ, шаги записи | `src/content/site.ts` |
| Отзывы | `src/content/site.ts` → `reviews` (пока массив пуст, показывается блок-приглашение в Instagram) |
| Фотографии | `public/images/*.jpg` — замените файлы на свои с теми же именами |
| SEO, домен для Open Graph | `src/content/site.ts` → `seo`, `url` |
| OG-картинка, иконки | `public/og.jpg`, `src/app/icon.svg`, `src/app/apple-icon.png` |
| Цвета, шрифты, кнопки | `src/app/globals.css` (блок `@theme`) |

Пока `whatsapp.phone` пустой, все кнопки записи ведут в Instagram, а подписи на них говорят «Instagram». После ввода номера кнопки автоматически переключаются на `https://wa.me/<номер>?text=…` с готовым сообщением (для каждой услуги своё). Тогда же появляются иконка WhatsApp в шапке и зелёная плавающая кнопка на мобильных.

## Фотографии

Сейчас стоят **иллюстративные фото с Unsplash** (бесплатная лицензия), под галереей есть подпись об этом. Когда появятся реальные фото салона:
1. замените файлы в `public/images/`;
2. в `site.ts` выставьте `gallery.isPlaceholder: false`, чтобы убрать подпись.

## Публикация

**Vercel (рекомендуется):** загрузите проект на GitHub, затем на [vercel.com](https://vercel.com) выберите *Add New → Project* и импортируйте репозиторий. Настройки по умолчанию подходят. После публикации впишите итоговый домен в `site.url`.

Также подойдёт любой хостинг с Node.js: `npm run build && npm start`.
