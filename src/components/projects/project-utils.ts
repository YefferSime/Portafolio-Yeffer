import type { Project, ProjectImageItem } from "@/data/projects";

export type PlatformIconKind = "android" | "ios" | "web";

export type PlatformInfo = {
  label: string;
  icons: PlatformIconKind[];
};

export function getPlatformInfo(images: ProjectImageItem[]): PlatformInfo {
  const hasAndroid = images.some((i) => i.label === "Android");
  const hasIOS = images.some((i) => i.label === "iOS");
  const hasWeb = images.some((i) => i.label.startsWith("Web"));

  const icons: PlatformIconKind[] = [];
  if (hasAndroid) icons.push("android");
  if (hasIOS) icons.push("ios");
  if (hasWeb) icons.push("web");

  let label: string;
  if ((hasAndroid || hasIOS) && hasWeb) label = "App + Web";
  else if (hasAndroid && hasIOS) label = "Android · iOS";
  else if (hasAndroid) label = "Android";
  else if (hasIOS) label = "iOS";
  else label = "Sitio web";

  return { label, icons };
}

/** Ancho relativo de cada tipo de mockup, para que laptop/tablet/mobile guarden proporción entre sí. */
export function getVisualWidthClass(label: string) {
  switch (label) {
    case "Android":
    case "Web móvil":
    case "iOS":
      return "max-w-[210px] sm:max-w-[230px] md:max-w-[250px]";

    case "Web tablet":
      return "max-w-[280px] sm:max-w-[320px] md:max-w-[360px]";

    case "Web laptop":
      return "max-w-[360px] sm:max-w-[420px] md:max-w-[500px] xl:max-w-[560px]";

    default:
      return "max-w-[240px] sm:max-w-[260px] md:max-w-[300px]";
  }
}

export type CardThumbnail = {
  src: string;
  kind: "logo" | ProjectImageItem["label"];
};

function getScreenshotThumbnail(project: Project): CardThumbnail {
  const laptop = project.images.find((i) => i.label === "Web laptop");
  const mobile = project.images.find(
    (i) => i.label === "Android" || i.label === "iOS"
  );
  const fallback = laptop ?? mobile ?? project.images[0];
  return { src: fallback.src, kind: fallback.label };
}

/** Imagen principal de la card: prioriza el logo de marca, si existe. */
export function getCardThumbnail(project: Project): CardThumbnail {
  if (project.logo) return { src: project.logo, kind: "logo" };
  return getScreenshotThumbnail(project);
}

/** Usado cuando el logo falla al cargar (`<img onError>`), ignora `project.logo`. */
export function getFallbackThumbnail(project: Project): CardThumbnail {
  return getScreenshotThumbnail(project);
}
