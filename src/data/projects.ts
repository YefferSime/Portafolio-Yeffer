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
  /** Reemplaza la etiqueta de plataforma calculada (ej. "App web"). */
  platformLabel?: string;
  description: string;
  bullets: string[];
  technologies: string[];
  images: ProjectImageItem[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "peruaquatics",
    title: "Peruaquatics",
    logo: "/image/apps/peruaquatics/peruaquaticsLogo.webp",
    description:
      "App en React Native para la Federación Deportiva Nacional de Natación (FDPN), orientada a la gestión de eventos, atletas e inscripciones y a la visualización de resultados, adaptada a los requerimientos del cliente.",
    bullets: [
      "Desarrollé la app con React Native y TypeScript, publicada en Google Play Store para la federación nacional.",
      "Implementé la gestión de eventos, atletas e inscripciones, con visualización de resultados y marcas personales de cada nadador.",
      "Construí un módulo de consulta de datos históricos y récords nacionales, asegurando la integridad de la información federativa.",
      "Integré APIs REST y Firebase, con navegación (React Navigation) y manejo de estado pensados para flujos de inscripción masiva de clubes y nadadores.",
      "Desarrollé la versión web responsive con Next.js y Tailwind CSS para la visualización de resultados.",
    ],
    technologies: ["React Native", "TypeScript", "React Navigation", "REST API", "Firebase", "Next.js", "Tailwind"],
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
    title: "FinisherData TIMING (antes Exotimer)",
    logo: "/image/apps/exotimer/exotimerLogo.webp",
    description:
      "App de cronometraje deportivo para Android e iOS, usada en eventos nacionales e internacionales de natación, running, maratones, ciclismo y motociclismo. Integrada con FinisherData para el registro de tiempos en tiempo real.",
    bullets: [
      "Desarrollado con arquitectura MVVM y estados reactivos, garantizando la precisión de tiempos críticos sin bloqueos en la interfaz.",
      "Software validado en competencias internacionales como los Panamericanos Lima 2025, Andes Race y el Panamericano de Surf 2025.",
      "Arquitectura 'Offline-first' con Room Database, asegurando la integridad de los tiempos en zonas sin cobertura (probado en Argentina, Ecuador y Brasil).",
      "Desarrollé un sistema de captura de ráfaga que permite el registro manual de múltiples atletas simultáneos con precisión de milisegundos.",
      "Sincronización asíncrona inteligente que asegura la transferencia de datos al servidor central una vez recuperada la conectividad.",
      "Desarrollé la versión iOS con SwiftUI, MVVM y Clean Architecture: capa de red con URLSession y async/await, autenticación con JWT, Keychain, Firebase, Sign in with Apple y Google Sign-In, y persistencia local con SwiftData.",
      "Implementé resultados en tiempo real con WebSocket, captura de lecturas de equipos de cronometraje y exportación/importación de datos en CSV y PDF.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "SwiftUI", "SwiftData", "MVVM", "Clean Architecture", "Room Database", "WebSocket", "JWT"],
    images: [
      { src: "/image/apps/exotimer/app_exotimer_1.webp", label: "Android" },
      { src: "/image/apps/exotimer/app_exotimer_2.webp", label: "Android" },
      { src: "/image/apps/exotimer/app_exotimer_3.webp", label: "Android" },
      { src: "/image/apps/exotimer/app_exotimer_4.webp", label: "Android" },
    ],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.exotimer" },
      { label: "App Store", url: "https://apps.apple.com/ec/app/finisherdatatiming/id6806368634" },
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
  {
    id: "controlape",
    title: "ControlaPe (Demo)",
    logo: "/image/webs/controlape/controlapeLogo.webp",
    platformLabel: "App web",
    description:
      "SaaS multi-tenant para barberías con punto de venta, comisiones automáticas por barbero, liquidaciones de planilla y panel de super-admin de plataforma. Actualmente en fase demo.",
    bullets: [
      "Diseñé una API REST multi-tenant con Express 5, TypeScript y Prisma sobre MySQL, con aislamiento de datos por negocio y autenticación JWT con alcances separados para negocio y plataforma.",
      "Implementé el motor de comisiones que se resuelve y congela por línea de venta (porcentaje manual, por servicio o base del barbero), con tickets secuenciales por negocio y anulaciones controladas.",
      "Desarrollé liquidaciones de planilla con descuento de adelantos pendientes, reportes por día, semana y mes en zona horaria de Lima, y un job de avisos de vencimiento de suscripción.",
      "Construí el frontend en Next.js 16 y React 19 con Zustand y un sistema de diseño neumórfico propio sobre Tailwind v4, con POS, dashboard, administración y roles de barbero, admin y dueño.",
      "Escribí cerca de 70 pruebas unitarias con Vitest sobre las reglas de negocio críticas (comisiones, caja y liquidaciones).",
      "Documenté la API con OpenAPI/Swagger generado desde esquemas Zod, y preparé el despliegue en Railway (backend + MySQL) y Vercel (frontend).",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Express", "Prisma", "MySQL", "Zustand", "Vitest", "Tailwind", "Zod", "JWT", "Railway", "Vercel"],
    images: [
      { src: "/image/webs/controlape/web_laptop_controlape.webp", label: "Web laptop" },
      { src: "/image/webs/controlape/web_tablet_controlape.webp", label: "Web tablet" },
      { src: "/image/webs/controlape/web_phone_controlape.webp", label: "Web móvil" },
    ],
    links: [
      { label: "App Web (Demo)", url: "https://controla-pe-frontend.vercel.app/" },
    ],
  },
];