"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { DEMO_TESTIMONIALS } from "@/lib/demo-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#00C853] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Real Freelancers, Real Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 dark:text-white mb-5"
          >
            They protected their income.
            <br />
            <span className="text-[#00C853]">You can too.</span>
          </motion.h2>

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-2xl text-navy-900 dark:text-white">4.98</span>
            <span className="text-gray-500 dark:text-gray-400">from 2,347 verified reviews</span>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO_TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 border border-gray-100 dark:border-navy-700 hover:border-[#00C853]/20 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-4 right-5 w-8 h-8 text-gray-100 dark:text-navy-700" />

              <div className="flex items-start gap-3 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-navy-900 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-xs">
                    {testimonial.role} · {testimonial.company}
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {testimonial.saved && (
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-navy-700">
                  <span className="text-xs text-gray-400">Protected income:</span>
                  <span className="font-bold text-[#00C853] text-sm">{testimonial.saved}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Second row — featured testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {DEMO_TESTIMONIALS.slice(3).map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-navy-900 dark:bg-navy-800 rounded-2xl p-6 border border-navy-800 dark:border-navy-700"
            >
              <Quote className="absolute top-4 right-5 w-8 h-8 text-navy-700 dark:text-navy-600" />

              <div className="flex items-start gap-3 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.role} · {testimonial.company}
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {testimonial.saved && (
                <div className="flex items-center gap-2 pt-4 border-t border-navy-700">
                  <span className="text-xs text-gray-500">Protected income:</span>
                  <span className="font-bold text-[#00C853] text-sm">{testimonial.saved}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
