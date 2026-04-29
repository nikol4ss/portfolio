"use client";

import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  const works = [
    {
      company: "V4 Company",
      role: "Backend Developer",
      type: t("v4_type"),
      period: t("v4_period"),
      highlights: [t("v4_h1"), t("v4_h2"), t("v4_h3"), t("v4_h4")],
    },
    {
      company: "Capsul Brasil",
      role: "Fullstack Developer Junior",
      type: t("capsul_type"),
      period: t("capsul_period"),
      highlights: [
        t("capsul_h1"),
        t("capsul_h2"),
        t("capsul_h3"),
        t("capsul_h4"),
        t("capsul_h5"),
      ],
    },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              {t("section_label")}
            </span>
            <h2 className="text-3xl md:text-3xl font-bold mb-4 text-balance">
              {t("greeting")}
              <br />
              <span className="text-muted-foreground">{t("greeting_sub")}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p5")}</p>
            </div>

            <div className="mt-5 pt-5 border-t border-border">
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                {t("status_label")}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-foreground">
                    {t("status_title")}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse shrink-0" />
                    <p className="text-muted-foreground">{t("status_sub")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              {t("experience_label")}
            </span>

            <div className="flex flex-col gap-4">
              {works.map((work, index) => (
                <div
                  key={index}
                  className="flex flex-col p-3 pb-0 hover:shadow-md transition-shadow rounded-md border bg-transparent border-border/50 bg-white/5 backdrop-blur-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                    <h4 className="flex-1 font-bold text-foreground leading-tight">
                      {work.role}{" "}
                      <span className="text-base text-muted-foreground font-normal">
                        {work.company}
                      </span>
                    </h4>

                    <span className="text-sm text-muted-foreground sm:text-right">
                      {work.period}
                    </span>
                  </div>

                  <ul className="text-sm text-muted-foreground mb-3 space-y-1 list-none">
                    {work.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-muted-foreground/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
