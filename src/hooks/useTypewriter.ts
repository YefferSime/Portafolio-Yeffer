"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  texts: string[],
  speed = 120,
  delay = 2000
) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false); // 👈 controla pausas reales

  useEffect(() => {
    const current = texts[index];

    // ✨ velocidad natural
    const typingSpeed = speed + Math.random() * 40;
    const deletingSpeed = speed * 0.8;

    // ⛔ si está en pausa, no hace nada
    if (pause) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);

        // terminó de escribir → pausa
        if (next === current) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, delay);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);

        // terminó de borrar → siguiente palabra
        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, texts, speed, delay, pause]);

  return displayed;
}