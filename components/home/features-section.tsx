const stats = [
  { value: '13+', label: 'Zájezdů', desc: 'Unikátní sportovní výlety po Česku a EU' },
  { value: '7', label: 'Sportů', desc: 'Fotbal, hokej, atletika, motorsport a více' },
  { value: '15', label: 'Max. účastníků', desc: 'Zaručený osobní přístup ke každému hráči' },
  { value: '100%', label: 'Pravá místa', desc: 'Žádné repliky - jen opravdová sportoviště' },
]

const pillars = [
  {
    index: '01',
    title: 'Pouze originální sportoviště',
    body: 'Každý zájezd se odehrává na skutečných českých sportovních ikonách - fungujících stadionech, živých aréách a závodních okruzích s bohatou historií.',
  },
  {
    index: '02',
    title: 'Malé skupiny, velký zážitek',
    body: 'Maximálně 15 účastníků. Osobní pozornost a přístup do míst, kam se běžný návštěvník nikdy nedostane.',
  },
  {
    index: '03',
    title: 'Průvodci-specialisté',
    body: 'Historici sportu a znalci jednotlivých sportovišť - lidé, kteří znají každý koutek, každý příběh a každý rekord.',
  },
  {
    index: '04',
    title: 'Vše zajištěno za vás',
    body: 'Vstupenky, logistika, načasování - vše vyřešeno. Stačí přijet, o zbytek se postaráme my.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-background border-b border-border">

      {/* Stats bar — tmavé pozadí, zlaté čísla */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/10">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 lg:py-10">
              <div className="text-4xl lg:text-5xl font-black font-serif text-accent leading-none tabular-nums mb-1">
                {s.value}
              </div>
              <div className="text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] mb-1 font-sans">
                {s.label}
              </div>
              <div className="text-primary-foreground/40 text-xs leading-relaxed hidden lg:block font-sans">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pilíře — asymetrický layout s bordou mřížkou */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0">

          {/* Levý popisný sloupec */}
          <div className="lg:col-span-2 lg:pr-16 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-accent" />
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.35em] font-sans">
                  Proč CzechiaSportTours
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-serif text-foreground leading-tight text-balance mb-6">
                Specialisté<br />na sportovní<br />turismus
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-sans">
                Jeden cíl: propojovat sportovní nadšence s ikonickými místy české a evropské sportovní historie prostřednictvím odborně vedených, intimních zážitků.
              </p>
            </div>

            {/* Dekorativní česká vlajková čára */}
            <div className="hidden lg:flex flex-col gap-1 mt-10">
              <div className="h-px bg-accent" />
              <div className="h-px bg-foreground/10" />
              <div className="h-px bg-accent/30" />
            </div>
          </div>

          {/* Pravá mřížka pilířů */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {pillars.map((p) => (
              <div
                key={p.index}
                className="bg-background p-7 flex flex-col gap-4 group hover:bg-muted transition-colors"
              >
                <span className="text-5xl font-black font-serif text-border group-hover:text-accent/20 transition-colors leading-none tabular-nums">
                  {p.index}
                </span>
                <div>
                  <h3 className="text-sm font-black text-foreground uppercase tracking-wide mb-2 font-sans">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">{p.body}</p>
                </div>
                {/* Červená spodní čára při hoveru */}
                <div className="h-0.5 w-0 bg-accent group-hover:w-8 transition-all duration-300 mt-auto" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
