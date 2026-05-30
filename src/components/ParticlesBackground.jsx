import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },

          fpsLimit: 60,

          particles: {
            number: {
              value: 50,
            },

            color: {
              value: "#22c55e",
            },

            links: {
              enable: true,
              color: "#22c55e",
              distance: 150,
              opacity: 0.2,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
            },

            opacity: {
              value: 0.3,
            },

            size: {
              value: { min: 1, max: 3 },
            },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
}
