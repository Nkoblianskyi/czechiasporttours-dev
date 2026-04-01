import Link from 'next/link'
import { MapPin, Mail, ArrowUpRight, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Úvod' },
  { href: '/catalog', label: 'Katalog zájezdů' },
  { href: '/about', label: 'O nás' },
  { href: '/contact', label: 'Kontakt' },
]

const legalLinks = [
  { href: '/privacy-policy', label: 'Ochrana osobních údajů' },
  { href: '/cookie-privacy', label: 'Zásady cookies' },
]

const featuredTours = [
  { href: '/catalog/eden-arena-slavia', label: 'Eden Aréna - SK Slavia Praha' },
  { href: '/catalog/o2-arena-hokej', label: 'O2 Aréna - Lední hokej' },
  { href: '/catalog/sparta-letna-fotbal', label: 'Letná - AC Sparta Praha' },
  { href: '/catalog/brno-velka-cena', label: 'Automotodrom Brno' },
  { href: '/catalog/cyklistika-krkonose', label: 'Cyklistika - Krkonoše' },
  { href: '/catalog/grand-tour-prahy', label: 'Pražský Grand Výlet' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">

      {/* Top accent stripe — Czech flag colors */}
      <div className="flex h-[3px] w-full">
        <div className="flex-1 bg-primary-foreground/20" />
        <div className="flex-1 bg-accent" />
        <div className="flex-1 bg-primary-foreground/20" />
      </div>

      {/* CTA Banner — full width editorial strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-sans font-black uppercase tracking-[0.35em] text-accent">
              Připraveni na cestu?
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground leading-tight text-balance">
              Rezervujte svůj sportovní<br className="hidden md:block" /> zájezd ještě dnes.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground font-sans font-black text-[11px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-accent/90 transition-colors shrink-0"
          >
            Kontaktujte nás
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main grid body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-0">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-6 pr-0 lg:pr-10 pb-10 lg:pb-0">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="block w-3 h-3 bg-accent shrink-0" aria-hidden="true" />
              <span className="font-serif font-bold text-lg uppercase tracking-tight leading-none">
                Czechia<span className="text-accent">Sport</span>Tours
              </span>
            </Link>
            <p className="text-primary-foreground/45 text-sm leading-relaxed font-sans max-w-[240px]">
              Profesionální sportovní zájezdy na nejslavnější stadiony a arény v České republice a celé Evropě.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="mailto:info@czechiasporttours.com"
                className="inline-flex items-center gap-2.5 text-sm text-primary-foreground/50 hover:text-accent transition-colors font-sans"
              >
                <Mail size={12} className="text-accent shrink-0" />
                info@czechiasporttours.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={12} className="text-accent shrink-0 mt-0.5" />
                <span className="text-xs text-primary-foreground/40 font-sans leading-relaxed">
                  FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                  Myrianthous Anna <br/>
                  Panagioti Kaspi 5A, Nicosia 1095, Cyprus
                </span>
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-primary-foreground/10 mx-10 self-stretch" aria-hidden="true" />

          {/* Column 2 — Tours */}
          <div className="flex flex-col gap-5 pb-10 lg:pb-0">
            <h3 className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-accent">
              Zájezdy
            </h3>
            <ul className="flex flex-col gap-2.5">
              {featuredTours.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-sans"
                  >
                    <span
                      className="block w-0 h-px bg-accent group-hover:w-3 transition-all duration-200 shrink-0"
                      aria-hidden="true"
                    />
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-primary-foreground/10 mx-10 self-stretch" aria-hidden="true" />

          {/* Column 3 — Navigation */}
          <div className="flex flex-col gap-5 pb-10 lg:pb-0">
            <h3 className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-accent">
              Navigace
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-sans"
                  >
                    <span
                      className="block w-0 h-px bg-accent group-hover:w-3 transition-all duration-200 shrink-0"
                      aria-hidden="true"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Destinations sub-list */}
            <h3 className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-accent mt-4">
              Destinace
            </h3>
            <ul className="flex flex-col gap-1.5">
              {['Praha', 'Brno', 'Ostrava', 'Vídeň', 'Berlín', 'Varšava'].map((city) => (
                <li key={city} className="text-xs text-primary-foreground/35 font-sans">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-primary-foreground/10 mx-10 self-stretch" aria-hidden="true" />

          {/* Column 4 — Stats + Legal */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-accent">
              CzechiaSportTours
            </h3>

            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '13+', label: 'Zájezdů' },
                { value: '6', label: 'Zemí EU' },
                { value: '100%', label: 'Autentické' },
                { value: '24/7', label: 'Podpora' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-serif font-bold text-gold leading-none">
                    {s.value}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-primary-foreground/40">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Czech national stripe decoration */}
            <div className="flex flex-col gap-[3px] w-8 mt-4">
              <div className="h-[3px] bg-primary-foreground/25" />
              <div className="h-[3px] bg-accent" />
              <div className="h-[3px] bg-primary-foreground/25" />
            </div>
          </div>

        </div>
      </div>

      {/* Oversized editorial brand name */}
      <div className="relative overflow-hidden select-none border-t border-primary-foreground/10 mt-4">
        <span
          aria-hidden="true"
          className="block font-serif font-bold text-[13vw] leading-[0.85] tracking-tight text-primary-foreground/[0.035] whitespace-nowrap px-6 lg:px-12 pt-4 pb-1"
        >
          CzechiaSportTours
        </span>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-primary-foreground/25 text-[10px] font-sans uppercase tracking-[0.25em]">
            &copy; {new Date().getFullYear()} CzechiaSportTours &mdash; Všechna práva vyhrazena
          </span>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-primary-foreground/25 text-[10px] font-sans uppercase tracking-[0.25em] hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
