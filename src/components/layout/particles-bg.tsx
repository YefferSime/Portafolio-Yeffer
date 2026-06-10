"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 120,
      particles: {
        number: {
          value:40,
          density: { enable: true },
        },
        color: { value: "#575551" },
        links: {
          enable: true,
          distance: 10,
          color: "#7f1d1d",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        opacity: { value: 1 },
        size: {
          value: { min: 3, max: 5 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.85,
            },
          },
          push: {
            quantity: 3,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-auto fixed inset-0 z-0"
      options={options}
    />
  );
}