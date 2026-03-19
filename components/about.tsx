"use client";

interface WorkCard {
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  techs: string[];
}

const works: WorkCard[] = [
  {
    company: "V4 Company",
    role: "Full Stack Developer",
    type: "PJ",
    period: "mai de 2025 - dez de 2025 · 8 meses",
    highlights: [
      "Contribuí no desenvolvimento de um SaaS multi-tenant em Node.js/TypeScript e Vue.js, atendendo +100 usuários com cacheamento em Redis.",
      "Refatorei API legada de Node.js (JavaScript) para REST com Fastify (TypeScript) + Zod + Prisma ORM, reduzindo ~80% dos erros de validação e timeouts.",
      "Mantive sistema corporativo legado em PHP 7/NGINX, eliminando gargalos e melhorando a lógica do core em produção.",
      "Implementei ingestão de dados com Python (Pandas, SQLAlchemy) para integração em MySQL, garantindo consistência e eliminando duplicatas.",
    ],
    techs: [
      "Fastify",
      "TypeScript",
      "Node.js",
      "Vue.js",
      "Zod",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "PHP",
      "MySQL",
      "Python",
    ],
  },
  {
    company: "Capsul Brasil",
    role: "Full Stack Developer",
    type: "Tempo integral",
    period: "jun de 2024 - mai de 2025 · 1 ano",
    highlights: [
      "Participei da migração do sistema logístico core de Python/FastAPI para Node.js/Fastify, corrigindo falhas de requisição que causavam perda de pedidos.",
      "Integrei plataformas de venda e transportadoras como Correios e Monetizze via APIs e Webhooks, mapeando payloads para consumo e despacho de pedidos.",
      "Desenvolvi sistema interno de tickets com Node.js/Vue.js/MongoDB e mensageria via RabbitMQ, centralizando comunicação entre dev e suporte.",
      "Automatizei testes e processos operacionais com Python (Selenium, Pytest) em loop 24/7 para validação de formulários de checkout.",
      "Implementei pipelines CI/CD com GitHub Actions e Docker Compose, deployando via SSH em Linux com Terraform para infraestrutura AWS.",
    ],
    techs: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "Vue.js",
      "MongoDB",
      "RabbitMQ",
      "Python",
      "Selenium",
      "Pytest",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "AWS",
    ],
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
            <h2 className="text-3xl md:text-3xl font-bold mb-4 text-balance">
              Saudações,
              <br />
              <span className="text-muted-foreground">
                há 3 anos construindo produtos que escalam.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Especializado em backend com Node.js e TypeScript, construo e
                mantenho APIs RESTful com Fastify e AdonisJS — focado em
                arquitetura modular, validação robusta com Zod e performance em
                produção.
              </p>
              <p>
                Na camada de dados, trabalho com PostgreSQL, MySQL e MongoDB,
                usando Prisma e Lucid como ORMs. Aplico Redis para cacheamento e
                RabbitMQ para mensageria em sistemas distribuídos.
              </p>
              <p>
                No frontend, desenvolvo interfaces reativas com Vue.js — domínio
                em Vue Router, Pinia, TanStack Query e Tailwind CSS, com
                experiência em SPAs, SSR e SSG com foco em performance e SEO.
              </p>
              <p>
                Containerizo ambientes com Docker e Docker Compose, automatizo
                pipelines CI/CD com GitHub Actions, escrevo testes com Jest e
                Pytest, e provisiono infraestrutura na AWS com EC2 e Terraform.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <span className="text-3xl font-bold text-foreground">3+</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Anos de experiência
                </p>
              </div>
              <div>
                <span className="text-3xl font-bold text-foreground">15+</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Projetos entregues
                </p>
              </div>
              <div>
                <span className="text-3xl font-bold text-foreground">20+</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Clientes satisfeitos
                </p>
              </div>
            </div>
          </div>

          {/* Cards de Trabalhos */}
          <div>
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
                    <h4 className="font-bold text-foreground">
                      {work.role}{" "}
                      <span className="text-sm text-muted-foreground">
                        {work.company} · {work.type}
                      </span>
                    </h4>
                  </div>

                  <div className="text-sm mb-2">{work.period}</div>

                  <ul className="text-sm text-muted-foreground mb-3 space-y-1 list-none">
                    {work.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/50" />
                        {item}
                      </li>
                    ))}
                  </ul>

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
