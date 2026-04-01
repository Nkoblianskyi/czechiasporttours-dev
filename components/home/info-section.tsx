import Link from 'next/link'
import { ArrowUpRight, Calendar, Globe2, MapPinned, Timer, Users, ClipboardCheck } from 'lucide-react'

const infoItems = [
  {
    number: '01',
    icon: Calendar,
    label: 'Termíny',
    heading: 'Provozujeme celý rok',
    body: 'Zájezdy probíhají každý týden od úterý do neděle. V prázdninové a sváteční sezóně doporučujeme rezervovat s předstihem - o kapacity je zájem.',
  },
  {
    number: '02',
    icon: Globe2,
    label: 'Jazyky',
    heading: 'Čeština a angličtina',
    body: 'Všechny zájezdy vedeme standardně v češtině a angličtině. Jiné jazyky jsou dostupné na vyžádání - uveďte je při rezervaci.',
  },
  {
    number: '03',
    icon: MapPinned,
    label: 'Místa',
    heading: '13+ ikonických sportovišť',
    body: 'Od Eden Arény a O2 Arény v Praze, přes Automotodrom Brno až po top kluby v EU. Každou sezónu přidáváme nové destinace.',
  },
  {
    number: '04',
    icon: Timer,
    label: 'Délka',
    heading: '1,5 až 8 hodin',
    body: 'Zájezdy trvají od 1,5 hodiny (prohlídka arény) až po celodenní výlet s více místy - ideální jako poloden nebo celý den v Praze.',
  },
  {
    number: '05',
    icon: Users,
    label: 'Skupina',
    heading: 'Max. 15 osob',
    body: 'Každý zájezd je omezen na 15 účastníků pro garantovaně intimní zážitek. Soukromé skupinové rezervace jsou k dispozici pro libovolný počet osob.',
  },
  {
    number: '06',
    icon: ClipboardCheck,
    label: 'Rezervace',
    heading: 'Potvrzení do 24–48 hodin',
    body: 'Rezervujte přes náš kontaktní formulář nebo e-mailem. Každou rezervaci potvrdíme do 1–2 pracovních dnů s úplnými detaily a popisem místa setkání.',
  },
]

export default function InfoSection() {
  return (
    <section className="bg-muted border-b border-border py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Hlavička — rozdělená na dvě části */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                Praktické informace
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-serif text-foreground leading-tight text-balance">
              Vše, co potřebujete<br />vědět před rezervací
            </h2>
          </div>
          <div className="flex items-end justify-start lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-[11px] font-black uppercase tracking-[0.2em] px-7 py-4 hover:opacity-90 transition-opacity font-sans"
            >
              Rezervovat zájezd
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mřížka info karet — střídající pozadí */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {infoItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="bg-background p-8 flex flex-col gap-5 group hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {/* Hlavička karty — číslo + ikona + label */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black font-serif text-border group-hover:text-primary-foreground/15 leading-none tabular-nums transition-colors">
                      {item.number}
                    </span>
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                      {item.label}
                    </span>
                  </div>
                  <Icon
                    size={18}
                    className="text-border group-hover:text-accent transition-colors"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-black text-foreground group-hover:text-primary-foreground uppercase tracking-wide mb-2 leading-tight font-sans transition-colors">
                    {item.heading}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/60 text-sm leading-relaxed font-sans transition-colors">
                    {item.body}
                  </p>
                </div>
                {/* Spodní akcent čára */}
                <div className="h-px w-0 bg-accent group-hover:w-full transition-all duration-500 mt-auto" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
