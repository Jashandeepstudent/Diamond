"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const hours = [
  { day: "Monday \u2013 Friday", time: "7:00 AM \u2013 10:00 PM" },
  { day: "Saturday", time: "8:00 AM \u2013 9:30 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactLocation() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-2xl mb-16">
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            Visit the unit
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4 leading-relaxed">
            Near R.S. Cryogenic, Sidco Industrial Area, Bari Brahmana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone size={22} className="text-marigold shrink-0 mt-0.5" />
                <div>
                  <p className="text-charcoal font-bold">Phone</p>
                  <a
                    href="tel:08082512513"
                    className="text-slate hover:text-rope-green transition-colors"
                  >
                    080825 12513
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin size={22} className="text-marigold shrink-0 mt-0.5" />
                <div>
                  <p className="text-charcoal font-bold">Address</p>
                  <p className="text-slate leading-relaxed">
                    4 No, near R.S. Cryogenic, Sidco, Bari Brahmana, Jammu,
                    Jammu and Kashmir 181133
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={22} className="text-marigold shrink-0 mt-0.5" />
                <div>
                  <p className="text-charcoal font-bold mb-1">Hours</p>
                  <ul className="text-slate leading-relaxed space-y-0.5">
                    {hours.map((h) => (
                      <li key={h.day} className="flex gap-3">
                        <span className="w-32 shrink-0">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[380px] sm:h-[460px] lg:h-full lg:min-h-[460px] w-full border border-charcoal/10"
          >
            <iframe
              title="Diamond Manufacturing Industry location, Sidco, Bari Brahmana"
              src="https://www.google.com/maps?q=JWQ8%2B86+Jammu&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
