"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Download, Github, Linkedin, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export function ContactForm() {
  const t = useTranslations("contact");

  const serviceOptions = [
    { value: "freelance", label: t("opt_freelance") },
    { value: "saas", label: t("opt_saas") },
    { value: "rpa", label: t("opt_rpa") },
    { value: "consulting", label: t("opt_consulting") },
    { value: "other", label: t("opt_other") },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t("title")}{" "}
            <span className="text-muted-foreground">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("name")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("name_placeholder")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-card border-border focus:border-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-card border-border focus:border-foreground/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t("phone")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-card border-border focus:border-foreground/50"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <label htmlFor="service" className="text-sm font-medium">
                    {t("project_type")}
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="w-full bg-card border-border focus:border-foreground/50">
                      <SelectValue placeholder={t("select_placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("message_placeholder")}
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-card border-border focus:border-foreground/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {t("sent")}
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="w-4 h-4 mr-2 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    {t("sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t("send")}
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold mb-6">{t("connect")}</h3>

            <a
              href="https://www.linkedin.com/in/nikol4s/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-foreground transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
              </div>
              <div>
                <span className="font-medium block">LinkedIn</span>
                <span className="text-sm text-muted-foreground">
                  /in/nikol4s
                </span>
              </div>
            </a>

            <a
              href="https://github.com/nikol4ss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-foreground transition-colors">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
              </div>
              <div>
                <span className="font-medium block">GitHub</span>
                <span className="text-sm text-muted-foreground">@nikol4ss</span>
              </div>
            </a>

            <a
              href="https://docs.google.com/document/d/1ZvTUC2MTjI8vln9EgnIQebdnCq_NnujG52sOTFLpiqc/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-foreground transition-colors">
                <Download className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
              </div>
              <div>
                <span className="font-medium block">{t("resume")}</span>
                <span className="text-sm text-muted-foreground">
                  {t("resume_sub")}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
