"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const skills = [
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "Fastify", slug: "fastify", color: "currentColor", darkIcon: true },
  { name: "AdonisJS", slug: "adonisjs", color: "#5A45FF" },
  { name: "Django", slug: "django", color: "#115b3f" },
  { name: "FastAPI", slug: "fastapi", color: "#009688" },
  { name: "Postman", slug: "postman", color: "#FF6C37" },
  { name: "Vue.js", slug: "vuedotjs", color: "#4FC08D" },
  { name: "Vite", slug: "vite", color: "#646CFF" },
  { name: "Pinia", slug: "pinia", color: "#FFD859" },
  { name: "Axios", slug: "axios", color: "#5A29E4" },
  { name: "TanStack", slug: "tanstack", color: "currentColor", darkIcon: true },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
  {
    name: "shadcn/ui",
    slug: "shadcnui",
    color: "currentColor",
    darkIcon: true,
  },
  { name: "PrimeVue", slug: "primevue", color: "#41B883" },
  { name: "Prisma", slug: "prisma", color: "currentColor", darkIcon: true },
  { name: "Redis", slug: "redis", color: "#FF4438" },
  { name: "RabbitMQ", slug: "rabbitmq", color: "#FF6600" },
  { name: "Zod", slug: "zod", color: "#3E67B1" },
  { name: "Jest", slug: "jest", color: "#C21325" },
  { name: "Pytest", slug: "pytest", color: "#0A9EDC" },
  { name: "Selenium", slug: "selenium", color: "#43B02A" },
  { name: "Pandas", slug: "pandas", color: "#150458" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "YAML", slug: "yaml", color: "#CB171E" },
  { name: "Terraform", slug: "terraform", color: "#844FBA" },
  { name: "GitHub Actions", slug: "githubactions", color: "#2088FF" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "GitHub", slug: "github", color: "currentColor", darkIcon: true },
];

export function Skills() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let i = 0;

    const next = () => {
      setActiveIndex(null);
      setTimeout(() => {
        setActiveIndex(i);
        i = (i + 1) % skills.length;
      }, 500);
    };

    next();
    const interval = setInterval(next, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Tecnologias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Stack que eu <span className="text-muted-foreground">domino</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const isHighlighted = isActive || isHovered;

            return (
              <div
                key={skill.slug}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  borderColor: isHighlighted ? skill.color : undefined,
                  transition: [
                    "border-color 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    "background-color 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                  ].join(", "),
                }}
                className={`relative aspect-square rounded-xl border flex items-center justify-center cursor-pointer ${
                  isHighlighted ? "bg-card" : "bg-card/50 border-border"
                }`}
              >
                <img
                  src={`https://cdn.simpleicons.org/${skill.slug}`}
                  alt={skill.name}
                  width={28}
                  height={28}
                  style={{
                    transform: isHighlighted ? "scale(1.5)" : "scale(1)",
                    transition: [
                      "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                      "filter 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    ].join(", "),
                    filter: isHighlighted
                      ? skill.darkIcon
                        ? isDark
                          ? "brightness(0) invert(1)"
                          : "brightness(0)"
                        : "none"
                      : isDark
                        ? "brightness(0) invert(1)"
                        : "brightness(0)",
                  }}
                />

                <div
                  style={{
                    transition: "opacity 200ms ease",
                    opacity: isHovered ? 1 : 0,
                  }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap pointer-events-none z-10"
                >
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sempre me adaptando às novas tecnologias do mercado.
          </p>
          <p className="max-w-xl mx-auto">Aprendendo o que o desafio exigir.</p>
        </div>
      </div>
    </section>
  );
}
