"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Upload, FileText, ArrowRight, Star, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#00C853]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#1e4785]/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0A2540]/50 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="text-center">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#00C853]/15 border border-[#00C853]/30 text-[#00C853] px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <Star className="w-4 h-4 fill-[#00C853]" />
            LegalTech Award Winner 2025 — Used by 5,000+ Freelancers
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight mb-6 max-w-5xl mx-auto"
          >
            Upload any contract in{" "}
            <span className="relative">
              <span className="text-[#00C853]">10 seconds.</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-[#00C853]/40 rounded-full origin-left"
              />
            </span>{" "}
            Get risks flagged + plain-English fixes.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Used by 5,000+ freelancers. Saved <span className="text-[#00C853] font-semibold">$47M in lost income</span>.{" "}
            Not legal advice – AI that thinks like an award-winning lawyer.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/audit"
              className="group flex items-center gap-2.5 px-8 py-4 bg-[#00C853] hover:bg-[#00a846] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[#00C853]/30 hover:shadow-2xl transition-all duration-300 active:scale-95 w-full sm:w-auto justify-center"
            >
              <Upload className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Audit My Contract Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/generate"
              className="group flex items-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 active:scale-95 w-full sm:w-auto justify-center"
            >
              <FileText className="w-5 h-5" />
              Generate New Contract Free
            </Link>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {[
              { icon: "🔴", text: "Flags Critical Risks" },
              { icon: "✍️", text: "AI Rewrites Clauses" },
              { icon: "📄", text: "Generates Contracts" },
              { icon: "⚡", text: "Results in 10 Seconds" },
              { icon: "🔒", text: "256-bit Encrypted" },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/8 border border-white/12 rounded-full text-white/80 text-sm font-medium backdrop-blur-sm"
              >
                <span>{icon}</span>
                {text}
              </span>
            ))}
          </motion.div>

          {/* Demo card / mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl">
              {/* Mock audit result preview */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 bg-[#00C853]/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#00C853]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">Client_Service_Agreement.pdf</div>
                  <div className="text-blue-200/60 text-xs">Analyzing with award-winning AI model…</div>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center gap-1.5 bg-orange-500/20 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    Risk Score: 68
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-left">
                {[
                  {
                    level: "critical",
                    color: "text-red-400",
                    bg: "bg-red-500/10 border-red-500/20",
                    dot: "bg-red-500",
                    label: "CRITICAL",
                    title: "IP Grab Clause",
                    desc: "Client claims ownership of ALL your work, tools & future ideas forever.",
                    fix: "AI Fix Ready",
                  },
                  {
                    level: "critical",
                    color: "text-red-400",
                    bg: "bg-red-500/10 border-red-500/20",
                    dot: "bg-red-500",
                    label: "CRITICAL",
                    title: "2-Year Non-Compete",
                    desc: "Blocks you from working in your entire industry for 2 years after project ends.",
                    fix: "AI Fix Ready",
                  },
                  {
                    level: "medium",
                    color: "text-orange-400",
                    bg: "bg-orange-500/10 border-orange-500/20",
                    dot: "bg-orange-500",
                    label: "MEDIUM",
                    title: "Net-60 Payment Terms",
                    desc: "You wait 2 months to get paid. Industry standard is Net-15.",
                    fix: "AI Fix Ready",
                  },
                  {
                    level: "safe",
                    color: "text-green-400",
                    bg: "bg-green-500/10 border-green-500/20",
                    dot: "bg-green-500",
                    label: "SAFE",
                    title: "Independent Contractor Status",
                    desc: "Clear classification protects your freelance status. No changes needed.",
                    fix: null,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`flex items-start gap-3 p-3 rounded-xl border ${item.bg}`}
                  >
                    <div className={`w-2 h-2 rounded-full ${item.dot} mt-1.5 flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-bold ${item.color} uppercase tracking-wider`}>
                          {item.label}
                        </span>
                        <span className="text-white/90 text-sm font-medium">{item.title}</span>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                    {item.fix && (
                      <span className="flex-shrink-0 text-xs font-semibold text-[#00C853] bg-[#00C853]/10 px-2.5 py-1 rounded-lg whitespace-nowrap">
                        {item.fix}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <Zap className="w-3.5 h-3.5 text-[#00C853]" />
                  Analyzed in 8.2 seconds
                </div>
                <button className="px-4 py-2 bg-[#00C853] text-white text-xs font-bold rounded-lg hover:bg-[#00a846] transition-colors">
                  Apply All AI Fixes →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
