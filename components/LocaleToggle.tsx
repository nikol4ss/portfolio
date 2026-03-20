"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "pt" ? "en" : "pt";
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all text-xs font-medium text-muted-foreground hover:text-foreground"
    >
      {locale === "pt" ? "EN" : "PT"}
    </button>
  );
}
