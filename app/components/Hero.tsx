"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative bg-charcoal overflow-hidden min-h-screen flex items-center">
      <Image
        src="/images/pipe-stack.jpeg"
        alt="Stacked PVC pipes at Diamond Manufacturing Industry, Bari Brahmana, Jammu"
        fill
        priority
        className="object-cover opacity-[0.28]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/80 to-charcoal" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-28 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-offwhite font-bold text-[2.3rem] leading-[1.12] sm:text-5xl sm:leading-[1.1] lg:text-[3.3rem] lg:leading-[1.08] tracking-tight max-w-3xl mx-auto"
        >
          Every pipe you need, made to the same standard, every time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-light text-base sm:text-lg mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Diamond Manufacturing Industry produces PVC pipes and fittings
          from our unit in Sidco, Bari Brahmana &mdash; a full product range,
          consistent quality, priced fairly against the market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-9"
        >
          <a
            href="tel:08082512513"
            className="group inline-flex items-center gap-2 bg-rope-green hover:bg-rope-green-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors"
          >
            <Phone size={18} strokeWidth={2.5} />
            Call 080825 12513
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 border-2 border-offwhite/25 hover:border-marigold text-offwhite font-semibold px-7 py-3.5 rounded-full transition-colors"
          >
            See Our Products
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
