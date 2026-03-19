"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  FileText,
  MessageSquare,
  Download,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950/30",
    title: "Color-Coded Risk Detection",
    description:
      "Critical IP grabs, non-competes, and payment traps are flagged in red instantly. Medium risks in orange. Safe clauses confirmed in green. Zero guesswork.",
    tag: "Audit Feature",
  },
  {
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    title: "Plain-English Explanations",
    description:
      "No legalese. Every risk gets a simple explanation: what it means, why it hurts freelancers, and exactly what you should do about it.",
    tag: "Audit Feature",
  },
  {
    icon: RefreshCw,
    color: "text-[#00C853]",
    bg: "bg-green-50 dark:bg-green-950/30",
    title: "One-Click AI Clause Rewriter",
    description:
      "See a risky clause? Click \"Apply AI Fix\" and watch it transform into a freelancer-friendly version instantly. Side-by-side before/after comparison included.",
    tag: "Audit Feature",
  },
  {
    icon: FileText,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    title: "Smart Contract Generator",
    description:
      "Answer 5 questions about your project. Get a complete, professional, freelancer-friendly contract in under 2 minutes. Covers IP, payment, kill fees, and more.",
    tag: "Generator Feature",
  },
  {
    icon: ShieldCheck,
    color: "text-navy-700 dark:text-blue-300",
    bg: "bg-navy-50 dark:bg-navy-800/50",
    title: "Bulletproof Protections Built In",
    description:
      "Every generated contract includes kill fees, limited non-competes, clear IP ownership, late payment fees, revision limits, and portfolio rights. Out of the box.",
    tag: "Generator Feature",
  },
  {
    icon: Download,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    title: "Download PDF or DOCX",
    description:
      "Export your audited or generated contract as a professional PDF or editable DOCX. Share directly with clients or import into your DocuSign/HelloSign workflow.",
    tag: "Both",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#00C853] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Everything You Need
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 dark:text-white mb-5"
          >
            AI that thinks like a{" "}
            <span className="text-[#00C853]">$500/hr lawyer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Two powerful tools in one. Audit any contract for risks, or generate a brand-new bulletproof one from scratch.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 border border-gray-100 dark:border-navy-700 hover:border-[#00C853]/30 hover:shadow-lg hover:shadow-[#00C853]/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <span className="inline-block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {feature.tag}
                  </span>
                  <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00C853] to-[#69F0AE] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="px-8 py-3.5 bg-navy-900 dark:bg-[#00C853] hover:bg-navy-800 dark:hover:bg-[#00892e] text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Audit a Contract — From $29
            </Link>
            <Link
              href="/generate"
              className="px-8 py-3.5 border-2 border-[#00C853] text-[#00C853] hover:bg-[#00C853]/5 font-semibold rounded-xl transition-all"
            >
              Generate a Contract Free
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
