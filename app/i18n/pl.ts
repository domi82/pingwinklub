import type { Translation } from './types';

export const pl: Translation = {
  nav: {
    home: 'Strona Główna',
    about: 'O Nas',
    schedule: 'Grafik',
    contact: 'Kontakt',
    langToggle: 'English',
  },
  home: {
    hero: {
      tagline: 'Łączy nas pasja do ping-ponga',
      subtagline:
        'Dołącz do naszych zajęć i rozwiń swoje umiejętności pod okiem doświadczonych trenerów. Grupy dla dzieci, juniorów i dorosłych na każdym poziomie.',
      cta: 'Sprawdź grafik',
    },
    features: [
      {
        icon: 'paddle',
        title: 'Zajęcia dla każdego',
        body: 'Prowadzimy grupy dla dzieci, juniorów i dorosłych na każdym poziomie zaawansowania. Nigdy nie jest za późno, żeby zacząć!',
      },
      {
        icon: 'coach',
        title: 'Wykwalifikowani trenerzy',
        body: 'Nasi trenerzy posiadają licencje PZTS i wieloletnie doświadczenie w szkoleniu zawodników na każdym poziomie.',
      },
      {
        icon: 'facility',
        title: 'Nowoczesny sprzęt',
        body: 'Nowe stoły tenisowe, profesjonalne oświetlenie i komfortowe szatnie czekają na Ciebie.',
      },
    ],
    ctaBanner: {
      text: 'Gotowy, żeby zacząć? Dołącz do naszego klubu już dziś!',
      button: 'Kontakt',
    },
  },
  about: {
    heading: 'O Nas',
    intro:
      'Pingwin to miejsce, gdzie pasja do tenisa stołowego spotyka się z profesjonalnym szkoleniem. Od ponad 15 lat rozwijamy talenty i pomagamy zawodnikom na każdym poziomie osiągać swoje cele.',
    mission: {
      heading: 'Nasza misja',
      body: 'Rozwijamy pasję do tenisa stołowego w przyjaznej atmosferze sportowej. Wierzymy, że każdy — niezależnie od wieku i poziomu — może czerpać radość z gry i stale się doskonalić.',
    },
    coaches: {
      heading: 'Nasi trenerzy',
      list: [
        {
          name: 'Antonina Szymańska',
          role: 'Trener główny',
          bio: 'Była zawodniczka kadry narodowej i wielokrotna medalistka Mistrzostw Polski. Antonina prowadzi grupy zaawansowane i wyczynowe z niezwykłą pasją i precyzją.',
        },
      ],
    },
    history: {
      heading: 'Nasza historia',
      body: 'Klub Pingwin powstał ponad 15 lat temu z inicjatywy Antoniny Szymańskiej. W 2020 roku uruchomiliśmy sekcję dla dzieci w wieku szkolnym. Dziś klub liczy wielu aktywnych członków biorących udział w zajęciach na każdym poziomie i z roku na rok rośnie w siłę.',
    },
  },
  schedule: {
    heading: 'Grafik zajęć',
    subheading: 'Znajdź idealne zajęcia dla siebie',
    note: '* Grafik może ulec zmianie. Prosimy o kontakt w celu potwierdzenia terminu. Aby zerezerwować lekcję próbną, skorzystaj z aplikacji dostępnej na stronie kspingwin.pl.',
    legend: {
      beginner: 'Początkujący',
      intermediate: 'Średniozaawansowany',
      advanced: 'Zaawansowany',
      open: 'Otwarte',
    },
    days: {
      monday: 'Poniedziałek',
      tuesday: 'Wtorek',
      wednesday: 'Środa',
      thursday: 'Czwartek',
      friday: 'Piątek',
      saturday: 'Sobota',
    },
    groups: {
      children: 'Dzieci (8–12 lat)',
      juniors: 'Juniorzy (13–17 lat)',
      adults: 'Dorośli',
      competitive: 'Wyczynowy',
      open: 'Otwarte dla wszystkich',
    },
    table: {
      day: 'Dzień',
      time: 'Godzina',
      level: 'Poziom',
      group: 'Grupa',
      coach: 'Trener',
    },
  },
  contact: {
    heading: 'Kontakt',
    form: {
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      subject: 'Temat',
      message: 'Wiadomość',
      send: 'Wyślij wiadomość',
      successMsg:
        'Dziękujemy! Twoja wiadomość została wysłana. Odezwiemy się najszybciej, jak to możliwe.',
      subjectOptions: [
        'Zapisz mnie na zajęcia',
        'Pytanie o grafik',
        'Cennik i karnety',
        'Organizacja turnieju',
        'Inne',
      ],
    },
    info: {
      address: { label: 'Adres', value: 'Osiedle Albertyńskie 1\n31-861 Krakow' },
      email: { label: 'E-mail', value: 'kontakt@pingwinklub.pl' },
      note: 'Aby umówić się na zajęcia indywidualne lub lekcję próbną, zarezerwuj termin poprzez aplikację dostępną na stronie kspingwin.pl',
  
    },
  },
  footer: {
    tagline: 'Pingwin — Twoje miejsce na ping-ponga w Krakowie',
    copyright: 'Pingwin. Wszelkie prawa zastrzeżone.',
  },
};
