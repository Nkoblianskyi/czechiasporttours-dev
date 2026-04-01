import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Mail, Check } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import FaqSection from '@/components/home/faq-section'

export const metadata: Metadata = {
  title: 'O nás - CzechiaSportTours',
  description:
    'Poznejte tým CzechiaSportTours. Přední organizátor sportovních zájezdů v České republice - certifikovaní průvodci, autentická sportoviště, malé skupiny.',
}

const values = [
  {
    index: '01',
    title: 'Autentičnost',
    body: 'Každý zájezd se koná na skutečných, fungujících sportovištích. Žádné kopie, žádné simulace - jen pravé stadiony, závodní okruhy a arény.',
  },
  {
    index: '02',
    title: 'Intimita',
    body: 'Každou skupinu omezujeme na 15 osob, abychom zaručili přímý přístup, osobní pozornost a skutečný dialog - nikoliv anonymní dav turistů.',
  },
  {
    index: '03',
    title: 'Odbornost',
    body: 'Naši průvodci jsou historici sportu a znalci sportovišť. Znají každý rekord, každý příběh i každý kout těch míst.',
  },
  {
    index: '04',
    title: 'Spolehlivost',
    body: 'Pečlivě naplánované trasy, jasná komunikace a transparentní ceny - od potvrzení rezervace až po rozloučení u brány sportoviště.',
  },
]

const stats = [
  { value: '13+', label: 'Unikátních zájezdů' },
  { value: '7', label: 'Sportovních odvětví' },
  { value: '15', label: 'Max. osob ve skupině' },
  { value: '2020', label: 'Rok vzniku' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero - split s fotografií */}
        <section className="bg-primary overflow-hidden border-b border-primary-foreground/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Levý text */}
              <div className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 lg:pl-12 lg:pr-16 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-10 h-0.5 bg-accent" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] font-sans">
                    O CzechiaSportTours
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black font-serif text-primary-foreground leading-[0.88] text-balance mb-6">
                  Kdo<br />
                  <span className="text-accent">jsme</span>
                </h1>
                <p className="text-primary-foreground/55 text-base leading-relaxed max-w-sm font-sans">
                  Přední organizátor sportovních zájezdů v České republice - zákulisní přístup na nejslavnější sportoviště ČR a EU.
                </p>
              </div>

              {/* Pravá fotografie */}
              <div className="relative min-h-[360px] lg:min-h-0  mt-30">
                <Image
                  src="/images/about-czech.jpg"
                  alt="Průvodce CzechiaSportTours na českém sportovišti"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary/25" />
                {/* Levá červená svislá páska */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
                {/* Praha badge */}
                <div className="absolute top-8 right-8 border border-primary-foreground/30 bg-primary/80 backdrop-blur-sm px-4 py-2.5">
                  <span className="text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-black font-sans">
                    Praha, ČR
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Příběh - velký text s datovým sloupcem */}
        <section className="bg-background py-20 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Levý label */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-0.5 bg-accent" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                    Náš příběh
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black font-serif text-foreground leading-tight text-balance mb-8">
                  Sportovní turistika,<br />jak má být
                </h2>

                {/* Statistiky */}
                <div className="grid grid-cols-2 gap-px bg-border">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-background p-5">
                      <div className="text-4xl font-black font-serif text-accent leading-none tabular-nums mb-1">
                        {s.value}
                      </div>
                      <div className="text-muted-foreground text-[9px] uppercase tracking-[0.2em] leading-snug font-sans">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pravý text */}
              <div className="lg:col-span-8 flex flex-col gap-5 lg:pt-2">
                <p className="text-muted-foreground text-base leading-relaxed font-sans">
                  CzechiaSportTours vznikl s jedinou misí: propojit sportovní nadšence s milovanými místy způsobem, který daleko přesahuje sledování z tribuny. Malé, zanícené skupiny provádíme šatnami, závodními halami, olympijskými bazény a tiskovou místností největších českých sportovišť.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed font-sans">
                  Náš tým tvoří certifikovaní průvodci s hlubokými znalostmi české sportovní historie, architektury sportovišť a legend, které tato místa proslavily. Ať jste fotbalový fanoušek sledující stopy slávistů, nebo motorsportový nadšenec procházející boxovou uličkou Automotodromu Brno - zaručujeme zážitek, který jinde nedostanete.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed font-sans">
                  Provozujeme celoroční program s třinácti různými zájezdy zahrnujícími fotbal, hokej, atletiku, motorsport, cyklistiku, tenis a plavání. Každou sezónu přidáváme nové destinace v ČR i EU.
                </p>
                <div className="pt-4">
                  <Link
                    href="/catalog"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-[11px] font-black uppercase tracking-[0.2em] px-7 py-4 hover:opacity-90 transition-opacity font-sans"
                  >
                    Zobrazit všechny zájezdy
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Hodnoty - horizontální karty s indexem */}
        <section className="bg-primary py-20 md:py-28 border-b border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-0.5 bg-accent" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                    Naše hodnoty
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black font-serif text-primary-foreground leading-tight text-balance">
                  Co nás pohání
                </h2>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-primary-foreground/10">
              {values.map((v) => (
                <div
                  key={v.index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-5 py-8 group"
                >
                  <div className="md:col-span-1">
                    <span className="text-5xl font-black font-serif text-primary-foreground/10 group-hover:text-accent/20 transition-colors leading-none tabular-nums">
                      {v.index}
                    </span>
                  </div>
                  <div className="md:col-span-4 md:col-start-2">
                    <h3 className="text-xl font-black font-serif text-primary-foreground mb-1">
                      {v.title}
                    </h3>
                    <div className="h-0.5 w-0 bg-accent group-hover:w-10 transition-all duration-300" />
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-primary-foreground/55 text-sm leading-relaxed font-sans">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontaktní sekce */}
        <section className="bg-background py-20 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="block w-8 h-0.5 bg-accent" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                    Kontaktujte nás
                  </span>
                </div>
                <div className="flex flex-col gap-7 mb-8">
                  <div className="flex items-start gap-5">
                    <div className="w-9 h-9 bg-accent flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-wide mb-1.5 font-sans">Zapsané sídlo</p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                        FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                        Myrianthous Anna<br />
                        Panagioti Kaspi 5A., Nicosia 1095, Kypr
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-9 h-9 bg-accent flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-wide mb-1 font-sans">E-mail</p>
                      <a href="mailto:info@czechiasporttours.com" className="text-sm text-muted-foreground hover:text-accent transition-colors font-sans">
                        info@czechiasporttours.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {['Dotaz zdarma', 'Odpověď do 24 hodin', 'Soukromé skupinové možnosti'].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground font-sans">
                        <Check size={14} className="text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-foreground text-background text-[11px] font-black uppercase tracking-[0.2em] px-7 py-4 hover:bg-accent hover:text-accent-foreground transition-colors font-sans"
                  >
                    Kontaktovat nás
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Vedlejší informace */}
              <div className="flex flex-col gap-6">
                <div className="bg-muted border-l-4 border-accent p-8">
                  <p className="text-foreground text-[10px] font-black uppercase tracking-[0.3em] mb-3 font-sans">
                    Soukromé skupinové zájezdy
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    Každý zájezd lze rezervovat výhradně pro Vaši skupinu s flexibilním časovým rozvrhem. Kontaktujte nás pro skupinové ceny a dostupnost.
                  </p>
                </div>
                <div className="bg-foreground p-8">
                  <p className="text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] mb-3 font-sans">
                    Firemní a incentivní zájezdy
                  </p>
                  <p className="text-primary-foreground/55 text-sm leading-relaxed font-sans">
                    Organizujeme sportovní zájezdy pro firemní týmy, korporátní akce a incentivní programy po celé ČR a EU. Napište nám pro individuální nabídku.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <FaqSection />

      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
