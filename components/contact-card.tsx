"use client";

import { Send } from "lucide-react";
import { primaryContactLink, socialLinks } from "@/lib/social-links";

export default function ContactCard() {
  return (
    <div
      className="mx-auto grid max-w-4xl gap-4 rounded-xl border border-slate-200 bg-slate-100/80 p-5 text-slate-900/90
        transition-all duration-500 hover:border-slate-300 hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-300/10
        dark:border-white/10 dark:bg-white/5 dark:text-gray-300/90 dark:hover:border-white/20 dark:hover:bg-white/[0.07]
        dark:hover:shadow-black/20 sm:p-6 lg:grid-cols-[1fr_1.4fr] lg:p-8"
    >
      <div className="flex flex-col justify-between gap-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-gray-500">
            Available for work
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-800 dark:text-gray-100">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-gray-400 sm:text-base">
            Send the context, goals, and constraints. I usually respond with
            next steps, risks, and a practical path to ship.
          </p>
        </div>

        <a
          href={primaryContactLink.href}
          className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-200 dark:border-white/10 dark:bg-black/20 dark:text-gray-200 dark:hover:border-white/20 dark:hover:bg-white/10"
        >
          Send email
          <Send size={16} />
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {socialLinks.map(({ label, value, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex min-h-24 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-white/10"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-500 transition-colors group-hover:text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:group-hover:text-gray-100">
              <Icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-slate-400 dark:text-gray-500">
                {label}
              </span>
              <span className="block truncate text-sm font-semibold text-slate-700 dark:text-gray-200">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
