"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-marigold relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-7">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-charcoal font-bold text-2xl sm:text-3xl text-center sm:text-left leading-tight"
        >
          Need a size we haven&rsquo;t mentioned?
          <br className="hidden sm:block" /> Just call and ask.
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="tel:08082512513"
          className="inline-flex items-center gap-3 bg-charcoal hover:bg-charcoal-deep text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shrink-0"
        >
          <Phone size={20} strokeWidth={2.5} />
          080825 12513
        </motion.a>
      </div>
    </section>
  );
}
