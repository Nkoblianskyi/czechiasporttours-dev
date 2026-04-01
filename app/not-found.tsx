import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-28 min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            404
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Az oldal nem található
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto mb-8">
            A keresett oldal nem létezik, vagy áthelyezésre került. Kérjük, térjen vissza a
            főoldalra.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-8 py-3 rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Főoldalra vissza
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
