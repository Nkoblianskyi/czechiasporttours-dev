'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, ArrowRight, ChevronRight } from 'lucide-react'
import { tours, tourCategories } from '@/lib/tours'
import { cn } from '@/lib/utils'

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState('Vše')

  const filtered =
    activeCategory === 'Vše'
      ? tours
      : tours.filter((t) => t.category === activeCategory)

  return (
    <div className="bg-background">
      {/* ── Sticky sidebar filter + main grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 py-14">

          {/* LEFT — Filter sidebar */}
          <aside className="lg:w-52 shrink-0">
            <div className="lg:sticky lg:top-28">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground font-sans mb-5">
                Kategorie
              </p>
              <nav className="flex lg:flex-col gap-1.5 flex-wrap">
                {tourCategories.map((cat) => {
                  const count =
                    cat === 'Vše'
                      ? tours.length
                      : tours.filter((t) => t.category === cat).length
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        'group flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-all duration-200 font-sans text-sm',
                        activeCategory === cat
                          ? 'bg-surface text-primary-foreground border-l-2 border-accent pl-3.5'
                          : 'text-muted-foreground hover:text-foreground border-l-2 border-transparent pl-3.5',
                      )}
                    >
                      <span className="font-medium">{cat}</span>
                      <span
                        className={cn(
                          'text-[10px] font-bold tabular-nums font-sans',
                          activeCategory === cat ? 'text-accent' : 'text-muted-foreground/50',
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </nav>

              {/* Divider + reset */}
              {activeCategory !== 'Vše' && (
                <button
                  onClick={() => setActiveCategory('Vše')}
                  className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans hover:underline"
                >
                  <span>Zrušit filtr</span>
                </button>
              )}

              {/* Stat block */}
              <div className="mt-10 hidden lg:block border border-border p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground font-sans mb-3">
                  Počet zájezdů
                </p>
                <p className="font-serif text-5xl font-bold text-foreground leading-none">
                  {filtered.length}
                </p>
                <p className="text-xs text-muted-foreground font-sans mt-1">
                  {activeCategory === 'Vše' ? 'celkem dostupných' : `v kategorii ${activeCategory}`}
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT — Cards */}
          <main className="flex-1 min-w-0">
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <span className="text-5xl font-serif font-bold text-border">0</span>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-widest">
                  V této kategorii momentálně nejsou dostupné žádné zájezdy.
                </p>
              </div>
            )}

            {/* Masonry-style alternating layout */}
            {filtered.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                {filtered.map((tour, i) => {
                  const isFeatured = i === 0
                  return (
                    <Link
                      key={tour.slug}
                      href={`/catalog/${tour.slug}`}
                      className={cn(
                        'group relative bg-background overflow-hidden flex flex-col',
                        isFeatured && 'md:col-span-2',
                      )}
                    >
                      {/* Image */}
                      <div
                        className={cn(
                          'relative overflow-hidden shrink-0',
                          isFeatured ? 'h-72 md:h-96' : 'h-52',
                        )}
                      >
                        <Image
                          src={tour.image}
                          alt={tour.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors duration-300" />

                        {/* Top badges row */}
                        <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                          <span className="bg-accent text-accent-foreground text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 font-sans">
                            {tour.category}
                          </span>
                          {tour.badge && (
                            <span className="bg-background/90 text-foreground text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 font-sans">
                              {tour.badge}
                            </span>
                          )}
                        </div>

                        {/* Index number bottom-right */}
                        <span className="absolute bottom-5 right-5 font-serif text-5xl font-bold text-white/10 leading-none tabular-nums select-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* Bottom accent bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>

                      {/* Card body */}
                      <div className={cn('flex flex-col flex-1 p-6', isFeatured && 'md:flex-row md:items-end md:gap-10')}>
                        <div className="flex-1">
                          <h2
                            className={cn(
                              'font-serif font-bold text-foreground leading-tight mb-3',
                              isFeatured ? 'text-2xl md:text-3xl' : 'text-xl',
                            )}
                          >
                            {tour.title}
                          </h2>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 font-sans mb-4">
                            {tour.description}
                          </p>
                          <div className="flex items-center gap-5 text-[11px] uppercase tracking-wider font-sans text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Clock size={11} className="text-accent shrink-0" />
                              {tour.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={11} className="text-accent shrink-0" />
                              {tour.location}
                            </span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-5 md:mt-0 shrink-0">
                          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] font-sans text-accent group-hover:gap-3 transition-all duration-200">
                            Zobrazit zájezd
                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}

            {/* Bottom CTA strip */}
            {filtered.length > 0 && (
              <div className="mt-px bg-surface border-t border-primary-foreground/10 px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-primary-foreground/40 text-[10px] font-bold uppercase tracking-[0.35em] font-sans mb-1">
                    Nenašli jste vhodný zájezd?
                  </p>
                  <p className="text-primary-foreground text-sm font-sans font-medium">
                    Sestavíme pro vás zájezd na míru.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-[0.3em] font-sans px-6 py-3 hover:bg-accent/90 transition-colors"
                >
                  Kontaktujte nás
                  <ChevronRight size={12} />
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
