"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown, Github, Linkedin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const curriculoUrl =
    locale === "en"
      ? "https://docs.google.com/document/d/1_LhFSGgUDR3y-oZP6p7rHMRczpj63JeMQq3-Z4ol4RU/export?format=pdf"
      : "https://docs.google.com/document/d/1ZvTUC2MTjI8vln9EgnIQebdnCq_NnujG52sOTFLpiqc/export?format=pdf";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#88888814_1px,transparent_1px),linear-gradient(to_bottom,#88888814_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] dark:bg-white/5 bg-black-300/70" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              {t("available")}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            {t("title")}
            <br />
            <span className="text-muted-foreground">{t("subtitle")}</span>
          </h1>

          <p className="text-lg md:text-1xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90"
            >
              <Link href="#contato">{t("cta_contact")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent"
            >
              <Link href="#projetos">{t("cta_projects")}</Link>
            </Button>
          </div>

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
            <a
              href={curriculoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group"
            >
              <FileDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
