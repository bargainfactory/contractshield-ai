"use client";

import { motion } from "framer-motion";
import { Award, Lock, Shield, Star, Newspaper } from "lucide-react";

const trustItems = [
  {
    icon: Newspaper,
    text: "As seen in",
    highlight: "Forbes",
    color: "text-blue-500",
  },
  {
    icon: Award,
    text: "LegalTech",
    highlight: "Award Winner 2025",
    color: "text-yellow-500",
  },
  {
    icon: Lock,
    text: "256-bit",
    highlight: "Encrypted",
    color: "text-green-500",
  },
  {
    icon: Shield,
    text: "Contracts",
    highlight: "Never Stored*",
    color: "text-purple-500",
  },
  {
    icon: Star,
    text: "Rated",
    highlight: "4.98/5 ★",
    color: "text-orange-500",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 dark:bg-navy-900 border-y border-gray-100 dark:border-navy-700 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustItems.map(({ icon: Icon, text, highlight, color }, i) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-sm text-gray-500 dark:text-gray-400">{text}</span>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{highlight}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-navy-600 ml-4" />
              )}
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
          *Contracts are automatically deleted after 30 days unless you choose to save them to your account.
        </p>
      </div>
    </section>
  );
}
