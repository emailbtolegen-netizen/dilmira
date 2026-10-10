import { site } from "@/content/site";

const phone = site.whatsapp.phone.replace(/\D/g, "");

/** true, когда номер WhatsApp заполнен в src/content/site.ts */
export const hasWhatsApp = phone.length >= 10;

export const instagramUrl = site.instagram.url;

/**
 * Ссылка для записи. Если номер WhatsApp задан — wa.me с готовым сообщением,
 * иначе — профиль Instagram, чтобы ни одна кнопка не оставалась без действия.
 */
export function bookingUrl(message: string = site.whatsapp.message): string {
  if (!hasWhatsApp) return instagramUrl;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function serviceBookingUrl(serviceTitle: string): string {
  return bookingUrl(
    `Здравствуйте! Хочу записаться на «${serviceTitle}» в Dilmira. Подскажите, пожалуйста, свободное время и стоимость.`,
  );
}

export function priceRequestUrl(serviceTitle: string): string {
  return bookingUrl(
    `Здравствуйте! Подскажите, пожалуйста, стоимость и длительность услуги «${serviceTitle}» в Dilmira.`,
  );
}

/** Подпись кнопки, честно отражающая, куда она ведёт. */
export const bookingChannel = hasWhatsApp ? "WhatsApp" : "Instagram";
