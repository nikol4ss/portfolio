"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors"
          >
            {"<nk />"}
          </Link>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
