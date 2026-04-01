'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Je nutné rezervovat předem?',
    a: 'Ano - rezervace předem je povinná. Pracujeme v malých skupinách s omezenou kapacitou, proto doporučujeme rezervovat alespoň 48 hodin předem. Použijte náš kontaktní formulář nebo napište přímo e-mail.',
  },
  {
    q: 'V jakých jazycích zájezdy probíhají?',
    a: 'Všechny zájezdy vedeme standardně v češtině a angličtině. Požadavky na jiné jazyky uveďte při rezervaci - uděláme vše pro jejich zajištění.',
  },
  {
    q: 'Kolik lidí bývá ve skupině?',
    a: 'Velikost skupiny je omezena na 10–15 osob v závislosti na konkrétním zájezdu. To zaručuje osobní přístup a skutečně přímý kontakt s místem. K dispozici jsou i soukromé skupinové rezervace.',
  },
  {
    q: 'Co je zahrnuto v ceně zájezdu?',
    a: 'Každý zájezd zahrnuje certifikovaného průvodce-specialistu, vstupné na sportoviště a intimní skupinový zážitek. Detailní obsah najdete na stránce každého zájezdu.',
  },
  {
    q: 'Mohou se účastnit i děti?',
    a: 'Většina zájezdů je vhodná pro rodiny. Doporučení pro věkové skupiny najdete na stránce každého zájezdu. Rodiny s malými dětmi prosíme, aby nás předem kontaktovaly.',
  },
  {
    q: 'Co se stane při špatném počasí?',
    a: 'Zájezdy v krytých halách a stadionech probíhají bez ohledu na počasí. U venkovních míst (závodní okruhy, cyklotrasy) nabídneme náhradní termín při extrémních podmínkách.',
  },
  {
    q: 'Je možná soukromá skupinová rezervace?',
    a: 'Samozřejmě. Soukromé skupinové rezervace jsou dostupné pro všechny zájezdy a lze je přizpůsobit vašemu programu a počtu osob. Pro ceny a dostupnost nás prosím kontaktujte.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-primary border-b border-primary-foreground/10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Levý panel s popisem */}
          <div className="lg:col-span-4 lg:pr-16 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                Časté dotazy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-serif text-primary-foreground leading-tight text-balance mb-6">
              Otázky<br />&amp; odpovědi
            </h2>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-8 font-sans">
              Vše, co se hodí vědět před rezervací sportovního zájezdu v České republice.
            </p>

            {/* Trojice ministat */}
            <div className="hidden lg:grid grid-cols-3 gap-px bg-primary-foreground/10 mb-auto">
              {[
                { val: '48h', sub: 'předem' },
                { val: '15', sub: 'max. osob' },
                { val: 'CZ', sub: '& anglicky' },
              ].map((s) => (
                <div key={s.sub} className="bg-primary/50 px-4 py-5 text-center">
                  <div className="text-2xl font-black font-serif text-accent leading-none tabular-nums">
                    {s.val}
                  </div>
                  <div className="text-primary-foreground/35 text-[9px] uppercase tracking-[0.25em] mt-1 font-sans">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block mt-8 border-l-4 border-accent pl-5">
              <p className="text-primary-foreground/70 text-sm leading-relaxed font-sans">
                Máte další otázky? Kontaktujte nás přímo - odpovíme do 24 hodin.
              </p>
              <a
                href="/contact"
                className="text-accent text-[11px] font-black uppercase tracking-[0.2em] mt-3 inline-block hover:underline font-sans"
              >
                Kontaktovat nás
              </a>
            </div>
          </div>

          {/* Accordion otázek */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-primary-foreground/10 border-t border-primary-foreground/10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-start justify-between py-5 text-left gap-6 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-primary-foreground/20 text-xs font-black tabular-nums pt-0.5 shrink-0 group-hover:text-accent transition-colors font-sans">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'font-bold text-sm md:text-base leading-snug transition-colors font-sans',
                        open === i ? 'text-accent' : 'text-primary-foreground',
                      )}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <span className="shrink-0 w-6 h-6 border border-primary-foreground/20 flex items-center justify-center mt-0.5">
                    {open === i ? (
                      <Minus size={12} className="text-accent" />
                    ) : (
                      <Plus size={12} className="text-primary-foreground/60" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 pl-10',
                    open === i ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0',
                  )}
                >
                  <p className="text-primary-foreground/55 text-sm leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
