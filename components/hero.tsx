"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full blur-[120px] animate-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Disponível para Prestação de Serviços
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Desenvolvedor
            <br />
            <span className="text-muted-foreground">Full Stack</span>
          </h1>

          <p className="text-lg md:text-1xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            Focado em Backend, com ênfase na construção de APIs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90"
            >
              <Link href="#contato">Fale Comigo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent"
            >
              <Link href="#projetos">Ver Projetos</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/nikol4s/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://github.com/nikol4ss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a // TODO: anexar o curriculo de fato para download, e tbm criar logica para se estiver ingles trocar arquivo para ingles
              href="/curriculo.pdf"
              download
              className="p-3 rounded-full border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group"
              aria-label="Download Currículo"
            >
              <FileDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-90] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
