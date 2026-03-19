"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Download,
  Copy,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Zap,
  ArrowLeft,
  Lock,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { DEMO_AUDIT_RESULT, RiskClause } from "@/lib/demo-data";
import { cn, getRiskColor } from "@/lib/utils";

interface RiskCardProps {
  clause: RiskClause;
}

function RiskCard({ clause }: RiskCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showFix, setShowFix] = useState(false);
  const [applied, setApplied] = useState(false);
  const [copied, setCopied] = useState(false);
  const colors = getRiskColor(clause.riskLevel);

  const handleApplyFix = () => {
    setApplied(true);
    setShowFix(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(applied ? clause.aiFixText : clause.originalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const riskIcon = {
    critical: AlertTriangle,
    medium: AlertCircle,
    safe: CheckCircle,
  }[clause.riskLevel];

  const RiskIcon = riskIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl border-2 overflow-hidden transition-all duration-300",
        applied
          ? "border-green-200 dark:border-green-800"
          : colors.border
      )}
    >
      {/* Card header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "w-full flex items-start gap-4 p-5 text-left transition-colors",
          colors.bg,
          applied && "bg-green-50 dark:bg-green-950/20"
        )}
      >
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5", colors.bg)}>
          {applied ? (
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          ) : (
            <RiskIcon className={cn("w-5 h-5", colors.icon)} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={cn("text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full", applied ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300" : colors.badge)}>
              {applied ? "FIXED" : clause.riskLevel.toUpperCase()}
            </span>
            <span className="text-xs text-gray-400 font-medium">{clause.category}</span>
          </div>
          <h3 className="font-display font-bold text-navy-900 dark:text-white text-base">
            {clause.title}
          </h3>
          <p className={cn("text-sm mt-1 line-clamp-2", colors.text, applied && "text-green-600 dark:text-green-400")}>
            {applied ? "AI fix applied — clause rewritten in freelancer-friendly language." : clause.explanation}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {clause.riskLevel !== "safe" && !applied && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleApplyFix();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#00C853] hover:bg-[#00892e] text-white text-xs font-bold rounded-lg transition-colors"
            >
              <Zap className="w-3 h-3" />
              Apply AI Fix
            </button>
          )}
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-white dark:bg-navy-900 space-y-5">
              {/* Impact */}
              {clause.riskLevel !== "safe" && (
                <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-xl">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Why This Hurts You
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{clause.impact}</p>
                </div>
              )}

              {/* Before/After */}
              <div className={cn(
                "grid gap-4",
                showFix ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
              )}>
                {/* Original text */}
                <div>
                  <p className={cn("text-xs font-semibold uppercase tracking-wider mb-2",
                    showFix ? "text-red-500" : "text-gray-500 dark:text-gray-400"
                  )}>
                    {showFix ? "Before (Original)" : "Original Clause"}
                  </p>
                  <div className={cn(
                    "p-4 rounded-xl border text-sm font-mono leading-relaxed text-gray-600 dark:text-gray-300",
                    showFix
                      ? "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 line-through opacity-60"
                      : "bg-gray-50 dark:bg-navy-800 border-gray-200 dark:border-navy-600"
                  )}>
                    {clause.originalText}
                  </div>
                </div>

                {/* AI Fix text */}
                {showFix && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">
                      After (AI Rewrite)
                    </p>
                    <div className="p-4 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20 text-sm font-mono leading-relaxed text-gray-700 dark:text-gray-200">
                      {clause.aiFixText}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                {clause.riskLevel !== "safe" && !applied && (
                  <button
                    onClick={handleApplyFix}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#00C853] hover:bg-[#00892e] text-white text-sm font-bold rounded-xl transition-colors"
                  >
                    <Zap className="w-4 h-4" />
                    Apply AI Fix
                  </button>
                )}
                {clause.riskLevel !== "safe" && !showFix && applied === false && (
                  <button
                    onClick={() => setShowFix(true)}
                    className="flex items-center gap-2 px-4 py-2.5 border border-[#00C853] text-[#00C853] hover:bg-[#00C853]/5 text-sm font-semibold rounded-xl transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Preview AI Fix
                  </button>
                )}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 hover:border-gray-300 text-sm font-medium rounded-xl transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy Text"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ResultsViewProps {
  fileName: string;
}

export default function ResultsView({ fileName }: ResultsViewProps) {
  const result = DEMO_AUDIT_RESULT;
  const [activeFilter, setActiveFilter] = useState<"all" | "critical" | "medium" | "safe">("all");
  const [showPayment, setShowPayment] = useState(false);

  const filteredClauses = result.clauses.filter(
    (c) => activeFilter === "all" || c.riskLevel === activeFilter
  );

  const riskScoreColor =
    result.overallRiskScore >= 70
      ? "text-red-500"
      : result.overallRiskScore >= 40
      ? "text-orange-500"
      : "text-green-500";

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-navy-950 pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-8">
            <div className="text-center mb-8">
              <Lock className="w-12 h-12 text-[#00C853] mx-auto mb-4" />
              <h2 className="font-display font-bold text-2xl text-navy-900 dark:text-white mb-2">
                Unlock Your Full Report
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Secure checkout powered by Stripe. 30-day money-back guarantee.
              </p>
            </div>

            {/* Plan options */}
            <div className="space-y-3 mb-8">
              {[
                { name: "Basic Scan", price: "$29", desc: "Risk flags + plain-English explanations", features: ["Risk score", "All clause explanations", "PDF report"] },
                { name: "Standard Scan", price: "$49", desc: "Flags + full AI clause rewrites", features: ["Everything in Basic", "AI clause rewrites", "Before/after comparison", "Download revised DOCX"] },
                { name: "Premium Scan", price: "$79", desc: "Full audit + optional 24h lawyer review", features: ["Everything in Standard", "Priority processing", "Add-on: 24h human lawyer review", "Negotiation talking points"] },
              ].map((plan, i) => (
                <div key={plan.name} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${i === 1 ? "border-[#00C853] bg-[#00C853]/5" : "border-gray-200 dark:border-navy-600"}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-navy-900 dark:text-white">{plan.name}</span>
                    <span className="font-bold text-[#00C853] text-xl">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{plan.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.features.map(f => (
                      <span key={f} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[#00C853]" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="w-full py-4 bg-[#00C853] hover:bg-[#00892e] text-white font-bold text-lg rounded-2xl transition-colors flex items-center justify-center gap-2"
              onClick={() => setShowPayment(false)}
            >
              <Lock className="w-5 h-5" />
              Continue to Secure Checkout (Stripe)
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Demo mode — Stripe integration ready for live keys
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/audit"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to upload
        </Link>

        {/* Results header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 sm:p-8 mb-6 text-white"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-[#00C853]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">{fileName}</span>
              </div>
              <h1 className="font-display font-bold text-2xl sm:text-3xl mb-1">
                Audit Complete
              </h1>
              <p className="text-gray-300 text-sm max-w-xl">{result.summary}</p>
            </div>

            {/* Risk score */}
            <div className="text-center flex-shrink-0">
              <div className={cn("font-display font-bold text-5xl mb-1", riskScoreColor)}>
                {result.overallRiskScore}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">Risk Score</div>
              <div className="text-gray-300 text-xs mt-1">(lower = safer)</div>
            </div>
          </div>

          {/* Risk summary pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-2.5">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-300 font-semibold">{result.criticalCount} Critical</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-xl px-4 py-2.5">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 font-semibold">{result.mediumCount} Medium</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-xl px-4 py-2.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-semibold">{result.safeCount} Safe</span>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setShowPayment(true)}
            className="flex items-center gap-2 px-5 py-3 bg-[#00C853] hover:bg-[#00892e] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#00C853]/25"
          >
            <Download className="w-4 h-4" />
            Download Revised Contract
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                result.clauses
                  .filter((c) => c.riskLevel !== "safe")
                  .map((c) => `${c.title}: ${c.aiFixText}`)
                  .join("\n\n")
              );
            }}
            className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-300 transition-all"
          >
            <Copy className="w-4 h-4" />
            Copy All Fixes
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1">
          {(["all", "critical", "medium", "safe"] as const).map((filter) => {
            const counts = {
              all: result.clauses.length,
              critical: result.criticalCount,
              medium: result.mediumCount,
              safe: result.safeCount,
            };
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all",
                  activeFilter === filter
                    ? filter === "critical"
                      ? "bg-red-500 text-white"
                      : filter === "medium"
                      ? "bg-orange-500 text-white"
                      : filter === "safe"
                      ? "bg-green-500 text-white"
                      : "bg-navy-900 dark:bg-white text-white dark:text-navy-900"
                    : "bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 hover:border-gray-300"
                )}
              >
                {filter === "all" ? "All Clauses" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                <span className={cn(
                  "px-1.5 py-0.5 text-xs rounded-md",
                  activeFilter === filter ? "bg-white/20" : "bg-gray-100 dark:bg-navy-700 text-gray-500 dark:text-gray-400"
                )}>
                  {counts[filter]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clauses list */}
        <div className="space-y-3">
          {filteredClauses.map((clause, i) => (
            <motion.div
              key={clause.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <RiskCard clause={clause} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-navy-900 dark:bg-navy-800 rounded-2xl p-6 text-center"
        >
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Ready to download your improved contract?
          </h3>
          <p className="text-gray-300 text-sm mb-5">
            Get the full report with all AI fixes applied. Secure Stripe checkout.
          </p>
          <button
            onClick={() => setShowPayment(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00C853] hover:bg-[#00892e] text-white font-bold text-lg rounded-xl shadow-lg transition-all"
          >
            <Lock className="w-5 h-5" />
            Unlock Full Report — From $29
          </button>
        </motion.div>
      </div>
    </div>
  );
}
