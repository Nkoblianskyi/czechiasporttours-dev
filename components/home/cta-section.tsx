import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="relative bg-foreground overflow-hidden">

      {/* Pozadí — česká sportovní fotografie */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-czech.jpg"
          alt="Rezervace sportovního zájezdu v Česku"
          fill
          className="object-cover object-center opacity-15"
        />
      </div>

      {/* Česká vlajková páska — svislá vlevo */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col z-10">
        <div className="flex-1 bg-accent w-2" />
        <div className="flex-1 bg-background w-2" />
        <div className="flex-1 bg-accent w-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* Levý nadpisový blok */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                Začněte
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-serif text-primary-foreground uppercase leading-[0.88] text-balance">
              Připraveni<br />nahlédnout<br />
              <span className="text-accent">za kulisy?</span>
            </h2>
          </div>

          {/* Pravý CTA panel */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-16 lg:border-l border-primary-foreground/15">
            <p className="text-primary-foreground/55 text-base leading-relaxed max-w-sm font-sans">
              Kontaktujte nás, vyberte si zájezd a my se postaráme o vše ostatní. Místo potvrdíme do 1–2 pracovních dnů.
            </p>

            {/* Dvojice akčních karet */}
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="flex items-center justify-between gap-4 bg-accent text-accent-foreground font-black px-7 py-5 uppercase tracking-[0.15em] text-xs hover:opacity-90 transition-opacity group font-sans"
              >
                <span>Kontakt &amp; Rezervace</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/catalog"
                className="flex items-center justify-between gap-4 border-2 border-primary-foreground/25 text-primary-foreground font-black px-7 py-5 uppercase tracking-[0.15em] text-xs hover:border-accent hover:text-accent transition-colors group font-sans"
              >
                <span>Prohlédnout všechny zájezdy</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Ujišťovací miniřada */}
            <div className="flex items-center gap-0 divide-x divide-primary-foreground/15 border border-primary-foreground/10 mt-2">
              {[
                { val: 'Zdarma', sub: 'Dotaz' },
                { val: '24 h', sub: 'Odpověď' },
                { val: 'Malé', sub: 'Skupiny' },
              ].map((r) => (
                <div key={r.sub} className="flex-1 text-center px-4 py-4">
                  <div className="text-lg font-black font-serif text-accent leading-none">{r.val}</div>
                  <div className="text-primary-foreground/35 text-[9px] uppercase tracking-[0.2em] mt-0.5 font-sans">
                    {r.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
