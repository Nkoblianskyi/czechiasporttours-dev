import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů - CzechiaSportTours',
  description:
    'Zásady ochrany osobních údajů společnosti CzechiaSportTours. Jak zpracováváme vaše osobní údaje na czechiasporttours.com.',
}

const rights = [
  'Právo na přístup - vyžádání informací o uložených údajích',
  'Právo na opravu - žádost o opravu nepřesných údajů',
  'Právo na výmaz - požadavek na smazání osobních údajů',
  'Právo na omezení zpracování',
  'Právo na přenositelnost údajů',
  'Právo vznést námitku proti zpracování údajů',
]

const purposes = [
  'Zpracování a odpovídání na kontaktní formuláře',
  'Správa a potvrzování rezervací záj ezdů',
  'Zasílání newsletterů a propagačního obsahu s vaším souhlasem',
  'Zajištění technického provozu webových stránek',
]

const collectedData = [
  'Celé jméno',
  'E-mailová adresa',
  'Telefonní číslo (volitelné)',
  'Obsah zprávy a zájezd, o který máte zájem',
]

const sections = [
  {
    index: '01',
    title: 'Správce údajů',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        <strong className="text-foreground font-black">FISCUS NOSTRUM FUND SERVICES LIMITED</strong><br />
        Zástupce: Myrianthous Anna<br />
        Adresa: Panagioti Kaspi 5A., Nikósie 1095, Kypr<br />
        E-mail:{' '}
        <a href="mailto:info@czechiasporttours.com" className="text-accent hover:underline">
          info@czechiasporttours.com
        </a>
      </p>
    ),
  },
  {
    index: '02',
    title: 'Účel zpracování údajů',
    body: (
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          CzechiaSportTours (czechiasporttours.com) zpracovává osobní údaje výhradně za účelem:
        </p>
        <ul className="flex flex-col gap-1.5 mt-1">
          {purposes.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-accent font-black shrink-0 mt-0.5">-</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    index: '03',
    title: 'Osobní údaje, které sbíráme',
    body: (
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Při odesílání našeho kontaktního formuláře můžeme sbírat:
        </p>
        <ul className="flex flex-col gap-1.5 mt-1">
          {collectedData.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-accent font-black shrink-0 mt-0.5">-</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    index: '04',
    title: 'Právní základ',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Právním základem pro zpracování osobních údajů je váš dobrovolný souhlas (čl. 6 odst. 1 písm. a) GDPR) a v případě rezervací plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR).
      </p>
    ),
  },
  {
    index: '05',
    title: 'Doba uchování údajů',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Osobní údaje z kontaktních žádostí uchováváme maximálně po dobu 2 let, pokud delší lhůtu nevyžaduje zákon. Údaje z odběru newsletteru uchováváme do doby odhlášení odběru.
      </p>
    ),
  },
  {
    index: '06',
    title: 'Vaše práva',
    body: (
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Podle platných právních předpisů o ochraně údajů máte následující práva:
        </p>
        <ul className="flex flex-col gap-1.5 mt-1">
          {rights.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-accent font-black shrink-0 mt-0.5">-</span>
              {r}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
          Pro uplatnění vašich práv nás kontaktujte na{' '}
          <a href="mailto:info@czechiasporttours.com" className="text-accent hover:underline">
            info@czechiasporttours.com
          </a>
        </p>
      </div>
    ),
  },
  {
    index: '07',
    title: 'Sdílení údajů',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Vaše osobní údaje neprodáváme ani nesdílíme s třetími stranami, s výjimkou případů vyžadovaných zákonem nebo s vaším předchozím souhlasem. Poskytovatelé technických služeb (např. doručování e-mailů) mohou zpracovávat údaje na základě přísných smluv o ochraně údajů.
      </p>
    ),
  },
  {
    index: '08',
    title: 'Zabezpečení údajů',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Provádíme všechna potřebná technická a organizační opatření k ochraně vašich osobních údajů, včetně šifrování, řízení přístupu a pravidelných bezpečnostních kontrol.
      </p>
    ),
  },
  {
    index: '09',
    title: 'Cookies',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Naše webové stránky používají soubory cookie. Podrobné informace naleznete na naší stránce{' '}
        <a href="/cookie-privacy" className="text-accent hover:underline font-bold">
          Cookie Privacy
        </a>.
      </p>
    ),
  },
  {
    index: '10',
    title: 'Stížnosti',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Pokud se domníváte, že vaše údaje byly zpracovány v rozporu s platnými právními předpisy, můžete podat stížnost příslušnému dozorčímu úřadu. V České republice je to Úřad pro ochranu osobních údajů (uoou.cz).
      </p>
    ),
  },
  {
    index: '11',
    title: 'Aktualizace zásad',
    body: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Vyhrazujeme si právo tyto zásady ochrany osobních údajů aktualizovat. Podstatné změny budou oznámeny na webových stránkách. Aktuální verze je vždy dostupná na této stránce.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
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
                  Ochrana<br />osobních údajů
                </h1>
              </div>
            </div>
            <p className="text-primary-foreground/40 text-xs uppercase tracking-[0.3em] pl-5 border-l border-primary-foreground/10">
              Aktualizováno: 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            {/* Intro block */}
            <div className="border-l-4 border-accent pl-6 mb-14">
              <p className="text-muted-foreground text-base leading-relaxed">
                CzechiaSportTours se zavazuje chránit vaše osobní údaje. Tyto zásady vysvětlují, jaké údaje sbíráme, proč a jak s nimi nakládáme v souladu s GDPR a platnými právními předpisy o ochraně osobních údajů.
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col divide-y divide-border">
              {sections.map((s) => (
                <div key={s.index} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <span className="text-4xl font-black text-border tabular-nums leading-none">{s.index}</span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-3">{s.title}</h2>
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
