"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            {"<Dev />"}
          </Link>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <span className="text-foreground">♥</span>
            <span>e muito café</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
