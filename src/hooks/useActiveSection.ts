"use client";
import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const container = document.querySelector(".center-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActiveId(best.target.id);
      },
      {
        root: container,
        // Trigger when section occupies the central band of the viewport
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
}
