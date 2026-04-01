import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { tours } from '@/lib/tours'

const featuredTours = tours.slice(0, 6)

export default function ToursPreviewSection() {
  return (
    <section className="bg-foreground py-20 md:py-28 border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Hlavička sekce */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-10 h-0.5 bg-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] font-sans">
                Naše zájezdy
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black font-serif text-primary-foreground leading-[0.94] text-balance">
              Objevte<br />
              <span className="text-gold">sportovní</span> Česko
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-primary-foreground/40 text-xs uppercase tracking-[0.3em] font-sans">
              {tours.length} dostupných zájezdů
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors font-sans self-start"
            >
              Zobrazit všechny zájezdy
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Nová asymetrická mřížka - bento styl */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Velká karta vlevo - span 8 */}
          {featuredTours[0] && (
            <Link
              href={`/catalog/${featuredTours[0].slug}`}
              className="md:col-span-8 group relative overflow-hidden bg-primary min-h-[500px] flex flex-col justify-end"
            >
              <Image
                src={featuredTours[0].image}
                alt={featuredTours[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
              
              {/* Horní levý badge */}
              <div className="absolute top-6 left-6 z-10 flex gap-2">
                <span className="bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 font-sans">
                  {featuredTours[0].category}
                </span>
                {featuredTours[0].badge && (
                  <span className="bg-primary-foreground/90 text-foreground text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 font-sans">
                    {featuredTours[0].badge}
                  </span>
                )}
              </div>

              {/* Obsah dole */}
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-black font-serif text-primary-foreground leading-tight mb-4 text-balance">
                  {featuredTours[0].title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed line-clamp-2 max-w-lg mb-6 font-sans">
                  {featuredTours[0].description}
                </p>
                <div className="flex items-center gap-5 text-[10px] text-primary-foreground/40 uppercase tracking-widest font-sans">
                  <span className="flex items-center gap-2">
                    <Clock size={11} className="text-accent" />
                    {featuredTours[0].duration}
                  </span>
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  <span className="flex items-center gap-2">
                    <MapPin size={11} className="text-accent" />
                    {featuredTours[0].location}
                  </span>
                </div>
              </div>

              {/* Levá akcent páska */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            </Link>
          )}

          {/* Pravý sloupec - 2 karty vertikálně */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {featuredTours.slice(1, 3).map((tour, i) => (
              <Link
                key={tour.slug}
                href={`/catalog/${tour.slug}`}
                className="group relative overflow-hidden bg-secondary min-h-[240px] flex flex-col justify-end"
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-accent text-accent-foreground text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 font-sans">
                    {tour.category}
                  </span>
                </div>

                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-black font-serif text-primary-foreground leading-tight mb-2 line-clamp-2 text-balance">
                    {tour.title}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] text-primary-foreground/40 uppercase tracking-widest font-sans">
                    <span>{tour.duration}</span>
                    <ArrowRight size={13} className="text-primary-foreground/30 group-hover:text-accent transition-colors" />
                  </div>
                </div>

                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />
              </Link>
            ))}
          </div>

          {/* Spodní řada - 3 karty horizontálně */}
          {featuredTours.slice(3, 6).map((tour, i) => (
            <Link
              key={tour.slug}
              href={`/catalog/${tour.slug}`}
              className="md:col-span-4 group flex flex-col bg-surface hover:bg-surface-muted transition-colors min-h-[280px]"
            >
              <div className="relative h-40 overflow-hidden shrink-0">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/20" />
                {tour.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-accent text-accent-foreground text-[9px] font-black uppercase tracking-[0.15em] px-2 py-1 font-sans">
                      {tour.badge}
                    </span>
                  </div>
                )}
                {/* Horní akcent čára */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-accent text-[9px] font-black uppercase tracking-[0.25em] block mb-3 font-sans">
                  {tour.category}
                </span>
                <h3 className="text-base font-black font-sans text-primary-foreground uppercase leading-snug mb-3 line-clamp-2">
                  {tour.title}
                </h3>
                <div className="mt-auto pt-3 border-t border-primary-foreground/10 flex items-center justify-between text-[10px] text-primary-foreground/40 uppercase tracking-wider font-sans">
                  <span>{tour.location}</span>
                  <ArrowRight size={12} className="text-primary-foreground/25 group-hover:text-accent transition-colors" />
                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* Dolní CTA lišta */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-10 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 text-xs uppercase tracking-[0.25em] font-sans">
            Všechny zájezdy dostupné pro individuální i skupinové rezervace
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground text-[11px] font-black uppercase tracking-[0.2em] px-7 py-3.5 hover:border-accent hover:text-accent transition-colors font-sans"
          >
            Celý katalog
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  )
}
