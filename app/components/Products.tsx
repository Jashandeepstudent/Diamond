"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "PVC Pipes — full size range",
    body: "Reviewers across Jammu and J&K call this out directly: every diameter you're likely to need is in stock, not a narrow slice of it.",
    image: "/images/pipe-stack.jpeg",
    alt: "Stacked PVC pipes of varying diameters at Diamond Manufacturing Industry",
  },
  {
    title: "Pipe rope & strapping",
    body: "Coiled binding rope in multiple colourways, wound tight and consistent coil to coil.",
    image: "/images/coiled-rope.jpeg",
    alt: "Coiled green and yellow pipe rope, labelled Best Quality",
  },
  {
    title: "Packaged & ready to move",
    body: "Product leaves the unit boxed and strapped, so what arrives on your site is what left our floor.",
    image: "/images/packaged-product.jpeg",
    alt: "Diamond Manufacturing packaged product cartons, strapped for dispatch",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            A multi-product company, in the words of the people who buy from us
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4 leading-relaxed">
            &ldquo;Multi products,&rdquo; &ldquo;all pipe available&rdquo;
            &mdash; that&rsquo;s not our tagline, it&rsquo;s what customers
            keep telling Google. Here&rsquo;s what that actually looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bore-ring mb-5">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="text-charcoal font-bold text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-slate text-[15px] leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
