'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t-2 border-accent text-primary-foreground shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <span className="w-1 h-full min-h-[2rem] bg-accent shrink-0 self-stretch" />
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            Ez a weboldal sütiket (cookie-kat) használ a jobb felhasználói élmény érdekében. Az oldal használatával elfogadja a sütik alkalmazását.{' '}
            <Link href="/cookie-privacy" className="text-accent font-bold hover:underline">
              Cookie adatvédelem
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-xs font-bold text-primary-foreground/50 hover:text-primary-foreground transition-colors px-4 py-2.5 uppercase tracking-[0.15em]"
          >
            Elutasít
          </button>
          <button
            onClick={accept}
            className="bg-accent text-accent-foreground text-xs font-black px-6 py-2.5 uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
          >
            Elfogad mindent
          </button>
        </div>
      </div>
    </div>
  )
}
