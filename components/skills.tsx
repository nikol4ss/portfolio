"use client";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "⎇" },
  { name: "Tailwind", icon: "💨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "⚡" },
  { name: "GraphQL", icon: "◈" },
  { name: "REST API", icon: "🔗" },
  { name: "CI/CD", icon: "🔄" },
  { name: "Linux", icon: "🐧" },
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

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative aspect-square rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
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
