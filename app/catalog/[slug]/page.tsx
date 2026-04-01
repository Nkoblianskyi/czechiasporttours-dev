import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, MapPin, Users, Check, ArrowRight, Phone, Mail } from 'lucide-react'
import { getTourBySlug, tours } from '@/lib/tours'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return {
    title: `${tour.title} — CzechiaSportTours`,
    description: tour.description,
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  // Doporučené zájezdy - jiné ze stejné kategorie nebo první 3
  const related = tours
    .filter((t) => t.slug !== tour.slug && t.category === tour.category)
    .slice(0, 3)
  const fallbackRelated = tours.filter((t) => t.slug !== tour.slug).slice(0, 3)
  const relatedTours = related.length >= 2 ? related : fallbackRelated

  return (
    <>
      <Navbar />
      <main>

        {/* HERO — fullbleed fotografický banner s překryvem textu */}
        <section className="relative min-h-[520px] md:min-h-[620px] flex flex-col justify-end overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-foreground/15" />
          {/* Levá svislá česká páska */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

          {/* Obsah na spodku */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12 md:pb-16 pt-28">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link
                href="/catalog"
                className="flex items-center gap-2 text-primary-foreground/50 text-[10px] font-black uppercase tracking-[0.2em] hover:text-accent transition-colors font-sans"
              >
                <ArrowLeft size={12} />
                Katalog
              </Link>
              <span className="text-primary-foreground/25 text-[10px] font-sans">/</span>
              <span className="text-primary-foreground/50 text-[10px] font-black uppercase tracking-[0.2em] font-sans line-clamp-1">
                {tour.title}
              </span>
            </div>

            {/* Kategorie + badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 font-sans">
                {tour.category}
              </span>
              {tour.badge && (
                <span className="border border-primary-foreground/30 text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 font-sans">
                  {tour.badge}
                </span>
              )}
            </div>

            {/* Název */}
            <h1 className="text-4xl md:text-6xl font-black font-serif text-primary-foreground leading-[0.95] text-balance max-w-3xl mb-7">
              {tour.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-[11px] text-primary-foreground/50 uppercase tracking-widest font-sans">
              <span className="flex items-center gap-2">
                <Clock size={12} className="text-accent" />
                {tour.duration}
              </span>
              <span className="w-1 h-1 bg-accent/50 rounded-full" />
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-accent" />
                {tour.location}
              </span>
              <span className="w-1 h-1 bg-accent/50 rounded-full" />
              <span className="flex items-center gap-2">
                <Users size={12} className="text-accent" />
                Max. 15 osob
              </span>
            </div>
          </div>
        </section>

        {/* OBSAH — dvousloupcový layout */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Levý hlavní sloupec */}
              <div className="lg:col-span-7">

                {/* O zájezdu */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block w-8 h-0.5 bg-accent" />
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                      O zájezdu
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed font-sans">
                    {tour.longDescription}
                  </p>
                </div>

                {/* Program a zážitky */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="block w-8 h-0.5 bg-accent" />
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                      Program zájezdu
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {tour.highlights.map((h, i) => (
                      <div key={h} className="flex items-start gap-5 group">
                        <div className="flex flex-col items-center shrink-0">
                          <span className="w-7 h-7 bg-foreground text-primary-foreground text-[10px] font-black flex items-center justify-center tabular-nums font-sans group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {i < tour.highlights.length - 1 && (
                            <div className="w-px flex-1 min-h-[24px] bg-border mt-1" />
                          )}
                        </div>
                        <p className="text-foreground text-sm leading-relaxed font-sans pt-1">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Zahrnuté služby */}
                <div className="bg-muted p-8 border-l-4 border-accent">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                      Co je zahrnuto
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.includes.map((inc) => (
                      <div key={inc} className="flex items-start gap-3">
                        <Check size={14} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground leading-relaxed font-sans">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pravý sticky sloupec — rezervační panel */}
              <div className="lg:col-span-5">
                <div className="sticky top-24 flex flex-col gap-6">

                  {/* Rezervační karta */}
                  <div className="bg-foreground border border-primary-foreground/10">
                    <div className="bg-accent px-7 py-5">
                      <p className="text-accent-foreground text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                        Rezervace zájezdu
                      </p>
                      <h3 className="text-xl font-black font-serif text-accent-foreground leading-snug mt-1 line-clamp-2">
                        {tour.title}
                      </h3>
                    </div>

                    <div className="p-7">
                      <div className="flex flex-col gap-3 mb-7">
                        {[
                          { label: 'Délka', value: tour.duration },
                          { label: 'Lokace', value: tour.location },
                          { label: 'Skupina', value: 'Max. 15 osob' },
                          { label: 'Jazyk', value: 'Čeština, Angličtina' },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex items-center justify-between text-sm">
                            <span className="text-primary-foreground/40 text-[10px] uppercase tracking-[0.2em] font-sans">{label}</span>
                            <span className="text-primary-foreground font-black font-sans text-xs">{value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="h-px bg-primary-foreground/10 mb-7" />

                      <Link
                        href={`/contact?tour=${tour.slug}`}
                        className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground text-[11px] font-black uppercase tracking-[0.2em] px-5 py-4 hover:opacity-90 transition-opacity font-sans"
                      >
                        Rezervovat / Zeptat se
                        <ArrowRight size={14} />
                      </Link>
                      <p className="text-primary-foreground/30 text-[10px] uppercase tracking-[0.2em] text-center mt-4 font-sans">
                        Odpovíme do 1–2 pracovních dnů
                      </p>
                    </div>
                  </div>

                  {/* Kontaktní karta */}
                  <div className="bg-muted border border-border p-6">
                    <p className="text-foreground text-[10px] font-black uppercase tracking-[0.3em] mb-4 font-sans">
                      Přímý kontakt
                    </p>
                    <a
                      href="mailto:info@czechiasporttours.com"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors font-sans group"
                    >
                      <Mail size={14} className="text-accent shrink-0" />
                      info@czechiasporttours.com
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DOPORUČENÉ ZÁJEZDY */}
        {relatedTours.length > 0 && (
          <section className="bg-foreground py-16 md:py-20 border-t border-primary-foreground/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <span className="block w-8 h-0.5 bg-accent" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                    Doporučené zájezdy
                  </span>
                </div>
                <Link
                  href="/catalog"
                  className="flex items-center gap-2 text-primary-foreground/40 text-[10px] font-black uppercase tracking-[0.2em] hover:text-accent transition-colors font-sans"
                >
                  Celý katalog <ArrowRight size={12} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/10">
                {relatedTours.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/catalog/${t.slug}`}
                    className="group bg-secondary flex flex-col overflow-hidden hover:bg-surface-muted transition-colors"
                  >
                    <div className="relative h-44 overflow-hidden shrink-0">
                      <Image src={t.image} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-foreground/30" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 font-sans">
                          {t.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-sans text-sm font-black text-secondary-foreground uppercase leading-snug mb-3 line-clamp-2">
                        {t.title}
                      </h3>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary-foreground/10">
                        <span className="text-[10px] text-secondary-foreground/40 uppercase tracking-wider font-sans">{t.location}</span>
                        <ArrowRight size={13} className="text-secondary-foreground/20 group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
