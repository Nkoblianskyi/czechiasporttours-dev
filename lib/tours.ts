export interface Tour {
  slug: string
  title: string
  category: string
  location: string
  duration: string
  description: string
  longDescription: string
  image: string
  highlights: string[]
  includes: string[]
  badge?: string
}

export const tours: Tour[] = [
  {
    slug: 'eden-arena-slavia',
    title: 'Eden Aréna - Prohlídka SK Slavia Praha',
    category: 'Fotbal',
    location: 'Praha, Vršovice',
    duration: '1,5–2 hodiny',
    description:
      'Domov SK Slavia Praha - jednoho z nejúspěšnějších českých fotbalových klubů. Projděte šatny, hráčský tunel a síň slávy s historií sahající do roku 1892.',
    longDescription:
      'Eden Aréna je moderní fotbalový stadion s kapacitou 20 800 míst, domovská pevnost SK Slavia Praha. Klub byl založen v roce 1892 a patří mezi nejstarší a nejúspěšnější v české fotbalové historii. Naše prohlídka vede malé skupiny přes šatny hráčů, tiskovou konferenci, VIP boxy a chodbu vedoucí přímo na trávník, kde průvodce přibližuje slavné zápasy UEFA Champions League i legendy slávistického fotbalu.',
    image: '/images/tour-football-cz.jpg',
    highlights: [
      'Šatny hráčů a tunel prohlídka',
      'VIP patra a manažerské boxy',
      'Tisková konference a mixzóna',
      'Foto příležitost u hráčského výtupu na trávník',
      'Výstava z historie SK Slavia Praha',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstupenka na stadion',
      'Malá skupina (max. 15 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Populární',
  },
  {
    slug: 'o2-arena-hokej',
    title: 'O2 Aréna Praha - Prohlídka ledního hokeje',
    category: 'Lední hokej',
    location: 'Praha, Vysočany',
    duration: '2-2,5 hodiny',
    description:
      'Největší víceúčelová aréna v České republice s kapacitou 20 000 míst. Projděte zákulisí domovského stánku HC Sparta Praha a místa světového šampionátu.',
    longDescription:
      'O2 Aréna v Praze je ikonická moderní hala otevřená v roce 2004, která hostila mistrovství světa v hokeji, zápasy NHL Global Series a desítky mezinárodních utkání. Naše prohlídka odkrývá zákulisí - šatny, ledovou plochu, střídačky, VIP sektory a technické zázemí jednoho z nejmodernějších sportovišť střední Evropy. Průvodce vypráví příběhy českého hokeje od zlatých olympijských her v Naganu 1998 po dnešní dobu.',
    image: '/images/tour-hockey-cz.jpg',
    highlights: [
      'Ledová plocha a střídačky',
      'Šatny hokejistů a sušírna výstroje',
      'VIP etáže a skybox',
      'Prezentace o mistrovství světa v hokeji',
      'Galerie českých hokejových hvězd',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstupenka do arény',
      'Malá skupina (max. 15 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Výběr redakce',
  },
  {
    slug: 'sparta-letna-fotbal',
    title: 'Letná - Stadion AC Sparta Praha',
    category: 'Fotbal',
    location: 'Praha, Letná',
    duration: '1,5 hodiny',
    description:
      'Nejúspěšnější český fotbalový klub s 39 tituly. Legendární stadion na Letné s výhledem na Prahu - průvodcovská prohlídka šaten, hráčského tunelu a muzea.',
    longDescription:
      'AC Sparta Praha je nejúspěšnější fotbalový klub České republiky s rekordními 39 tituly ligy a bohatou historií v evropských pohárech. Stadion na Letné s kapacitou 18 887 diváků nabízí nejen skvělý fotbal, ale také panoramatický výhled na Prahu. Prohlídka zahrnuje hráčské šatny, tiskovou konferenci, sportovní tréninkové centrum a muzeum plné trofejí a dresů legendárních sparťanů.',
    image: '/images/tour-football-cz.jpg',
    highlights: [
      'Hráčské šatny a tréninkový tunel',
      'Muzeum trofejí a historických artefaktů',
      'Tisková konference a mixzóna',
      'Výhledová terasa s panoramatem Prahy',
      'Příběhy slavných sparťanských fotbalistů',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstupenka na stadion',
      'Malá skupina (max. 15 osob)',
      'Komentář v češtině a angličtině',
    ],
  },
  {
    slug: 'brno-velka-cena',
    title: 'Automotodrom Brno - Prohlídka okruhu',
    category: 'Motorsport',
    location: 'Brno, Jihomoravský kraj',
    duration: '2,5–3 hodiny',
    description:
      'Legendární závodní okruh MotoGP a Formule 1. Projděte boxovou uličku, pit lane, padok a přiblížte se místům, kde vznikaly dějiny motorsportu.',
    longDescription:
      'Automotodrom Brno je jedním z nejslavnějších závodních okruhů Evropy. Poprvé se zde závody konaly v roce 1930 a moderní okruh byl otevřen v roce 1987. Hostil Grand Prix Formule 1 i MotoGP a patří ke klenotům světového motorsportu. Naše prohlídka provede skupinu boxovou uličkou, padokem, závodinami i závodním kontrolním věžím. Odborný průvodce přibližuje techniku, historii závodů a příběhy šampionů, kteří se zapsali do legend tohoto místa.',
    image: '/images/tour-cycling-cz.jpg',
    highlights: [
      'Prohlídka boxové uličky a pit lane',
      'Padok a závodní garáže',
      'Start-cílová rovinka',
      'Závodní kontrolní věž',
      'Prezentace z dějin brněnského motorsportu',
    ],
    includes: [
      'Odborný průvodce',
      'Vstupní propustka na okruh',
      'Malá skupina (max. 12 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Populární',
  },
  {
    slug: 'atleticky-stadion-strahov',
    title: 'Strahovský Atletický Stadion - Olympijská prohlídka',
    category: 'Atletika',
    location: 'Praha, Strahov',
    duration: '1,5–2 hodiny',
    description:
      'Jeden z největších atletických stadionů světa a dějiště slavných Spartakiád. Prozkoumejte jedinečný historický celek s pohledem na Prahu.',
    longDescription:
      'Strahovský stadion byl postaven v letech 1926–1932 a ve své době byl největším stadionem na světě. Hostil mezinárodní atletická utkání, masová sportovní vystoupení Spartakiáda a desítky historicky významných akcí. Naše prohlídka odhaluje architektonické detaily, atletickou dráhu, pole event plochu a fascinující historii tohoto unikátního místa s panoramatickým výhledem na Prahu a Hradčany.',
    image: '/images/tour-athletics-cz.jpg',
    highlights: [
      'Atletická dráha a doskočiště',
      'Historická tribuna s výhledem na Prahu',
      'Prezentace ze Spartakiád',
      'Výstava z dějin české atletiky',
      'Foto pohlednice z nejvyššího bodu',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstupní poplatek',
      'Malá skupina (max. 15 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Unikátní',
  },
  {
    slug: 'czech-tennis-korda',
    title: 'Tenisový Klub - Česká tenisová tradice',
    category: 'Tenis',
    location: 'Praha',
    duration: '2 hodiny',
    description:
      'Česká republika vychovala světové šampiony - od Lendla po Kvitovou. Navštivte historický tenisový klub a tréninkové centrum s průvodcem a interaktivní expozicí.',
    longDescription:
      'Česká republika má jednu z nejsilnějších tenisových tradicí v Evropě. Vynikající hráči jako Ivan Lendl, Martina Navrátilová, Tomáš Berdych nebo Petra Kvitová zapsali Česko zlatými písmeny do dějin světového tenisu. Naše prohlídka nabídne pohled do zákulisí historického pražského tenisového klubu - antukové kurty, tréninkové centrum, taktický kabinet a galerie šampionů s autentickými trofejemi a dobovými fotografiemi.',
    image: '/images/tour-tennis-cz.jpg',
    highlights: [
      'Prohlídka antukových kurtů',
      'Tréninkové centrum a analytická místnost',
      'Galerie českých tenisových šampionů',
      'Setkání s lokálním trenérem',
      'Interaktivní tenisová statistika a historia',
    ],
    includes: [
      'Odborný průvodce',
      'Vstup do areálu',
      'Malá skupina (max. 12 osob)',
      'Komentář v češtině a angličtině',
    ],
  },
  {
    slug: 'cyklistika-krkonose',
    title: 'Cyklistika v Krkonoších - Klasické etapy',
    category: 'Cyklistika',
    location: 'Krkonoše, Východní Čechy',
    duration: '3–4 hodiny',
    description:
      'Projděte ikonické etapy závodů v srdci Krkonoš. Trasy, kde se psaly dějiny české cyklistiky - komentář experta a pohled do zákulisí profesionálního pelotonu.',
    longDescription:
      'Krkonošský okruh a zdejší cyklistické trasy jsou nedílnou součástí české závodní cyklistiky. Naše prohlídka prochází startem, cílem a klíčovými úseky závodů. Odborný průvodce vás provede příběhy českých cyklistů, zákulisím profesionálních závodů, technikou horské cyklistiky a moderní výbavou závodníků. Součástí výletu je zastávka ve starém horském městě s výhledem na Sněžku.',
    image: '/images/tour-cycling-cz.jpg',
    highlights: [
      'Slavnostní místo startu závodů',
      'Komentovaný průjezd klíčovými etapami',
      'Historie české závodní cyklistiky',
      'Zákulisí profesionálního pelotonu',
      'Výhled na Sněžku ze závodní trasy',
    ],
    includes: [
      'Certifikovaný cyklistický průvodce',
      'Mapa tras a závodní archiv',
      'Malá skupina (max. 12 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Nové',
  },
  {
    slug: 'hc-kometa-brno',
    title: 'HC Kometa Brno - Prohlídka Letiště',
    category: 'Lední hokej',
    location: 'Brno',
    duration: '1,5 hodiny',
    description:
      'Rekordní vítěz československé a české hokejové ligy. Nahlédněte za kulisy domovské arény HC Kometa - jednoho z nejúspěšnějších hokejových klubů v historii.',
    longDescription:
      'HC Kometa Brno je nejúspěšnější hokejový klub střední Evropy s 13 tituly. Domovská Winning Group Aréna se stala chrámem brněnského hokeje. Naše prohlídka odhaluje šatny, tréninkové zázemí, ledovou plochu a rozsáhlý klub museum, kde je k vidění sbírka trofejí, výstroje a vzpomínek na velké zápasy a mistrovské sezóny.',
    image: '/images/tour-hockey-cz.jpg',
    highlights: [
      'Prohlídka šaten a výzbroje',
      'Vstup na ledovou plochu',
      'Klub museum s trofejemi',
      'VIP etáže a skybox',
      'Příběhy hokejových legend Komety',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstupenka do arény',
      'Malá skupina (max. 15 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Nové',
  },
  {
    slug: 'eu-champion-liga-tour',
    title: 'Liga mistrů - Zápasy v Praze a Brně',
    category: 'Fotbal',
    location: 'Praha / Brno',
    duration: '2 hodiny',
    description:
      'Speciální zájezd na zápasy UEFA – Ligy mistrů nebo Evropské ligy. Živá atmosféra evropského fotbalu přímo na místě.',
    longDescription:
      'Čeští klubové se pravidelně účastní evropských pohárů. Tento speciální zájezd kombinuje průvodcovskou prohlídku stadionu se živým fotbalovým utkáním v UEFA soutěžích. Skupinu doprovází odborný průvodce, který vysvětluje atmosféru, zákulisí a historii konkrétního zápasu. Zahrnuje prohlídku zákulisí před výkopem a komentovaný výstup na tribunu.',
    image: '/images/tour-football-cz.jpg',
    highlights: [
      'Prohlídka zákulisí před výkopem',
      'Komentovaný nástup hráčů',
      'Průvodce UEFA statistikami a historií',
      'Přístup do tiskového zázemí',
      'Sezení s výhledem na hřiště',
    ],
    includes: [
      'Průvodce po zákulisí',
      'Vstupenka na utkání',
      'Malá skupina (max. 10 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Exkluzivní',
  },
  {
    slug: 'plavecky-stadion-podoli',
    title: 'Plavecký Stadion Podolí - Olympijský bazén',
    category: 'Plavání',
    location: 'Praha, Podolí',
    duration: '1,5 hodiny',
    description:
      'Ikonický pražský plavecký stadion, dějiště mistrovství světa a Evropy. Prozkoumejte olympijský bazén, systémy měření a historii čs. a českého plavání.',
    longDescription:
      'Plavecký stadion Podolí byl otevřen v roce 1965 a je jedním z nejstarších olympijských bazénů v Evropě. Hostil mezinárodní závody a vychoval generace českých závodních plavců. Naše prohlídka zahrnuje 50metrový závodní bazén, technické zázemí, časomíru, archiv výsledků a výstavu o legendách čs. plavání.',
    image: '/images/tour-athletics-cz.jpg',
    highlights: [
      'Závodní 50metrový bazén',
      'Prezentace časomíry a technologií',
      'Výstava z dějin českého plavání',
      'Příběhy olympijských medailistů',
      'Tréninkové zázemí a vědecké centrum',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstup do areálu',
      'Malá skupina (max. 15 osob)',
      'Komentář v češtině a angličtině',
    ],
  },
  {
    slug: 'salzburg-red-bull-stadion',
    title: 'Red Bull Salzburg - Zákulisní prohlídka',
    category: 'Fotbal',
    location: 'Salzburg, Rakousko',
    duration: '2 hodiny',
    description:
      'Jeden z nejdominantnějších klubů rakouské ligy a pravidelný účastník Ligy mistrů. Prohlídka zákulisí moderního stadionu Red Bull Salzburg.',
    longDescription:
      'FC Red Bull Salzburg je jedním z nejúspěšnějších klubů v historii rakouské ligy a v posledních letech se pravidelně účastní skupin UEFA Champions League. Náš zájezd vede skupinu do zákulisí Red Bull Arény - šatny, analytická místnost, hráčský tunel a VIP sektory. Průvodce přibližuje moderní metodiku tréninku a skauting filosofii Red Bull skupiny.',
    image: '/images/tour-football-cz.jpg',
    highlights: [
      'Šatny hráčů a videoanalýza',
      'Hráčský tunel a výstup na trávník',
      'VIP etáže a skybox',
      'Red Bull filosofie a tréninková metodika',
      'Výhled na sůlský kulisy Salzburgu',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstupenka na stadion',
      'Doprava z Prahy',
      'Malá skupina (max. 12 osob)',
      'Komentář v češtině, němčině a angličtině',
    ],
    badge: 'EU Zájezd',
  },
  {
    slug: 'ajax-amsterdam-tour',
    title: 'Ajax Amsterdam - Johan Cruyff Aréna',
    category: 'Fotbal',
    location: 'Amsterdam, Nizozemsko',
    duration: '2,5 hodiny',
    description:
      'Jeden z největších fotbalových klubů Evropy a kolébka totálního fotbalu. Zákulisní prohlídka legendární Johan Cruyff Arény v Amsterdamu.',
    longDescription:
      'AFC Ajax je legenda světového fotbalu a kolébka filozofie totálního fotbalu. Naše prohlídka Johan Cruyff Arény - pojmenované po největší osobnosti klubu Johanu Cruijffovi - vede skupinu přes šatny, hráčský tunel, tiskové zázemí a galerii trofejí. Odborný průvodce představuje historii Ajaxu, jejich přístup k rozvoji hráčů a legendy, které klub vychoval.',
    image: '/images/tour-multivenue-cz.jpg',
    highlights: [
      'Johan Cruyff Aréna - prohlídka zákulisí',
      'Ajax museum a galerie trofejí',
      'Hráčský tunel a trávník',
      'Tréninkový areál De Toekomst (volitelně)',
      'Prezentace filozofie totálního fotbalu',
    ],
    includes: [
      'Certifikovaný průvodce',
      'Vstupenka do arény',
      'Letecká nebo autobusová doprava z Prahy',
      'Malá skupina (max. 12 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'EU Zájezd',
  },
  {
    slug: 'grand-tour-prahy',
    title: 'Pražský Grand Sportovní Výlet - Celý den',
    category: 'Multi-venue',
    location: 'Praha',
    duration: 'Celý den (7–8 hodin)',
    description:
      'Ultimátní pražský sportovní výlet - Eden Aréna, O2 Aréna a Strahovský stadion za jeden den. Ideální pro skupiny, delegace a sportovní nadšence.',
    longDescription:
      'Náš vlajkový celodenní program kombinuje tři ikony pražské sportovní turistiky do jednoho nezapomenutelného výletu. Den začíná na Letné u Sparty, pokračuje do Eden Arény Slavie a završí se ve futuristické O2 Aréně. Soukromý autobus převáží skupinu mezi místy. Každá prohlídka zahrnuje exkluzivní zákulisní přístup a je provázena jedním z našich nejzkušenějších průvodců. Stravování a oběd jsou součástí.',
    image: '/images/tour-multivenue-cz.jpg',
    highlights: [
      'Eden Aréna - kompletní prohlídka stadionu',
      'Letná - Sparta Praha zákulisí',
      'O2 Aréna - hokejová zákulisní tour',
      'Soukromý autobus mezi místy',
      'Catering a oběd v poledne',
    ],
    includes: [
      'Senior průvodce specialista (celý den)',
      'Vstupenky na všechna místa',
      'Soukromá skupinová autobusová doprava',
      'Catering a oběd',
      'Malá skupina (max. 12 osob)',
      'Komentář v češtině a angličtině',
    ],
    badge: 'Prémiový',
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

export const tourCategories = [
  'Vše',
  'Fotbal',
  'Lední hokej',
  'Atletika',
  'Motorsport',
  'Cyklistika',
  'Tenis',
  'Plavání',
  'Multi-venue',
]
