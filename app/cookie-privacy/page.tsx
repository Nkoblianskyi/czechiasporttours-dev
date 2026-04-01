import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Cookie Privacy - CzechiaSportTours',
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
    purpose: 'Google Analytics - rozlišuje návštěvníky v rámci jedné relace.',
  },
]

const sections = [
  {
    index: '01',
    title: 'Co je soubor cookie?',
    content:
      'Soubor cookie je malý textový soubor, který váš prohlížeč ukládá při návštěvě webové stránky. Soubory cookie umožňují webu zapamatovat si vaše nastavení, zlepšit uživatelskou zkušenost a sbírat anonymní statistické údaje o návštěvnících.',
  },
  {
    index: '02',
    title: 'Jaké soubory cookie používáme?',
    content:
      'CzechiaSportTours (czechiasporttours.com) používá dva typy souborů cookie: Nezbytné soubory cookie - které jsou nezbytné pro správné fungování webové stránky a nesbírají osobně identifikovatelné údaje - a Analytické soubory cookie, které sbírají anonymní, agregované statistiky o používání stránky.',
  },
  {
    index: '04',
    title: 'Správa souborů cookie',
    content:
      'Při první návštěvě našich stránek vám banner umožní přijmout nebo odmítnout nezbytné soubory cookie. Své rozhodnutí můžete kdykoli změnit v nastavení prohlížeče: Chrome → Nastavení / Soukromí a zabezpečení / Soubory cookie; Firefox → Nastavení / Soukromí a zabezpečení / Soubory cookie; Safari → Předvolby / Soukromí / Správa dat webových stránek; Edge → Nastavení / Soubory cookie a oprávnění webu. Zablokování souborů cookie může ovlivnit některé funkce webové stránky.',
  },
  {
    index: '05',
    title: 'Soubory cookie třetích stran',
    content:
      'Naše stránky mohou používat Google Analytics pro analýzu statistik návštěvnosti. Více informací o zpracování údajů společností Google najdete na policies.google.com/privacy.',
  },
  {
    index: '06',
    title: 'Změny těchto zásad',
    content:
      'Vyhrazujeme si právo aktualizovat tyto zásady souborů cookie. Aktualizovaná verze bude zveřejněna na této stránce s aktualizovaným datem účinnosti. Doporučujeme pravidelně kontrolovat tuto stránku.',
  },
  {
    index: '07',
    title: 'Kontakt',
    content:
      'Máte-li jakékoli otázky týkající se používání souborů cookie, kontaktujte nás prosím: info@czechiasporttours.com',
  },
]

export default function CookiePrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-20 border-b border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-16 bg-accent shrink-0" />
              <div>
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] block mb-3">
                  Právní informace - czechiasporttours.com
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-primary-foreground uppercase leading-none">
                  Cookie<br />Privacy
                </h1>
              </div>
            </div>
            <p className="text-primary-foreground/40 text-xs uppercase tracking-[0.3em] pl-5 border-l border-primary-foreground/10">
              Aktualizováno: 1. ledna 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            {/* Intro block */}
            <div className="border-l-4 border-accent pl-6 mb-14">
              <p className="text-muted-foreground text-base leading-relaxed">
                Tyto zásady vysvětlují, co jsou soubory cookie, které CzechiaSportTours používá a jak můžete spravovat své preference.
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col divide-y divide-border">
              {sections.map((s) => (
                <div key={s.index} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3 flex items-start gap-3">
                    <span className="text-4xl font-black text-border tabular-nums leading-none">{s.index}</span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-3">{s.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.content}</p>
                  </div>
                </div>
              ))}

              {/* Cookie table section */}
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3 flex items-start gap-3">
                  <span className="text-4xl font-black text-border tabular-nums leading-none">03</span>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-5">
                    Podrobnosti o souborech cookie
                  </h2>
                  <div className="overflow-x-auto border border-border">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-muted border-b border-border">
                          {['Cookie', 'Typ', 'Doba trvání', 'Účel'].map((col) => (
                            <th
                              key={col}
                              className="text-left px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black border-r border-border last:border-r-0"
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
                            className={`border-b border-border last:border-b-0 ${
                              i % 2 === 0 ? 'bg-background' : 'bg-muted/40'
                            }`}
                          >
                            <td className="px-4 py-3 font-mono text-xs text-foreground border-r border-border">
                              {row.name}
                            </td>
                            <td className="px-4 py-3 text-xs text-muted-foreground border-r border-border">
                              <span
                                className={`inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-widest ${
                                  row.type === 'Nezbytné'
                                    ? 'bg-accent text-accent-foreground'
                                    : 'bg-muted text-muted-foreground'
                                }`}
                              >
                                {row.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-xs text-muted-foreground border-r border-border">
                              {row.duration}
                            </td>
                            <td className="px-4 py-3 text-xs text-muted-foreground">{row.purpose}</td>
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
