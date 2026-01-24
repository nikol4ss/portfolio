"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, GitFork, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "saas-dashboard",
    description: "Dashboard completo para SaaS com autenticação, pagamentos Stripe e analytics em tempo real.",
    language: "TypeScript",
    stars: 128,
    forks: 24,
    url: "https://github.com",
    demo: "https://demo.com",
    tags: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    name: "rpa-automation-bot",
    description: "Bot de automação para scraping de dados e integração com APIs externas.",
    language: "Python",
    stars: 89,
    forks: 15,
    url: "https://github.com",
    tags: ["Python", "Selenium", "API"],
  },
  {
    name: "e-commerce-platform",
    description: "Plataforma de e-commerce completa com carrinho, checkout e painel admin.",
    language: "TypeScript",
    stars: 256,
    forks: 42,
    url: "https://github.com",
    demo: "https://demo.com",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "ai-chatbot-assistant",
    description: "Assistente virtual com IA para atendimento ao cliente e suporte automatizado.",
    language: "Python",
    stars: 67,
    forks: 8,
    url: "https://github.com",
    tags: ["Python", "OpenAI", "FastAPI"],
  },
  {
    name: "inventory-management",
    description: "Sistema de gestão de estoque com relatórios, alertas e integração ERP.",
    language: "TypeScript",
    stars: 45,
    forks: 12,
    url: "https://github.com",
    demo: "https://demo.com",
    tags: ["Next.js", "Prisma", "tRPC"],
  },
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Projetos em <span className="text-muted-foreground">destaque</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="min-w-[320px] md:min-w-[380px] p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 snap-start group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Github className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {project.language}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {project.forks}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Código
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Ver todos os projetos no GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
