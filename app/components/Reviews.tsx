"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "It's a multi products company with high quality material. Price range is very genuine as comparison to market, and their dealing is very nice.",
    name: "Parveen Choudhary",
  },
  {
    quote: "Best pipe in Jammu, all pipe available in this company.",
    name: "Kartik Nathyal",
  },
  {
    quote: "Best pipes in all J&K.",
    name: "Sanju Sharma",
  },
  {
    quote: "Solid pipe manufacturing.",
    name: "Vikas Rajput",
  },
  {
    quote: "Best quality PVC pipes.",
    name: "\u0938\u0928\u0915 \u0936\u094d\u0930\u0940\u0935\u0924\u094d\u0938",
  },
  {
    quote: "No. 1 pipe in Jammu.",
    name: "Rahul Kumar",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-marigold mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            18 reviews, 4.9 stars, one theme
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4 leading-relaxed">
            Unedited reviews from Google, from builders and buyers across
            Jammu and Kashmir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-charcoal/8 p-7"
            >
              <Stars />
              <blockquote className="text-charcoal text-[15px] leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="text-slate font-semibold text-sm mt-5">
                &mdash; {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
