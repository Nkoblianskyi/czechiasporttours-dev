'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Mail, Clock, Phone, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { tours } from '@/lib/tours'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  tour: string
  groupSize: string
  date: string
  message: string
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  tour: '',
  groupSize: '',
  date: '',
  message: '',
}

const GROUP_OPTIONS = [
  '1 osoba',
  '2–4 osoby',
  '5–8 osob',
  '9–15 osob',
  '16–30 osob',
  '30+ osob (firemní skupina)',
]

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
    setForm(INITIAL)
  }

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">

        {/* ── Horní páska (česká vlajka) ── */}
        <div className="flex h-1.5 w-full">
          <div className="flex-1 bg-primary" />
          <div className="flex-1 bg-background border-y border-border" />
          <div className="flex-1 bg-accent" />
        </div>

        {/* ── Hero ── */}
        <section className="bg-primary pt-28 md:pt-36 pb-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">

              {/* Levý sloupec – nadpis */}
              <div className="pb-12 lg:pb-16 border-b border-primary-foreground/10 lg:border-b-0 lg:border-r lg:pr-14">
                <span className="inline-block text-accent text-[10px] font-black tracking-[0.45em] uppercase font-sans mb-7">
                  Kontakt
                </span>
                <h1 className="font-serif text-primary-foreground text-[clamp(3rem,8vw,7rem)] leading-[0.88] font-bold text-balance mb-8">
                  Máte dotaz<br />
                  nebo zájem<br />
                  <em className="not-italic text-accent">o zájezd?</em>
                </h1>
                <p className="text-primary-foreground/50 font-sans text-sm leading-relaxed max-w-xs">
                  Kontaktujte náš tým. Odpovíme do 1–2 pracovních dnů a připravíme Vám nabídku na míru.
                </p>
              </div>

              {/* Pravý sloupec – rychlé kontaktní údaje */}
              <div className="pb-12 lg:pb-16 lg:pl-14 flex flex-col justify-end gap-8">
                {[
                  {
                    icon: Mail,
                    label: 'E-mail',
                    value: 'info@czechiasporttours.com',
                    href: 'mailto:info@czechiasporttours.com',
                  },
                  {
                    icon: Clock,
                    label: 'Odpověď',
                    value: 'Do 1–2 pracovních dnů',
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-10 h-10 bg-accent/15 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/40 text-[10px] font-black uppercase tracking-[0.3em] font-sans mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-primary-foreground text-sm font-sans hover:text-accent transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-primary-foreground text-sm font-sans">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spodní páska hero */}
          <div className="flex">
            <div className="flex-1 h-2 bg-accent" />
            <div className="flex-1 h-2 bg-primary-foreground/10" />
          </div>
        </section>

        {/* ── Formulář ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-14">

            {/* Nadpis sekce */}
            <div className="flex items-center gap-6 mb-14 pb-7 border-b border-border">
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] font-sans">
                Rezervační formulář
              </span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-[10px] font-sans uppercase tracking-[0.3em]">
                czechiasporttours.com
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-16">

              {/* KROK 01 — Osobní údaje */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-3 flex flex-col gap-1">
                  <span className="font-serif text-5xl text-border font-bold leading-none">01</span>
                  <p className="text-foreground text-sm font-black uppercase tracking-[0.2em] font-sans mt-2">
                    Osobní údaje
                  </p>
                  <p className="text-muted-foreground text-xs font-sans leading-relaxed mt-1">
                    Vaše jméno a kontaktní informace.
                  </p>
                </div>
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  <FieldInput
                    id="firstName"
                    label="Jméno"
                    name="firstName"
                    placeholder="Jan"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <FieldInput
                    id="lastName"
                    label="Příjmení"
                    name="lastName"
                    placeholder="Novák"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                  />
                  <FieldInput
                    id="email"
                    label="E-mailová adresa"
                    name="email"
                    type="email"
                    placeholder="jan@email.cz"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                  <FieldInput
                    id="phone"
                    label="Telefon (nepovinné)"
                    name="phone"
                    placeholder="+420 600 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* KROK 02 — Detaily zájezdu */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-3 flex flex-col gap-1">
                  <span className="font-serif text-5xl text-border font-bold leading-none">02</span>
                  <p className="text-foreground text-sm font-black uppercase tracking-[0.2em] font-sans mt-2">
                    Detaily zájezdu
                  </p>
                  <p className="text-muted-foreground text-xs font-sans leading-relaxed mt-1">
                    Vyberte zájezd, termín a velikost skupiny.
                  </p>
                </div>
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  {/* Výběr zájezdu */}
                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label
                      htmlFor="tour"
                      className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground font-sans"
                    >
                      Zájezd
                    </label>
                    <div className="relative">
                      <select
                        id="tour"
                        name="tour"
                        value={form.tour}
                        onChange={handleChange}
                        className="w-full appearance-none bg-transparent border-0 border-b-2 border-border pb-3 pt-1 pr-8 text-sm text-foreground focus:outline-none focus:border-accent transition-colors font-sans"
                      >
                        <option value="">Vyberte zájezd...</option>
                        {tours.map((t) => (
                          <option key={t.slug} value={t.slug}>
                            {t.title}
                          </option>
                        ))}
                        <option value="other">Jiné / Obecný dotaz</option>
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Počet osob */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="groupSize"
                      className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground font-sans"
                    >
                      Počet osob
                    </label>
                    <div className="relative">
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={form.groupSize}
                        onChange={handleChange}
                        className="w-full appearance-none bg-transparent border-0 border-b-2 border-border pb-3 pt-1 pr-8 text-sm text-foreground focus:outline-none focus:border-accent transition-colors font-sans"
                      >
                        <option value="">Vyberte počet...</option>
                        {GROUP_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Preferovaný termín */}
                  <FieldInput
                    id="date"
                    label="Preferovaný termín"
                    name="date"
                    placeholder="např. červen 2026"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* KROK 03 — Zpráva */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-3 flex flex-col gap-1">
                  <span className="font-serif text-5xl text-border font-bold leading-none">03</span>
                  <p className="text-foreground text-sm font-black uppercase tracking-[0.2em] font-sans mt-2">
                    Vaše zpráva
                  </p>
                  <p className="text-muted-foreground text-xs font-sans leading-relaxed mt-1">
                    Jakékoli dotazy nebo požadavky na míru.
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground font-sans"
                    >
                      Zpráva <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Napište nám o Vašich požadavcích, preferovaném termínu nebo o čemkoli dalším..."
                      className="bg-transparent border-0 border-b-2 border-border pb-3 pt-1 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none font-sans w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Odeslat */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-3">
                  <p className="text-muted-foreground text-xs leading-relaxed font-sans">
                    Odesláním souhlasíte se{' '}
                    <Link href="/privacy-policy" className="text-accent hover:underline">
                      zpracováním osobních údajů
                    </Link>.
                  </p>
                </div>
                <div className="lg:col-span-9 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-3 bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-[0.3em] px-10 py-5 hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50 font-sans"
                  >
                    {loading ? (
                      'Odesílání...'
                    ) : (
                      <>
                        Odeslat poptávku
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                  <p className="text-muted-foreground text-xs font-sans">
                    Odpovíme do 1–2 pracovních dnů
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* ── Spodní info pruh ── */}
        <section className="bg-primary py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/10">
              {[
                { label: 'Praha, ČR', sub: 'Centrála a operační základna' },
                { label: 'EU destinace', sub: 'Zájezdy do celé Evropy' },
                { label: '15+ let zkušeností', sub: 'Sportovní turismus' },
              ].map(({ label, sub }) => (
                <div key={label} className="px-0 sm:px-10 first:pl-0 last:pr-0 py-6 sm:py-0">
                  <p className="text-primary-foreground font-serif text-xl font-bold mb-1">{label}</p>
                  <p className="text-primary-foreground/45 text-xs font-sans">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />

      {/* ── Success dialog ── */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-background border-t-4 border-accent p-10 md:p-16 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 bg-accent flex items-center justify-center mx-auto mb-7">
              <CheckCircle size={24} className="text-accent-foreground" />
            </div>
            <h2
              id="success-title"
              className="font-serif text-4xl font-bold text-foreground mb-3 text-balance"
            >
              Zpráva odeslána
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-9 font-sans">
              Děkujeme za Váš zájem o CzechiaSportTours. Náš tým Vám odpoví do 1–2 pracovních dnů.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-[0.25em] px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors font-sans"
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </>
  )
}

/* ── Pomocná komponenta pro textové vstupy ── */
function FieldInput({
  id,
  label,
  name,
  placeholder,
  type = 'text',
  required,
  value,
  onChange,
}: {
  id: string
  label: string
  name: string
  placeholder?: string
  type?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground font-sans"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent border-0 border-b-2 border-border pb-3 pt-1 text-sm text-foreground placeholder:text-muted-foreground/35 focus:outline-none focus:border-accent transition-colors font-sans w-full"
      />
    </div>
  )
}
