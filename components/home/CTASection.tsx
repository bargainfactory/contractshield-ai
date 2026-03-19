"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Upload, FileText, Shield, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00C853]/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-gradient-to-br from-[#00C853] to-[#00892e] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#00C853]/30"
        >
          <Shield className="w-10 h-10 text-white" strokeWidth={2} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight"
        >
          Stop signing contracts blind.
          <br />
          <span className="text-[#00C853]">Start working with confidence.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-blue-100/70 text-lg mb-10 max-w-2xl mx-auto"
        >
          Every week freelancers lose thousands to bad contracts. Non-competes, IP grabs, payment traps — they're written to protect clients, not you. ContractShield AI fixes that.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/audit"
            className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-[#00C853] hover:bg-[#00a846] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[#00C853]/30 hover:shadow-2xl transition-all active:scale-95"
          >
            <Upload className="w-5 h-5" />
            Audit My Contract — From $29
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/generate"
            className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-2xl border border-white/20 backdrop-blur-sm transition-all active:scale-95"
          >
            <FileText className="w-5 h-5" />
            Generate Free Contract
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm text-blue-200/50"
        >
          256-bit encrypted · Files auto-deleted after 30 days · No account needed to start
        </motion.p>
      </div>
    </section>
  );
}
