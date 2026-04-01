import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import CatalogClient from '@/components/catalog/catalog-client'

export const metadata: Metadata = {
  title: 'Katalog zájezdů - CzechiaSportTours',
  description:
    'Prohlédněte si všechny sportovní zájezdy po České republice a EU. Fotbal, hokej, motorsport, cyklistika, atletika, tenis a více.',
}

export default function CatalogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-surface pt-32 pb-0 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8 pb-10">
              <div>
                <span className="inline-flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.45em] font-sans">
                    Sportovní zájezdy ČR + EU
                  </span>
                </span>
                <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary-foreground leading-[0.9] tracking-tight">
                  Katalog
                  <br />
                  <em className="text-accent not-italic">zájezdů</em>
                </h1>
              </div>
              <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-xs font-sans lg:pb-3">
                Vyberte sport nebo destinaci. Každý zájezd probíhá s certifikovaným průvodcem přímo na sportovišti.
              </p>
            </div>
          </div>
        </section>

        <CatalogClient />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
