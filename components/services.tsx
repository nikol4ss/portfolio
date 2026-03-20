"use client";

import { Code, Cpu, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "APIs & Backend",
    description:
      "Desenvolvimento e manutenção de APIs RESTful em Node.js com TypeScript. Do contrato da rota à integração com banco, cache e mensageria — entrego backend pronto pra produção.",
    features: [
      "APIs RESTful",
      "Autenticação JWT/OAuth",
      "Integrações via Webhook",
      "Documentação",
    ],
  },
  {
    icon: Cpu,
    title: "SaaS & Produtos Web",
    description:
      "Construção de produtos SaaS com arquitetura multi-tenant, painel administrativo e frontend em Vue.js. Do MVP ao deploy com Docker e AWS.",
    features: [
      "Multi-tenant",
      "MVP em Node.js + Vue.js",
      "Deploy em AWS",
      "CI/CD automatizado",
    ],
  },
  {
    icon: Zap,
    title: "Automações & Integrações",
    description:
      "Automação de processos operacionais com Python e integração entre plataformas via APIs e Webhooks. Redução de trabalho manual e consistência de dados.",
    features: [
      "Web Scraping",
      "Ingestão de dados",
      "Integração entre sistemas",
      "Bots 24/7",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            O que eu <span className="text-muted-foreground">faço</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
