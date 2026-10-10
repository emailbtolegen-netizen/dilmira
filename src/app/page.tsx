import { About } from "@/components/About";
import { Contacts } from "@/components/Contacts";
import { Faq } from "@/components/Faq";
import { FloatingBooking } from "@/components/FloatingBooking";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Prices } from "@/components/Prices";
import { RevealObserver } from "@/components/RevealObserver";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  alternateName: site.fullName,
  description: site.seo.description,
  url: site.url,
  image: `${site.url}/og.jpg`,
  sameAs: [site.instagram.url],
  ...(site.contacts.phoneDisplay && { telephone: site.contacts.phoneDisplay }),
  ...(site.contacts.address && { address: site.contacts.address }),
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Steps />
        <Gallery />
        <Prices />
        <Reviews />
        <Faq />
        <Contacts />
      </main>
      <Footer />
      <FloatingBooking />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
