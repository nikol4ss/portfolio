"use client";

const skills = [
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },

  { name: "Node.js", slug: "nodedotjs" },
  { name: "Fastify", slug: "fastify", darkIcon: true },
  { name: "AdonisJS", slug: "adonisjs" },
  { name: "Django", slug: "django" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Postman", slug: "postman" },

  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Vite", slug: "vite" },
  { name: "Pinia", slug: "pinia" },
  { name: "Axios", slug: "axios" },
  { name: "TanStack", slug: "tanstack", darkIcon: true },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "shadcn/ui", slug: "shadcnui", darkIcon: true },
  { name: "PrimeVue", slug: "primevue" },

  { name: "Prisma", slug: "prisma", darkIcon: true },
  { name: "Redis", slug: "redis" },
  { name: "RabbitMQ", slug: "rabbitmq" },
  { name: "Zod", slug: "zod" },
  { name: "Jest", slug: "jest" },
  { name: "Pytest", slug: "pytest" },
  { name: "Selenium", slug: "selenium" },
  { name: "Pandas", slug: "pandas" },

  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Docker", slug: "docker" },
  { name: "YAML", slug: "yaml" },
  { name: "Terraform", slug: "terraform" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github", darkIcon: true },
];

export function Skills() {
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
          {skills.map((skill, index) => (
            <div
              key={skill.slug}
              className="group relative aspect-square rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}`}
                alt={skill.name}
                width={28}
                height={28}
                className={
                  skill.darkIcon
                    ? "brightness-0 invert transition-all duration-300 group-hover:scale-140"
                    : "brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 group-hover:scale-140"
                }
              />

              {/* fastify, tanstack, shadcn, github  */}

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sempre aprendendo e me adaptando às novas tecnologias do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
