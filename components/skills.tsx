"use client";

const skills = [
  // ── Linguagens
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "PHP", slug: "php" },

  // ── Backend
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Fastify", slug: "fastify" },
  { name: "AdonisJS", slug: "adonisjs" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Django", slug: "django" },

  // ── Frontend
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Vite", slug: "vite" },
  { name: "Pinia", slug: "pinia" },
  { name: "Axios", slug: "axios" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "shadcn/ui", slug: "shadcnui" },
  { name: "PrimeVue", slug: "primevue" },

  // ── Banco de Dados
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Prisma", slug: "prisma" },
  { name: "Redis", slug: "redis" },
  { name: "RabbitMQ", slug: "rabbitmq" },

  // ── Testes & Qualidade
  { name: "Zod", slug: "zod" },
  { name: "Jest", slug: "jest" },
  { name: "Pytest", slug: "pytest" },
  { name: "Selenium", slug: "selenium" },
  { name: "Pandas", slug: "pandas" },

  // ── Infra / DevOps
  { name: "Docker", slug: "docker" },
  { name: "YAML", slug: "yaml" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Terraform", slug: "terraform" },
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
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}`}
                alt={skill.name}
                width={28}
                height={28}
                className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 group-hover:scale-140"
              />

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
            Foco em ferramentas que entregam resultados reais.
          </p>
        </div>
      </div>
    </section>
  );
}
