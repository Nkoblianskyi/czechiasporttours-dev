import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Zásady souborů cookie - CzechiaSportTours',
  description:
    'Zásady souborů cookie společnosti CzechiaSportTours. Informace o souborech cookie používaných na czechiasporttours.com.',
}

const cookieTable = [
  {
    name: 'cookie-consent',
    type: 'Nezbytné',
    duration: '1 rok',
    purpose: 'Ukládá vaše rozhodnutí o souhlasu se soubory cookie.',
  },
  {
    name: '_ga',
    type: 'Analytické',
    duration: '2 roky',
    purpose: 'Google Analytics - rozlišuje unikátní návštěvníky.',
  },
  {
    name: '_ga_*',
    type: 'Analytické',
    duration: '2 roky',
    purpose: 'Google Analytics - udržuje stav relace.',
  },
  {
    name: '_gid',
    type: 'Analytické',
    duration: '24 hodin',
    purpose: 'Google Analytics - rozlišuje návštěvníky.',
  },
]

const sections = [
  {
    index: '01',
    title: 'Co je soubor cookie?',
    content:
      'Soubor cookie je malý textový soubor, který váš prohlížeč ukládá při návštěvě webové stránky. Soubory cookie pomáhají webu zapamatovat si vaše nastavení, zlepšit uživatelskou zkušenost a sbírat anonymní statistiky o návštěvnících.',
  },
  {
    index: '02',
    title: 'Typy souborů cookie, které používáme',
    content:
      'Webové stránky CzechiaSportTours používají dva typy souborů cookie: Nezbytné soubory cookie, které jsou nezbytné pro základní fungování webové stránky a nesbírají osobně identifikovatelné údaje, a Analytické soubory cookie, které sbírají anonymní, agregované statistiky pro zlepšení webové stránky.',
  },
  {
    index: '04',
    title: 'Správa a zákaz souborů cookie',
    content:
      'Při první návštěvě vám náš banner umožní přijmout nebo odmítnout soubory cookie. Nastavení můžete kdykoli změnit v prohlížeči: Chrome → Nastavení / Soukromí a zabezpečení; Firefox → Nastavení / Soukromí a zabezpečení; Safari → Předvolby / Soukromí; Edge → Nastavení / Soubory cookie a oprávnění webu. Zablokování souborů cookie může ovlivnit dostupnost některých funkcí.',
  },
  {
    index: '05',
    title: 'Soubory cookie třetích stran',
    content:
      'Naše stránky mohou používat Google Analytics pro analýzu statistik návštěvnosti. Podrobnosti o zpracování dat Googlem naleznete na policies.google.com/privacy.',
  },
  {
    index: '06',
    title: 'Aktualizace těchto zásad',
    content:
      'Vyhrazujeme si právo tyto zásady aktualizovat. Aktualizovaná verze bude zveřejněna na této stránce s aktualizovaným datem. Doporučujeme pravidelně tuto stránku kontrolovat.',
  },
  {
    index: '07',
    title: 'Kontakt',
    content:
      'Máte-li dotazy týkající se používání souborů cookie, kontaktujte nás na info@czechiasporttours.com.',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-surface pt-28 md:pt-36 pb-16 md:pb-20 border-b border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-16 bg-accent shrink-0" />
              <div>
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.35em] block mb-3 font-sans">
                  Právní informace - czechiasporttours.com
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground leading-none">
                  Zásady souborů
                  <br />
                  cookie
                </h1>
              </div>
            </div>
            <p className="text-primary-foreground/40 text-xs uppercase tracking-[0.3em] pl-5 border-l border-primary-foreground/10 font-sans">
              Aktualizováno: 1. ledna 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">

            {/* Intro */}
            <div className="border-l-4 border-accent pl-6 mb-14">
              <p className="text-muted-foreground text-base leading-relaxed font-sans">
                Tyto zásady vysvětlují, jaké soubory cookie CzechiaSportTours používá na czechiasporttours.com a jak je můžete spravovat.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {sections.map((s) => (
                <div key={s.index} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <span className="font-serif text-4xl font-bold text-border tabular-nums leading-none">
                      {s.index}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-3 font-sans">
                      {s.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{s.content}</p>
                  </div>
                </div>
              ))}

              {/* Cookie table */}
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <span className="font-serif text-4xl font-bold text-border tabular-nums leading-none">03</span>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-5 font-sans">
                    Přehled souborů cookie
                  </h2>
                  <div className="overflow-x-auto border border-border">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-muted border-b border-border">
                          {['Cookie', 'Typ', 'Platnost', 'Účel'].map((col) => (
                            <th
                              key={col}
                              className="text-left px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-sans border-r border-border last:border-r-0"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cookieTable.map((row, i) => (
                          <tr
                            key={row.name}
                            className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
                          >
                            <td className="px-4 py-3 font-mono text-xs text-foreground border-r border-border">
                              {row.name}
                            </td>
                            <td className="px-4 py-3 text-xs text-muted-foreground border-r border-border font-sans">
                              <span
                                className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest font-sans ${
                                  row.type === 'Nezbytné'
                                    ? 'bg-accent text-accent-foreground'
                                    : 'bg-muted text-muted-foreground border border-border'
                                }`}
                              >
                                {row.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-xs text-muted-foreground border-r border-border font-sans">
                              {row.duration}
                            </td>
                            <td className="px-4 py-3 text-xs text-muted-foreground font-sans">{row.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
