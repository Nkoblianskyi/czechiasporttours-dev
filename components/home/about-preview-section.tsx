import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Trophy, Users, Globe, Calendar } from 'lucide-react'

const stats = [
  { icon: Trophy, value: '13+', label: 'Unikátních zájezdů' },
  { icon: Users, value: '15', label: 'Max. osob ve skupině' },
  { icon: Globe, value: '7+', label: 'Sportovních odvětví' },
  { icon: Calendar, value: '2020', label: 'Rok vzniku' },
]

export default function AboutPreviewSection() {
  return (
    <section className="bg-background py-20 md:py-28 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Horní nápis — celá šířka */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="block w-10 h-0.5 bg-accent" />
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] font-sans">
              O CzechiaSportTours
            </span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Hlavní grid — asymetrické rozložení */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Textový blok — vlevo, 5 sloupců */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-16 pb-12 lg:pb-0">
            <h2 className="text-5xl md:text-6xl font-black font-serif text-foreground leading-[0.92] text-balance mb-8">
              Vášeň pro sport.<br />
              <span className="text-accent">Český duch.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5 font-sans">
              Jsme přední organizátor sportovních zájezdů v České republice. Zprostředkujeme výjimečný zákulisní přístup pro sportovní nadšence - od pražských stadionů po EU arény.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 font-sans">
              Každou skupinu omezujeme na 15 osob. Žádné davy - jen autentický zážitek s odborným průvodcem.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-foreground text-background text-[11px] font-black uppercase tracking-[0.2em] px-7 py-4 hover:bg-accent hover:text-accent-foreground transition-colors self-start font-sans"
            >
              Náš příběh
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Fotografický blok s překryvnými statistikami — pravá část */}
          <div className="lg:col-span-7 relative">

            {/* Hlavní fotografie */}
            <div className="relative h-[440px] lg:h-[520px] overflow-hidden">
              <Image
                src="/images/about-czech.jpg"
                alt="CzechiaSportTours průvodce na českém sportovišti"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/30 to-foreground/60" />

              {/* Česká národní páska vlevo */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col">
                <div className="flex-1 bg-primary-foreground/90" style={{ flex: '1' }} />
                <div className="flex-1 bg-foreground" style={{ flex: '1' }} />
                <div className="flex-1 bg-accent" style={{ flex: '1' }} />
              </div>
              <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-accent/30" />


              {/* Velké číslo — dekorativní */}
              <div className="absolute bottom-8 left-8 z-10">
                <div className="bg-accent px-6 py-5">
                  <div className="text-5xl font-black font-serif text-accent-foreground leading-none tabular-nums">
                    13+
                  </div>
                  <div className="text-accent-foreground/70 text-[10px] uppercase tracking-[0.3em] mt-1 font-sans">
                    Sportovních zájezdů
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiky pod fotografií — 4 bloky v řadě */}
            <div className="grid grid-cols-4 gap-px bg-border mt-px">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-muted p-5 flex flex-col gap-2 group hover:bg-accent/5 transition-colors">
                  <Icon size={16} className="text-accent" />
                  <div className="text-2xl font-black font-serif text-foreground leading-none tabular-nums">
                    {value}
                  </div>
                  <div className="text-muted-foreground text-[9px] uppercase tracking-[0.2em] leading-snug font-sans">
                    {label}
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
