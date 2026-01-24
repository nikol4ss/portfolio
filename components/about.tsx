"use client";

interface WorkCard {
  company: string;
  role: string;
  type: string;
  period: string;
  description: string;
  techs: string[];
}

const works: WorkCard[] = [
    {
    company: "NK Software",
    role: "Full Stack Developer",
    type: "Freelance",
    period: "jan de 2025 - Ativo",

    description:
      "Criei uma Software house que atua como prestadora de serviços, desenvolvendo softwares sob medida para otimizar processos e aumentar capital.",
    techs: ["TypeScript", "Node.js", "Fastfy", "Vue.js", "Python", "FastAPI", "Django", "AWS"],
  },

  {
    company: "V4 Company",
    role: "Full Stack Developer Pleno",
    type: "Autônomo",
    period: "mai de 2025 - dez de 2025 · 8 meses",

    description:
      "Trabalhei desenvolvendo e mantendo sistemas, gerenciando QA, e code reviews, além de estruturar projetos usando Kanban. Também liderei projetos voltadas a clientes de alto faturamento e orientei desenvolvedores menos experientes.",
    techs: ["Fastfy", "Zod", "Shadcn", "Axios", "TypeScript", "PHP", "Vue", "MySQL", "Kanban"],
  },
  {
    company: "Grupo Capsul",
    role: "Full Stack Developer Junior",
    type: "Tempo integral",
    period: "jun de 2024 - mai de 2025 · 1 ano",

    description:
      "Na Capsul Brasil, atuei na manutenção contínua de sistemas em produção, realizando bugfixes e hotfixes, migração de sistemas legados para arquitetura SaaS e implementação de novas features via Scrum. Também desenvolvi sistema interno de tickets, automatizei processos com RPA, integrei sistemas logísticos com APIs externas e realizei monitoramento e testes para detecção de falhas em tempo real.",
    techs: ["Vue", "Node.js", "TypeScript", "Tailwind", "RPA", "Python", "Selenium", "Scrum"],
  },

];

export function About() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Sobre mim */}
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Construindo o futuro,
              <br />
              <span className="text-muted-foreground">uma linha de código por vez</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Minha carreira começou há quatro anos, profissionalizando-me como desenvolvedor Fullstack.
                Trabalhei em diversos projetos, atuando em todo o ciclo de desenvolvimento (SDLC),
                aprimorando minha visão sobre regras de negócio e desenvolvendo habilidades técnicas.
              </p>
              <p>
                Atualmente, trabalho em projetos criando e debugando soluções que operam
                em ambientes reais de forma contínua. Também busco oportunidades empresariais,
                oferecendo meus serviços como prestador.
              </p>
              <p>
                Quando não estou codando, estudo novas formas de aplicar lógica e resolver problemas,
                contribuo para projetos open source e planejo meus próximos passos profissionais.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <span className="text-3xl font-bold text-foreground">4+</span>
                <p className="text-sm text-muted-foreground mt-1">Anos de experiência</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-foreground">15+</span>
                <p className="text-sm text-muted-foreground mt-1">Projetos entregues</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-foreground">20+</span>
                <p className="text-sm text-muted-foreground mt-1">Clientes satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Cards de Trabalhos */}
          <div>
            {/* Título Experiências */}
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              Experiências
            </span>

            <div className="flex flex-col gap-4">
              {works.map((work, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-border rounded-sm p-3 bg-card/80 hover:shadow-md transition-shadow"
                >
                  <div>
                    <h4 className="font-bold text-foreground">{work.role} <span className="text-sm text-muted-foreground">{work.company} · {work.type}</span></h4>
                  </div>

                  <div className="text-sm mb-1">{work.period}</div>

                  <p className="text-sm text-muted-foreground mb-2">{work.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {work.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-muted-foreground/10 text-muted-foreground text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
