"use client";

import { Star } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="bg-charcoal-deep py-10">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 text-marigold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-offwhite font-bold text-sm">4.9</span>
          <span className="text-slate-light text-sm">on Google (18 reviews)</span>
        </div>
        <div className="h-4 w-px bg-white/15 hidden sm:block" />
        <span className="text-slate-light text-sm">
          Open Monday to Saturday, Sidco, Bari Brahmana
        </span>
      </div>
    </section>
  );
}
