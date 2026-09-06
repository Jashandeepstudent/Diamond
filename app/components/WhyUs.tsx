"use client";

import { motion } from "framer-motion";
import { Gem, HandCoins, Users } from "lucide-react";

const points = [
  {
    icon: Gem,
    title: "High-quality material",
    body: "Customers describe the material quality directly, unprompted — it's the first thing mentioned in our most detailed review.",
  },
  {
    icon: HandCoins,
    title: "Genuine pricing",
    body: "Priced fairly against what the wider Jammu market charges, without cutting corners on the pipe itself.",
  },
  {
    icon: Users,
    title: "Straightforward dealing",
    body: "No back-and-forth, no surprises at collection — reviewers specifically call out how simple the process is.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-offwhite font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            Why builders keep coming back
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {points.map((pt, i) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-charcoal p-8 sm:p-10"
            >
              <pt.icon size={30} strokeWidth={1.75} className="text-marigold" />
              <h3 className="text-offwhite font-bold text-xl mt-6 mb-3">
                {pt.title}
              </h3>
              <p className="text-slate-light text-[15px] leading-relaxed">
                {pt.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
