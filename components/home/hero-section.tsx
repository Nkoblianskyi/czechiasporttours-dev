import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Shield, Users } from 'lucide-react'

const heroStats = [
  { value: '13+', label: 'Sportovišť' },
  { value: '8', label: 'Sportů' },
  { value: 'CZ & EU', label: 'Destinace' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden flex flex-col">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-czech.jpg"
          alt="Praha - CzechiaSportTours sportovní zájezdy"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/75" />
        {/* Diagonal overlay strip */}
        <div
          className="absolute inset-y-0 right-0 w-[45%] bg-primary/95 hidden lg:block"
          style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
      </div>

      {/* Top ornamental stripe — Czech flag red */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-30" />

      {/* Main content */}
      <div className="relative z-20 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-12 pt-32 pb-16 lg:pt-36 lg:pb-0">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

          {/* Left — main heading block */}
          <div className="lg:col-span-7 flex flex-col gap-8 pb-16 lg:pb-0">

            {/* Eyebrow label */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-px bg-accent" />
                <span className="w-2 h-px bg-accent/60" />
              </div>
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.45em] font-sans">
                czechiasporttours.com
              </span>
            </div>

            {/* Heading — serif display */}
            <div>
              <h1 className="font-serif text-6xl xl:text-7xl 2xl:text-8xl font-black text-primary-foreground leading-[0.9] text-balance">
                Sportovní
                <br />
                <em className="not-italic text-accent">Zájezdy</em>
                <br />
                po Česku
                <br />
                <span className="text-primary-foreground/50 text-4xl xl:text-5xl font-serif font-bold">
                  &amp; Evropě
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-primary-foreground/65 text-base leading-relaxed max-w-sm font-sans">
              Vstupte za kulisy nejslavnějších stadionů, arén a závodních okruhů. Průvodci-specialisté. Malé skupiny. Autentický přístup.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-accent/90 transition-colors group font-sans"
              >
                Prohlédnout zájezdy
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-primary-foreground/25 text-primary-foreground font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-colors font-sans"
              >
                Rezervovat termín
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-primary-foreground/10">
              {[
                { icon: Shield, text: 'Certifikovaní průvodci' },
                { icon: Users, text: 'Max. 15 osob ve skupině' },
                { icon: MapPin, text: 'Praha · Brno · EU' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={12} className="text-accent shrink-0" />
                  <span className="text-primary-foreground/45 text-[10px] uppercase tracking-[0.25em] font-sans">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vertical stats panel */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-center pl-16 xl:pl-20 gap-0">

            {/* Big decorative serif character */}
            <div
              className="text-[220px] font-serif font-black leading-none text-primary-foreground/5 select-none absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            >
              Č
            </div>

            {/* Stats stack */}
            <div className="relative z-10 flex flex-col gap-0 border-l-2 border-accent/30 pl-8">
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-1 py-7 ${i < heroStats.length - 1 ? 'border-b border-primary-foreground/10' : ''}`}
                >
                  <span className="font-serif text-5xl xl:text-6xl font-black text-accent leading-none tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-primary-foreground/40 text-[10px] uppercase tracking-[0.35em] font-sans">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom scroll indicator */}
        <div className="hidden lg:flex items-center gap-3 pb-8">
          <div className="flex flex-col gap-1">
            <div className="w-px h-8 bg-primary-foreground/20 mx-auto" />
            <div className="w-px h-4 bg-accent/50 mx-auto" />
          </div>
          <span className="text-primary-foreground/25 text-[9px] uppercase tracking-[0.45em] font-sans">Rolovat</span>
        </div>

      </div>

      {/* Bottom bar strip — category tags */}
      <div className="relative z-20 bg-primary/80 backdrop-blur-sm border-t border-primary-foreground/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-0 divide-x divide-primary-foreground/10 overflow-x-auto">
            {['Fotbal', 'Lední hokej', 'Atletika', 'Motorsport', 'Cyklistika', 'Tenis', 'Plavání'].map((cat) => (
              <Link
                key={cat}
                href={`/catalog?category=${encodeURIComponent(cat)}`}
                className="shrink-0 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/40 hover:text-accent transition-colors font-sans whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
