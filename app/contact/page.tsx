import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Kontakt - CzechiaSportTours',
  description:
    'Kontaktujte tým CzechiaSportTours. Rezervace zájezdů, skupinové návštěvy, individuální programy. Odpovíme do 24 hodin.',
}

export default function ContactPage() {
  return <ContactClient />
}
