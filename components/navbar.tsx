'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ArrowUpRight, X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Úvod' },
  { href: '/catalog', label: 'Zájezdy' },
  { href: '/about', label: 'O nás' },
  { href: '/contact', label: 'Kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-primary shadow-lg shadow-primary/30'
            : 'bg-transparent',
        )}
      >
        {/* ── Top info strip — hides on scroll ─────────── */}
        <div
          className={cn(
            'transition-all duration-500 overflow-hidden bg-accent/10 border-b border-accent/20',
            scrolled ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100',
          )}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-14 flex items-center justify-between h-7">
            <p className="text-primary-foreground/50 text-[9px] tracking-[0.5em] uppercase font-sans">
              Česká republika &mdash; Sportovní turismus
            </p>
          </div>
        </div>

        {/* ── Main nav row ────────────────────────── */}
        <nav
          className={cn(
            'max-w-screen-xl mx-auto px-6 lg:px-14 transition-all duration-300',
            scrolled ? 'py-0' : 'py-0',
          )}
          aria-label="Hlavní navigace"
        >
          <div className="flex items-center h-[68px] md:h-[76px]">

            {/* Logo */}
            <Link
              href="/"
              aria-label="CzechiaSportTours – domovská stránka"
              className="flex items-center gap-3 group mr-auto"
            >
              {/* Czech flag accent mark */}
              <div className="flex flex-col gap-[4px]" aria-hidden="true">
                <span className="block w-6 h-[2px] bg-primary-foreground/80 group-hover:w-7 transition-all duration-300" />
                <span className="block w-4 h-[2px] bg-accent group-hover:w-6 transition-all duration-300" />
                <span className="block w-5 h-[2px] bg-primary-foreground/80 group-hover:w-7 transition-all duration-300" />
              </div>
              <div>
                <span className="font-serif text-primary-foreground text-xl font-semibold leading-none block">
                  Czechia<span className="text-accent">Sport</span>Tours
                </span>
                <span className="text-primary-foreground/30 text-[8px] tracking-[0.5em] uppercase font-sans block mt-0.5">
                  czechiasporttours.com
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-1 mr-8" role="list">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'relative px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] transition-colors duration-200 group',
                        active
                          ? 'text-accent'
                          : 'text-primary-foreground/50 hover:text-primary-foreground',
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          'absolute bottom-0 left-4 right-4 h-[1.5px] bg-accent transition-transform duration-300 origin-left',
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <span className="w-px h-5 bg-primary-foreground/10 hidden lg:block" aria-hidden="true" />
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-accent text-accent-foreground text-[10px] font-black font-sans px-5 py-3 uppercase tracking-[0.18em] hover:bg-accent/90 transition-colors duration-200"
              >
                Rezervovat
                <ArrowUpRight
                  size={11}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden ml-auto p-2 text-primary-foreground"
              aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Accent bottom border — only visible when scrolled */}
        <div
          className={cn(
            'h-[1px] bg-accent/30 transition-opacity duration-500',
            scrolled ? 'opacity-100' : 'opacity-0',
          )}
        />
      </header>

      {/* ── Mobile full-screen menu ────────────────────── */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-primary flex flex-col transition-all duration-400 md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2',
        )}
        aria-hidden={!menuOpen}
        aria-modal={menuOpen}
        role="dialog"
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-primary-foreground/10 shrink-0">
          <span className="font-serif text-primary-foreground text-lg font-semibold">
            Czechia<span className="text-accent">Sport</span>Tours
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-primary-foreground/50 hover:text-primary-foreground p-1"
            aria-label="Zavřít menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-0" aria-label="Mobilní navigace">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'flex items-center justify-between py-6 border-b border-primary-foreground/10 group',
                pathname === link.href ? 'text-accent' : 'text-primary-foreground/60',
              )}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[9px] tracking-[0.35em] text-primary-foreground/20 font-sans font-bold tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-serif text-[2.6rem] font-semibold leading-none group-hover:text-primary-foreground transition-colors duration-200">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="opacity-20 group-hover:opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
              />
            </Link>
          ))}
        </nav>

        {/* Bottom row */}
        <div className="px-8 pb-10 pt-6 border-t border-primary-foreground/10 flex items-center justify-between shrink-0">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 bg-accent text-accent-foreground text-[10px] font-black font-sans px-5 py-3 uppercase tracking-[0.2em]"
          >
            Rezervovat <ArrowUpRight size={11} />
          </Link>
        </div>
      </div>
    </>
  )
}
