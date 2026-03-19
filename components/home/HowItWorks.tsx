"use client";

import { motion } from "framer-motion";
import { Upload, Zap, ShieldCheck, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const auditSteps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Contract",
    description: "Drag & drop any PDF, DOCX, or TXT file (up to 15 MB). We accept any contract format from any client.",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "02",
    icon: Zap,
    title: "AI Analyzes in 10 Seconds",
    description: "Our award-winning AI scans every clause, paragraph, and sentence for risks that hurt freelancers.",
    color: "from-[#00C853] to-[#00892e]",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Get Color-Coded Results",
    description: "Critical risks in red, medium warnings in orange, safe clauses in green — with plain-English explanations for everything.",
    color: "from-orange-500 to-red-500",
  },
  {
    step: "04",
    icon: Download,
    title: "Apply Fixes & Download",
    description: "Click \"Apply AI Fix\" on any risky clause. Download your improved contract as a professional PDF or DOCX.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#00C853] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Dead Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 dark:text-white mb-5"
          >
            From upload to protected{" "}
            <span className="text-[#00C853]">in under a minute</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            No forms to fill. No waiting room. Just upload and get answers that protect your business.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C853]/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number & icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-navy-800 rounded-full flex items-center justify-center shadow-md border border-gray-100 dark:border-navy-600">
                    <span className="text-[10px] font-bold text-navy-900 dark:text-white">{step.step}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow between steps */}
                {i < auditSteps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-16 w-5 h-5 text-gray-300 dark:text-navy-600 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C853] hover:bg-[#00892e] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[#00C853]/30 hover:shadow-xl transition-all active:scale-95"
          >
            <Upload className="w-5 h-5" />
            Try It Free — Upload Your First Contract
          </Link>
          <p className="mt-3 text-sm text-gray-400 dark:text-gray-500">
            No account required for basic scan. No credit card needed to start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
