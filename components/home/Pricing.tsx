"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic Scan",
    price: 29,
    description: "Perfect for reviewing a single contract before signing.",
    badge: null,
    features: [
      "Full contract risk analysis",
      "Color-coded risk highlighting",
      "Plain-English explanations",
      "Risk score (0-100)",
      "PDF report download",
      "Up to 15 MB file size",
    ],
    excluded: ["AI clause rewrites", "24h lawyer review option"],
    cta: "Get Basic Scan",
    href: "/audit?plan=basic",
    popular: false,
    color: "bg-white dark:bg-navy-900 border-gray-200 dark:border-navy-700",
    ctaColor: "bg-navy-900 hover:bg-navy-800 dark:bg-[#00C853] dark:hover:bg-[#00892e] text-white",
  },
  {
    name: "Standard Scan",
    price: 49,
    description: "The most popular choice. Audit + AI-powered rewrite suggestions.",
    badge: "Most Popular",
    features: [
      "Everything in Basic Scan",
      "AI clause rewrite suggestions",
      "One-click clause fixes",
      "Before/after comparison",
      "Download revised PDF & DOCX",
      "Copy-to-clipboard",
      "30-day contract storage",
    ],
    excluded: ["24h human lawyer review"],
    cta: "Get Standard Scan",
    href: "/audit?plan=standard",
    popular: true,
    color: "bg-navy-900 dark:bg-navy-800 border-[#00C853]/30",
    ctaColor: "bg-[#00C853] hover:bg-[#00892e] text-white shadow-lg shadow-[#00C853]/30",
  },
  {
    name: "Premium Scan",
    price: 79,
    description: "Full audit + AI fixes + optional human lawyer review within 24 hours.",
    badge: "Best Protection",
    features: [
      "Everything in Standard Scan",
      "Priority AI analysis",
      "Add-on: 24h human lawyer review",
      "Lawyer annotated feedback",
      "Negotiation talking points",
      "Priority support",
      "90-day contract storage",
    ],
    excluded: [],
    cta: "Get Premium Scan",
    href: "/audit?plan=premium",
    popular: false,
    color: "bg-white dark:bg-navy-900 border-gray-200 dark:border-navy-700",
    ctaColor: "bg-navy-900 hover:bg-navy-800 dark:bg-[#00C853] dark:hover:bg-[#00892e] text-white",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#00C853] font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Simple, Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 dark:text-white mb-5"
          >
            A real lawyer costs{" "}
            <span className="line-through text-gray-400">$500/hr</span>
            <br />
            We charge{" "}
            <span className="text-[#00C853]">$29–$79.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            Per-contract pricing. No subscriptions. No monthly fees. Pay only when you need protection.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl border-2 p-8 flex flex-col",
                plan.color,
                plan.popular && "scale-105 shadow-2xl"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-[#00C853] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    <Star className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn(
                  "font-display font-bold text-xl mb-2",
                  plan.popular ? "text-white" : "text-navy-900 dark:text-white"
                )}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={cn(
                    "font-display font-bold text-4xl",
                    plan.popular ? "text-white" : "text-navy-900 dark:text-white"
                  )}>
                    ${plan.price}
                  </span>
                  <span className={cn(
                    "text-sm",
                    plan.popular ? "text-gray-300" : "text-gray-400"
                  )}>
                    /contract
                  </span>
                </div>
                <p className={cn(
                  "text-sm leading-relaxed",
                  plan.popular ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
                )}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={cn(
                      "w-4 h-4 flex-shrink-0 mt-0.5",
                      plan.popular ? "text-[#00C853]" : "text-[#00C853]"
                    )} />
                    <span className={cn(
                      "text-sm",
                      plan.popular ? "text-gray-200" : "text-gray-600 dark:text-gray-300"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.excluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 opacity-40">
                    <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-px bg-current" />
                    </div>
                    <span className={cn(
                      "text-sm line-through",
                      plan.popular ? "text-gray-400" : "text-gray-400"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold transition-all active:scale-95",
                  plan.ctaColor
                )}
              >
                <Zap className="w-4 h-4" />
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contract Generator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#00C853]/10 dark:bg-[#00C853]/5 border border-[#00C853]/20 rounded-2xl p-8 max-w-3xl mx-auto text-center"
        >
          <span className="inline-block bg-[#00C853]/20 text-[#00C853] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Also Free
          </span>
          <h3 className="font-display font-bold text-2xl text-navy-900 dark:text-white mb-3">
            Generate a Contract — Always Free
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Create a professional, freelancer-friendly contract from scratch in under 2 minutes. No payment required for basic templates.
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00C853] text-[#00C853] hover:bg-[#00C853] hover:text-white font-bold rounded-xl transition-all"
          >
            Generate My Contract Free →
          </Link>
        </motion.div>

        <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8">
          All payments processed securely via Stripe. 30-day money-back guarantee. No subscriptions.
        </p>
      </div>
    </section>
  );
}
