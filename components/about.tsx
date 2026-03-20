"use client";

interface WorkCard {
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  techs: string[];
  logo: string;
}

const works: WorkCard[] = [
  {
    company: "V4 Company",
    role: "Full Stack Developer",
    type: "Remota",
    period: "mai de 2025 - dez de 2025 · 8 meses",
    logo: "/v4.jpeg",
    highlights: [
      "Contribuí no desenvolvimento de um SaaS multi-tenant em Node.js/TypeScript e Vue.js, atendendo +100 usuários com cacheamento em Redis.",
      "Refatorei API legada de Node.js (JavaScript) para REST com Fastify (TypeScript) + Zod + Prisma ORM, reduzindo ~80% dos erros de validação e timeouts.",
      "Mantive sistema corporativo legado em PHP 7/NGINX, eliminando gargalos e melhorando a lógica do core em produção.",
      "Implementei ingestão de dados com Python (Pandas, SQLAlchemy) para integração em MySQL, garantindo consistência e eliminando duplicatas.",
    ],
    techs: [
      "TypeScript",
      "Python",
      "PHP",
      "Node.js",
      "Fastify",
      "Zod",
      "Vue.js",
      "Axios",
      "TanStack",
      "Shadcn",
      "MySQL",
      "Prisma",
      "Redis",
      "Git",
      "GitHub",
      "Jest",
      "Docker",
      "Kanban",
    ],
  },
  {
    company: "Capsul Brasil",
    role: "Full Stack Developer",
    type: "Presencial",
    period: "jun de 2024 - mai de 2025 · 1 ano",
    logo: "/capsul.jpeg",
    highlights: [
      "Participei da migração do sistema logístico core de Python/FastAPI para Node.js/Fastify, corrigindo falhas de requisição que causavam perda de pedidos.",
      "Integrei plataformas de venda e transportadoras como Correios e Monetizze via APIs e Webhooks, mapeando payloads para consumo e despacho de pedidos.",
      "Desenvolvi sistema interno de tickets com Aeria Lang (Node.js/Vue.js/MongoDB) e mensageria via RabbitMQ, centralizando comunicação entre dev e suporte.",
      "Automatizei testes e processos operacionais com Python (Selenium, Pytest) em loop 24/7 para validação de formulários de checkout.",
      "Implementei pipelines CI/CD com GitHub Actions e Docker Compose, deployando via SSH em Linux com Terraform para infraestrutura AWS.",
    ],
    techs: [
      "TypeScript",
      "Python",
      "Node.js",
      "FastApi",
      "Fastify",
      "Vue.js",
      "TanStack",
      "MongoDB",
      "RabbitMQ",
      "Selenium",
      "Pytest",
      "Jest",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "AWS",
    ],
  },
];

const dailyTechs = [
  { name: "TypeScript", slug: "typescript", darkIcon: false },
  { name: "Node.js", slug: "nodedotjs", darkIcon: false },
  { name: "Fastify", slug: "fastify", darkIcon: true },
  { name: "PostgreSQL", slug: "vuedotjs", darkIcon: false },
  { name: "PostgreSQL", slug: "postgresql", darkIcon: false },
  { name: "Docker", slug: "docker", darkIcon: false },
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
                iniciei minha carreira há três anos.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>
                Construo e mantenho APIs RESTful assíncronas em Node.js com
                TypeScript. Fastify para arquitetura modular e customizada,
                AdonisJS para aplicações distribuídas e integradas. Autenticação
                com JWT e OAuth, segurança com CORS, CSRF e Rate Limiting,
                validação de contratos com Zod e serialização robusta.
              </p>
              <p>
                Na camada de dados, trabalho em SQL e NoSQL com PostgreSQL,
                MySQL e MongoDB com Prisma ORM, migrations e seeds. Redis para
                cacheamento e RabbitMQ para mensageria.
              </p>
              <p>
                Interfaces reutilizáveis em Vue.js com Vue Router, Pinia para
                estado, TanStack Query para dados assíncronos e Tailwind CSS com
                libs de componentes de Shadcn e PrimeVue. Experiência em SPA,
                SSR e SSG com foco em performance e SEO.
              </p>
              <p>
                Ambientes containerizados com Docker e Docker Compose, pipelines
                CI/CD com GitHub Actions, testes unitários e de integração com
                Jest e infraestrutura na AWS com EC2 e Terraform.
              </p>
            </div>

            {/* Status */}
            <div className="mt-5 pt-5 border-t border-border">
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                Trabalho Atual
              </span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-foreground">
                    Desenvolvendo freelas e projetos pessoais.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse shrink-0" />
                    <p className="text-muted-foreground">
                      Buscando oportunidades como Desenvolvedor Fullstack ou
                      Backend.
                    </p>
                  </div>
                </div>
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
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-muted-foreground/50" />
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
