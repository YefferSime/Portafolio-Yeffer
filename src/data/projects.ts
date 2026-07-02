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
  /** Ruta al logo de marca (ej. `/image/webs/{id}/{id}Logo.webp`). Si no existe, la card usa una captura de pantalla como fallback. */
  logo?: string;
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
    logo: "/image/apps/finisherdata/finisherdataLogo.webp",
    description:
      "Plataforma principal de consulta para atletas, diseñada para entregar resultados inmediatos, certificados y videos de llegada en eventos de alta concurrencia.",
    bullets: [
      "Arquitectura móvil implementada bajo el patrón MVVM, asegurando un código modular, testeable y fácil de mantener.",
      "Implementé el flujo de suscripciones nativo con Google Play Billing en Android para el acceso a certificados y contenido premium.",
      "Desarrollé la integración de videos de llegada (Finish Video) consumiendo flujos HLS con sincronización de tiempo específica por atleta.",
      "Optimicé la experiencia de usuario con animaciones de Lottie y transiciones fluidas en Jetpack Compose para reducir la fricción en la consulta.",
      "Garantice la visualización de datos en tiempo real mediante WebSockets, permitiendo que el progreso de las competencias se refleje al instante.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "SwiftUI", "Firebase", "HLS Video", "Lottie"],
    images: [
      { src: "/image/apps/finisherdata/app_finisherdata.webp", label: "Android" },
      { src: "/image/apps/finisherdata/ios_finisherdata.webp", label: "iOS" },
      { src: "/image/apps/finisherdata/web_phone_finisherdata.webp", label: "Web móvil" },
      { src: "/image/apps/finisherdata/web_tablet_finisherdata.webp", label: "Web tablet" },
      { src: "/image/apps/finisherdata/web_laptop_finisherdata.webp", label: "Web laptop" },
    ],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.finisherdata.app" },
      { label: "App Store", url: "https://apps.apple.com/es/app/finisher-data/id6464394200" },
      { label: "Web", url: "https://finisherdata.com/" },
    ],
  },
  {
    id: "exotimer",
    title: "Exotimer",
    logo: "/image/apps/exotimer/exotimerLogo.webp",
    description:
      "Sistema crítico de cronometraje profesional con validación en eventos internacionales de élite, diseñado para máxima fiabilidad en condiciones extremas.",
    bullets: [
      "Desarrollado con arquitectura MVVM y estados reactivos, garantizando la precisión de tiempos críticos sin bloqueos en la interfaz.",
      "Software validado en competencias internacionales como los Panamericanos Lima 2025, Andes Race y el Panamericano de Surf 2025.",
      "Arquitectura 'Offline-first' con Room Database, asegurando la integridad de los tiempos en zonas sin cobertura (probado en Argentina, Ecuador y Brasil).",
      "Desarrollé un sistema de captura de ráfaga que permite el registro manual de múltiples atletas simultáneos con precisión de milisegundos.",
      "Sincronización asíncrona inteligente que asegura la transferencia de datos al servidor central una vez recuperada la conectividad.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room Database", "QR Scanner", "SQLite"],
    images: [
      { src: "/image/apps/exotimer/app_exotimer_1.webp", label: "Android" },
      { src: "/image/apps/exotimer/app_exotimer_2.webp", label: "Android" },
      { src: "/image/apps/exotimer/app_exotimer_3.webp", label: "Android" },
      { src: "/image/apps/exotimer/app_exotimer_4.webp", label: "Android" },
    ],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.exotimer" },
    ],
  },
  {
    id: "peruaquatics",
    title: "Peruaquatics",
    logo: "/image/apps/peruaquatics/peruaquaticsLogo.webp",
    description:
      "Aplicación oficial de la Federación Deportiva Nacional de Natación (FDPN) para la gestión de atletas federados, récords y resultados de competiciones.",
    bullets: [
      "Estructuré la aplicación móvil siguiendo el patrón MVVM para una gestión eficiente de los estados de competencia y perfiles de atletas.",
      "Desarrollé la aplicación móvil oficial permitiendo a los atletas acceder a sus marcas personales y récords nacionales de forma centralizada.",
      "Implementé un módulo especializado para la consulta de datos históricos, asegurando la integridad de la información federativa.",
      "Desarrollé la versión web responsive utilizando Next.js y Tailwind CSS, optimizando la visualización de resultados en tiempo real.",
      "Diseñé el flujo de inscripciones masivas para competencias nacionales, facilitando el registro de clubes y nadadores a nivel nacional.",
    ],
    technologies: ["Next.js", "TypeScript", "MVVM", "Tailwind", "Kotlin", "Jetpack Compose", "Firebase"],
    images: [
      { src: "/image/apps/peruaquatics/app_peruaquatics_1.webp", label: "Android" },
      { src: "/image/apps/peruaquatics/app_peruaquatics_2.webp", label: "Android" },
    ],
    links: [
      { label: "Play Store (Standby)", url: "https://play.google.com/store/apps/details?id=com.peruaquatics" },
      { label: "Web (Standby)", url: "https://peruaquatics.com/" },
    ],
  },
  {
    id: "nails-with-lili",
    title: "Nails with Lili",
    logo: "/image/webs/nailswithlili/nailswithliliLogo.webp",
    description:
      "Landing page de alta conversión diseñada para un negocio de estética en EE. UU., enfocada en la reserva de citas y presencia digital.",
    bullets: [
      "Diseño integral de la interfaz (UI) en Figma, creando una identidad visual moderna y minimalista.",
      "Desarrollo fiel al diseño original utilizando WordPress y Elementor con CSS personalizado para efectos avanzados.",
      "Optimización de embudo de conversión dirigido a la plataforma Glossy para la gestión automatizada de citas.",
      "Optimización de rendimiento (WPO) mediante imágenes WebP y carga asíncrona, logrando tiempos de carga mínimos.",
    ],
    technologies: ["Figma", "WordPress", "Elementor", "CSS3", "WebP"],
    images: [
      { src: "/image/webs/nailswithlili/web_laptop_nailswithlili.webp", label: "Web laptop" },
      { src: "/image/webs/nailswithlili/web_tablet_nailswithlili.webp", label: "Web tablet" },
      { src: "/image/webs/nailswithlili/web_phone_nailswithlili.webp", label: "Web móvil" },
    ],
    links: [
      { label: "Sitio Web", url: "https://nailswithlili.com" },
    ],
  },
  {
  id: "barber-super-mario",
  title: "Barber Super Mario",
  logo: "/image/webs/barbersupermario/barbersupermarioLogo.webp",
  description:
    "Plataforma web full stack desarrollada a medida para una barbería en Arlington, Virginia (EE. UU.), con landing page pública y panel de administración privado que permite al barbero gestionar todo su contenido de forma autónoma.",
  bullets: [
    "Diseñé e implementé una arquitectura full stack desacoplada: frontend SPA en React 19 + Vite desplegado en Vercel, y REST API en Node.js + Express con MySQL 8 desplegada en Railway.",
    "Desarrollé un panel de administración completo con CRUD de servicios, galería de fotos/videos, moderación de reseñas y edición de datos de contacto, protegido con autenticación JWT y rate limiting por IP.",
    "Integré Cloudinary para almacenamiento y entrega CDN de imágenes y videos, con subida via stream (sin escritura en disco) y limpieza automática de archivos huérfanos.",
    "Implementé una estrategia SEO orientada al mercado estadounidense: Schema.org HairSalon, Open Graph, sitemap.xml, geo tags para Arlington VA y lazy loading por ruta para optimizar el LCP.",
  ],
  technologies: ["React 19", "Node.js", "Express", "MySQL", "Cloudinary", "JWT", "Vite", "TailwindCSS", "Vercel", "Railway"],
  images: [
    { src: "/image/webs/barbersupermario/web_laptop_barbersupermario.webp", label: "Web laptop" },
    { src: "/image/webs/barbersupermario/web_tablet_barbersupermario.webp", label: "Web tablet" },
    { src: "/image/webs/barbersupermario/web_phone_barbersupermario.webp", label: "Web móvil" },
  ],
  links: [
    { label: "Sitio Web", url: "https://barbersupermario.com" },
  ],
},
];