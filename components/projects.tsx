"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    name: "Multi-Gateway Payment API",
    description:
      "API de pagamentos multi-gateway com fallback automático, roles de acesso e reembolso por gateway de origem.",
    language: "TypeScript",
    stars: 2,
    url: "https://github.com/nikol4ss/multi-gateway-payment-api",
    demo: "https://www.postman.com/nikol4ss/api-public/collection/43306273-9c441f93-f912-4330-b209-194eb24bb151?action=share&source=copy-link&creator=43306273",
    tags: ["Node.js", "AdonisJs", "MySQL", "Docker"],
  },
  {
    name: "Web-Scraper API",
    description:
      "Microsserviço de monitoramento de preços com scraping dinâmico via Selenium, processamento com Pandas e endpoints REST para histórico e média de preços.",
    language: "Python",
    stars: 2,
    url: "https://github.com/nikol4ss/web-scraper-api",
    tags: ["Python", "Selenium", "API"],
  },
  {
    name: "Doom PDF",
    description:
      "Port do Doom rodando dentro de um PDF via JavaScript, C compilado com Emscripten para asm.js, renderizado em ASCII via campos de texto.",
    language: "Python",
    stars: 8,
    url: "https://github.com/nikol4ss/doompdf",
    demo: "https://doompdf.pages.dev/doom.pdf",
    tags: ["Python", "Selenium", "API"],
  },
  {
    name: "NXT Lego Python",
    description:
      "Automação robótica em Python controlando motores e sensores LEGO NXT para movimentação programável.",
    language: "Python",
    stars: 0,
    url: "https://github.com/nikol4ss/nxt-lego",
    tags: ["Python", "Selenium", "API"],
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
              Projetos em{" "}
              <span className="text-muted-foreground">destaque</span>
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
            href="https://github.com/nikol4ss?tab=repositories"
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
