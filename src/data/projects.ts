export type ProjectImageItem = {
  src: string;
  label: "Android" | "Web móvil" | "Web tablet" | "Web laptop" | "iOS";
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  technologies: string[];
  images: ProjectImageItem[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "finisherdata",
    title: "Finisher Data",
    description:
      "Plataforma principal de consulta para atletas, diseñada para entregar resultados inmediatos, certificados y videos de llegada en eventos de alta concurrencia.",
    bullets: [
      "Implementé el flujo de suscripciones nativo con Google Play Billing en Android para el acceso a certificados y contenido premium.",
      "Desarrollé la integración de videos de llegada (Finish Video) consumiendo flujos HLS con sincronización de tiempo específica por atleta.",
      "Optimicé la experiencia de usuario con animaciones de Lottie y transiciones fluidas en Jetpack Compose para reducir la fricción en la consulta.",
      "Colaboré en la arquitectura responsive de la versión web, asegurando que miles de usuarios puedan navegar resultados desde cualquier dispositivo.",
      "Garantice la visualización de datos en tiempo real mediante WebSockets, permitiendo que el progreso de las competencias se refleje al instante.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "SwiftUI", "Firebase", "HLS Video", "Lottie"],
    images: [
      {
        src: "/image/apps/finisherdata/app_finisherdata.webp",
        label: "Android",
      },
       {
        src: "/image/apps/finisherdata/ios_finisherdata.webp",
        label: "iOS",
      },
      {
        src: "/image/apps/finisherdata/web_phone_finisherdata.webp",
        label: "Web móvil",
      },
      {
        src: "/image/apps/finisherdata/web_tablet_finisherdata.webp",
        label: "Web tablet",
      },
      {
        src: "/image/apps/finisherdata/web_laptop_finisherdata.webp",
        label: "Web laptop",
      },
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.finisherdata.app",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/es/app/finisher-data/id6464394200",
      },
      {
        label: "Web",
        url: "https://finisherdata.com/",
      },
    ],
  },
  {
    id: "exotimer",
    title: "Exotimer",
    description:
      "Sistema crítico de cronometraje profesional con validación en eventos internacionales de élite, diseñado para máxima fiabilidad en condiciones extremas.",
    bullets: [
      "Software validado en competencias internacionales de alto nivel como los Panamericanos Lima 2025 (Aguas Abiertas), Andes Race y el Sudamericano en Callahuanca.",
      "Arquitectura 'Offline-first' con Room Database, garantizando la integridad de los tiempos en zonas sin cobertura, con despliegues exitosos en Argentina, Ecuador y Brasil.",
      "Implementación de interfaz adaptativa con soporte nativo para Modo Oscuro, optimizando el consumo de energía y la legibilidad en eventos de larga duración.",
      "Desarrollé un sistema de captura de ráfaga que permite el registro manual de múltiples atletas simultáneos con precisión de milisegundos.",
      "Módulo integral de gestión: creación de eventos, carga de participantes mediante lector QR y configuración de múltiples puntos de control (Paso y Meta).",
      "Sincronización asíncrona inteligente que asegura la transferencia de datos al servidor central de FinisherData una vez recuperada la conectividad."
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Room Database", "QR Scanner", "SQLite"],
    images: [
      {
        src: "/image/apps/exotimer/app_exotimer_1.webp",
        label: "Android",
      },
      {
        src: "/image/apps/exotimer/app_exotimer_2.webp",
        label: "Android",
      },
    {
        src: "/image/apps/exotimer/app_exotimer_3.webp",
        label: "Android",
      },
    {
        src: "/image/apps/exotimer/app_exotimer_4.webp",
        label: "Android",
      },
        ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.exotimer",
      },
    ],
  },
  {
    id: "peruaquatics",
    title: "Peruaquatics",
    description:
      "Aplicación oficial de la Federación Deportiva Nacional de Natación (FDPN) para la gestión de atletas federados, récords y resultados de competiciones.",
    bullets: [
      "Desarrollé la aplicación móvil oficial permitiendo a los atletas acceder a sus perfiles federados y marcas personales de forma centralizada.",
      "Implementé un módulo especializado para la consulta de récords nacionales y categorías, asegurando la integridad de los datos históricos.",
      "Desarrollé la versión web responsive utilizando Next.js, TypeScript y Tailwind CSS, optimizando la experiencia de usuario en dispositivos móviles.",
      "Integré persistencia de datos local para permitir la consulta de resultados previos y calendarios de eventos sin necesidad de conexión activa.",
      "Diseñé el flujo de inscripciones abiertas para competencias nacionales, facilitando el registro masivo de nadadores y clubes.",
      "Trabajé en la integración de pasarelas de pago con Stripe (actualmente en standby), preparando la plataforma para la gestión de membresías y tasas.",
      "Arquitectura preparada para pagos recurrentes mediante la integración de Stripe (fase de despliegue sujeta a cliente).",
      "Desarrollado bajo requerimientos oficiales de la FDPN para la centralización de marcas nacionales."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Kotlin", "Jetpack Compose", "Firebase"],
    images: [
      {
        src: "/image/apps/peruaquatics/app_peruaquatics_1.webp",
        label: "Android",
      },
      {
        src: "/image/apps/peruaquatics/app_peruaquatics_2.webp",
        label: "Android",
      }
    ],
    links: [
        {
        label: "Play Store (Standby)",
        url: "https://play.google.com/store/apps/details?id=com.peruaquatics",
       // O el link si sigue listada aunque no cargue datos
      },
      {
        label: "Web (Standby)",
         url: "https://peruaquatics.com/",
      },

    ],
  },
  {
    id: "nails-with-lili",
    title: "Nails with Lili",
    description:
      "Landing page de alta conversión diseñada para un negocio de estética en EE. UU., enfocada en la reserva de citas y presencia digital.",
    bullets: [
      "Diseño integral de la interfaz de usuario (UI) en Figma, creando una identidad visual moderna y profesional.",
      "Desarrollo y maquetación fiel al diseño original utilizando WordPress y Elementor, garantizando precisión de píxeles.",
      "Implementación de CSS personalizado para extender las capacidades del maquetador y lograr efectos visuales específicos.",
      "Optimización de embudo de conversión dirigido a la plataforma Glossy para la gestión automatizada de citas.",
      "Optimización de rendimiento y WPO mediante el uso de formatos de imagen de última generación (WebP) y carga asíncrona.",
      "Estructura totalmente responsive adaptada para una navegación fluida desde dispositivos móviles."
    ],
    technologies: ["Figma", "WordPress", "Elementor", "CSS3", "WebP"],
    images: [
      {
        src: "/image/webs/nailswithlili/web_laptop_nailswithlili.webp",
        label: "Web laptop",
      },
      {
        src: "/image/webs/nailswithlili/web_tablet_nailswithlili.webp",
        label: "Web tablet",
      },
      {
        src: "/image/webs/nailswithlili/web_phone_nailswithlili.webp",
        label: "Web móvil",
      },
    ],
    links: [
      {
        label: "Sitio Web",
        url: "https://nailswithlili.com", // O el link correspondiente
      },
      
    ],
  },
  {
    id: "barber-super-mario",
    title: "Barber Super Mario",
    description:
      "Plataforma web profesional desarrollada a medida para una barbería en EE. UU., enfocada en el posicionamiento de marca y conversión de citas.",
    bullets: [
      "Desarrollé la arquitectura del sitio utilizando PHP y Laravel, garantizando una estructura de código limpia y escalable.",
      "Optimicé y refiné el diseño original para mejorar la jerarquía visual y la experiencia de usuario (UX).",
      "Implementé una interfaz totalmente responsive mediante CSS puro, asegurando una visualización perfecta en todos los dispositivos móviles.",
      "Integré un flujo de conversión directa hacia la plataforma Booksy, facilitando la reserva de turnos en tiempo real para los clientes.",
      "Desarrollé una navegación fluida y optimizada para el rendimiento, logrando tiempos de carga mínimos en producción.",
      "Gestión de despliegue y mantenimiento técnico para un negocio real en el mercado estadounidense."
    ],
    technologies: ["PHP", "Laravel", "CSS3", "Blade", "Apache"],
    images: [
      {
        src: "/image/webs/barbersupermario/web_laptop_barbersupermario.webp",
        label: "Web laptop",
      },
      {
        src: "/image/webs/barbersupermario/web_tablet_barbersupermario.webp",
        label: "Web tablet",
      },
      {
        src: "/image/webs/barbersupermario/web_phone_barbersupermario.webp",
        label: "Web móvil",
      },
    ],
    links: [
      {
        label: "Sitio Web",
        url: "https://barbersupermario.com",
      },
    ],
  },
];