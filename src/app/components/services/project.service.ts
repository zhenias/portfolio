import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  tags: string[];
  githubUrl: string | undefined;
  demoUrl: string | undefined;
  technologies: string[];
  description?: string;
  features?: string[];
  allImages?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public getColorClass(tech: string): string {
    const colors: { [key: string]: string } = {
      // Front-end
      'Angular': 'bg-red-100 text-red-800 border-red-200',
      'React': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Vue.js': 'bg-green-100 text-green-800 border-green-200',
      'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',

      // Back-end
      'Node.js': 'bg-green-100 text-green-800 border-green-200',
      'Symfony': 'bg-gray-100 text-gray-800 border-gray-200',
      'Laravel': 'bg-red-100 text-red-800 border-red-200',
      'PHP': 'bg-purple-100 text-purple-800 border-purple-200',
      'C#': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'C++': 'bg-blue-100 text-blue-800 border-blue-200',

      // Bazy danych
      'IndexDB': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'MySQL': 'bg-orange-100 text-orange-800 border-orange-200',
      'MongoDB': 'bg-green-100 text-green-800 border-green-200',
      'PostgreSQL': 'bg-blue-100 text-blue-800 border-blue-200',

      // Style/CSS
      'Tailwind CSS': 'bg-teal-100 text-teal-800 border-teal-200',
      'Tailwind': 'bg-teal-100 text-teal-800 border-teal-200',
      'Bootstrap': 'bg-purple-100 text-purple-800 border-purple-200',
      'Angular Material': 'bg-blue-100 text-blue-800 border-blue-200',
      'CSS': 'bg-amber-100 text-amber-800 border-amber-200',
      'HTML': 'bg-red-100 text-red-800 border-red-200',

      // Narzędzia/API
      'REST API': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'QR Code API': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Chart.js': 'bg-pink-100 text-pink-800 border-pink-200',
      'RxJS': 'bg-purple-100 text-purple-800 border-purple-200'
    };

    return colors[tech] || 'bg-gray-100 text-gray-800 border-gray-200';
  }

  getProjects(): Project[] {
    return [
      {
        id: 'dziennikqr',
        title: 'DziennikQR',
        shortDescription: 'Aplikacja do logowania dla uczniów/rodziców i pracowników szkoły z użyciem QR kodów.',
        image: '/assets/dziennik-qr/logowanie.jpg',
        tags: ['Angular', 'TypeScript', 'IndexDB'],
        technologies: ['Angular', 'TypeScript', 'IndexDB', 'REST API'],
        description: `
          Prosta aplikacja, połączona z e-Dziennikie, pozwalająca zalogowanie do aplikacji poprzez QR kod.
        `,
        features: [
          'Parowanie urządzeń.',
          'Logowanie za pomocą QR kodu.',
          'Wyświetlanie listy kont, połączonych na urządzeniu.',
          'Możliwość wyzerowania urządzenia z poziomu aplikacji, jak i zarówno z e-Dziennika.',
        ],
        allImages: [
          '/assets/dziennik-qr/logowanie.jpg',
          '/assets/dziennik-qr/lista_kont.PNG',
          '/assets/dziennik-qr/parowanie.jpg',
        ],
        githubUrl: undefined,
        demoUrl: 'https://dziennik-szkola.online/ui/qr-auth/browser/index.html',
      },
      {
        id: 'sekretariat',
        title: 'e-Sekretariat',
        shortDescription: 'System do zarządzania sekretariatem szkolnym, w tym dokumentami i wpisami uczniów.',
        image: '/assets/sekretariat/dashboard.png',
        tags: ['Angular', 'Material UI', 'TypeScript'],
        githubUrl: 'https://github.com/zhenias/angular-secretary',
        demoUrl: 'https://dziennik-szkola.online/ui/secretary/browser/',
        technologies: [
          'Angular',
          'Angular Material',
          'TypeScript',
          'Tailwind CSS',
          'HttpClient',
          'RxJS',
        ],
        description: `
          e-Sekretariat - system do zarządzania uczniami, nauczycielami, oraz generowanie dokumentów PDF.
          PS: Wszystkie dane w sekretariacie są testowe.
        `,
        features: [
          'Księga uczniów.',
          'Zarządzanie uczniami.',
          'Tworzenie szablonów do dokumentów oraz generacja PDF, dla konkretnego ucznia.',
          'Wprowadzanie informacji o kartach rowerowych, egzaminach.',
          'Rejestry: kart rowerowych, egzaminów, wycieczek, dokumentów uczniów, uwag.',
        ],
        allImages: [
          '/assets/sekretariat/dashboard.png',
          '/assets/sekretariat/jednostki.png',
          '/assets/sekretariat/oddzialy.png',
          '/assets/sekretariat/oddzialy_plan_lekcji.png',
          '/assets/sekretariat/oddzialy_uczniowie.png',
          '/assets/sekretariat/ksiega_uczniow.png',
          '/assets/sekretariat/nabory_oddzialy.png',
          '/assets/sekretariat/nabory_kandydaci.png',
          '/assets/sekretariat/nabory_kandydaci_zakonczenie_rekrutacji.png',
          '/assets/sekretariat/edycja_ucznia.png',
          '/assets/sekretariat/wyszukaj_ucznia.png',
          '/assets/sekretariat/rejestr_kart_rowerowych.png',
          '/assets/sekretariat/rejestr_egzaminow.png',
        ]
      },
      {
        id: 'e-dziennik',
        title: 'e-Dziennik',
        shortDescription: 'System e-Dziennik pozwalający do zarządzania ocenami, frekwencją, uczniami, pracownikami.',
        image: '',
        tags: ['Laravel', 'PHPUnit', 'MySQL'],
        githubUrl: undefined,
        technologies: ['Laravel', 'PHPUnit', 'JavaScript', 'QR Logowanie', 'MySQL', 'Angular'],
        description: `
          e-Dziennik pozwala na zarządzanie uczniami, klasami, frekwencją, etc.
          PS: Wszystkie dane w e-Dzienniku są testowe.
        `,
        features: [
          'Cyfryzacja tradycyjnego dziennika z zachowaniem wszystkich funkcji.',
          'Natychmiastowy dostęp do ocen i frekwencji dla rodziców.',
          'Automatyzacja obliczania średnich i statystyk.',
          'Skrócenie czasu pracy nauczycieli przy prowadzeniu dokumentacji.',
          'Bezpieczna komunikacja między szkołą a domem.',
          'Przejrzyste raporty postępów edukacyjnych.',
          'Logowanie dwustopniowe, wysyłanie kodu na e-mail.',
          'Dodatkowe aplikacje do dziennika są: e-Sekretariat, oraz DziennikQR.',
        ],
        allImages: [
          '/assets/e-dziennik/image.png',
          '/assets/e-dziennik/oceny_srodroczne.png',
          '/assets/e-dziennik/oceny_uczniow.png',
          '/assets/e-dziennik/oceny_zachowania.png',
          '/assets/e-dziennik/frekwencja.png',
          '/assets/e-dziennik/promocja_oddzialy.png',
          '/assets/e-dziennik/promocja_uczniowie.png',
          '/assets/e-dziennik/promocja_rok_szkolny.png',
          '/assets/e-dziennik/uwagi_seryjnie.png',
          '/assets/e-dziennik/frekwencja_seryjnie.png',
          '/assets/e-dziennik/logowanie_qr.png',
        ],
        demoUrl: undefined
      },
      {
        id: 'biblioteka',
        title: 'Biblioteka książek',
        shortDescription: 'System do zarządzenia biblioteką książek. Wypożyczanie, sortowanie, wyszukiwanie.',
        image: '/assets/biblioteka-ksiazek/image.png',
        tags: ['Angular', 'Bootstrap', 'TypeScript'],
        githubUrl: 'https://github.com/zhenias/manager-books-angular',
        demoUrl: 'https://manager-books-angular.vercel.app/books',
        technologies: ['Angular', 'Bootstrap', 'TypeScript'],
        description: 'System do zarządzenia biblioteką książek. Wypożyczanie, sortowanie, wyszukiwanie.',
        features: ['Wypożyczanie', 'Wyszukiwanie', 'Sortowanie'],
        allImages: [
          '/assets/biblioteka-ksiazek/image.png',
          '/assets/biblioteka-ksiazek/edycja-ksiazki.png',
          '/assets/biblioteka-ksiazek/sortowanie.png',
          '/assets/biblioteka-ksiazek/wyszukaj.png'
        ]
      },
      {
        id: 'listapostow',
        title: 'Lista postów',
        shortDescription: 'Aplikacja do wyświetlania listy postów z możliwością usuwania i szczegółów.',
        image: '/assets/lista-postow/image.png',
        tags: ['Vue.js', 'Composition API'],
        githubUrl: 'https://github.com/zhenias/vue-lista-postow',
        demoUrl: 'https://vue-lists-posts.vercel.app',
        technologies: ['Vue.js', 'Composition API', 'CSS'],
        description: 'Prosta aplikacja do wyświetlania listy postów z możliwością usuwania i szczegółów.',
        features: ['Paginacja.', 'Usuwanie postów.', 'Wyświetlanie szczegółów posta.'],
        allImages: [
          '/assets/lista-postow/image.png'
        ]
      },
      {
        id: 'kalkulator-inf04',
        title: 'Kalkulator INF.04',
        shortDescription: 'Prosty kalkulator stworzony na potrzeby egzaminu INF.04.',
        image: '/assets/kalkulator-inf.04/image.png',
        tags: [
          'C#',
          'WindowsForms',
        ],
        githubUrl: 'https://github.com/zhenias/kalkulator-inf04',
        technologies: [
          'C#',
          'WindowsForms',
        ],
        description: 'Kalkulator z podstawowymi operacjami, stworzony na potrzeby egzaminy z INF.04',
        features: ['Dodawanie', 'Odejmowanie', 'Mnożenie', 'Dzielenie'],
        allImages: [
          '/assets/kalkulator-inf.04/image.png'
        ],
        demoUrl: undefined
      },
      {
        id: 'kalkulator-logistyczny',
        title: 'Kalkulator dla logistyków',
        shortDescription: 'Aplikacja do obliczania CBM i kosztów transportu',
        image: '/assets/logistyczny-kalkulator/image.png',
        tags: ['React', 'MUI'],
        githubUrl: 'https://github.com/zhenias/tools-for-logistics',
        demoUrl: 'https://tools-for-logistics.vercel.app',
        technologies: ['React', 'MUI', 'JSx'],
        description: 'Prosty kalkulator dla logistyków.',
        features: ['Obliczanie CBM', 'Koszty transportu', 'Konwersje'],
        allImages: [
          '/assets/logistyczny-kalkulator/image.png',
          '/assets/logistyczny-kalkulator/koszt_transportu.png'
        ]
      },
      {
        id: 'ziu-system-wynikow',
        title: 'System wyników',
        shortDescription: 'Aplikacja do dodawanie i edycji wyników z egzaminów.',
        image: '',
        tags: ['Laravel', 'MySQL'],
        githubUrl: 'https://github.com/zhenias/ziu-system-wynikow',
        technologies: ['Laravel', 'Laravel Auth', 'PHPUnit', 'JavaScript', 'MySQL'],
        description: 'Aplikacja do dodawanie i edycji wyników z egzaminów.',
        features: ['Dodawanie wyników', 'Edycja wyników', 'Konfiguracja słowników', 'Logowanie'],
        allImages: [],
        demoUrl: undefined
      },
      {
        id: 'employee-working-time-symfony',
        title: 'Przepracowane godziny pracy',
        shortDescription: 'Przepracowane godziny pracy przez pracowników.',
        image: '',
        tags: ['Laravel', 'PostgreSQL'],
        githubUrl: 'https://github.com/zhenias/employee-working-time-symfony',
        technologies: ['Symfony', 'API'],
        description: `
          Przepracowane godziny pracy przez pracowników.
          Prosta aplikacja do zliaczania oraz dodawanie godzin pracy dla konkretnego pracownika.
        `,
        features: [
          'Tworzenie pracownika, unikatowy e-mail.',
          'Dodawanie czasu pracy, z ograniczeniami.',
          'Podsumowanie dzienne oraz miesięczne.',
        ],
        allImages: [],
        demoUrl: undefined
      },
      {
        id: 'angular-messages',
        title: 'System wiadomości',
        shortDescription: '',
        image: '',
        tags: ['TypeScript', 'Tailwind', 'REST API'],
        githubUrl: 'https://github.com/zhenias/angular-messages',
        technologies: ['TypeScript', 'TailwindCSS', 'REST API'],
        description: `
          System wiadomości, wyświetlanie odebranych, wysłanych, w koszu, wiadomości.
        `,
        features: [
          'Wysyłanie wiadomości.',
          'Przeglądanie wiadomości.',
          'Wyświetlanie wiadomości z koszu, odebranych, wysłanych, archiwum.',
        ],
        allImages: [],
        demoUrl: undefined
      }
    ];
  }
}
