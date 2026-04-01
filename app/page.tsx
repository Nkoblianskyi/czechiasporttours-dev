import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import HeroSection from '@/components/home/hero-section'
import FeaturesSection from '@/components/home/features-section'
import ToursPreviewSection from '@/components/home/tours-preview-section'
import AboutPreviewSection from '@/components/home/about-preview-section'
import InfoSection from '@/components/home/info-section'
import FaqSection from '@/components/home/faq-section'
import CtaSection from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ToursPreviewSection />
        <AboutPreviewSection />
        <InfoSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
