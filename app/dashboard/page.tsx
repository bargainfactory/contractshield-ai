"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Upload,
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  Download,
  Trash2,
  BarChart2,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { DEMO_DASHBOARD_AUDITS, DEMO_DASHBOARD_CONTRACTS } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

type Tab = "audits" | "contracts";

function RiskBadge({ score }: { score: number }) {
  const color =
    score >= 70 ? "text-red-600 bg-red-50 dark:bg-red-950/40 dark:text-red-400" :
    score >= 40 ? "text-orange-600 bg-orange-50 dark:bg-orange-950/40 dark:text-orange-400" :
    "text-green-600 bg-green-50 dark:bg-green-950/40 dark:text-green-400";

  const label = score >= 70 ? "High Risk" : score >= 40 ? "Medium Risk" : "Low Risk";

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg", color)}>
      <span className={cn("w-1.5 h-1.5 rounded-full", score >= 70 ? "bg-red-500" : score >= 40 ? "bg-orange-500" : "bg-green-500")} />
      {score} · {label}
    </span>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("audits");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white mb-1"
            >
              Your Dashboard
            </motion.h1>
            <p className="text-gray-400 text-sm">Welcome back. Here's your contract protection overview.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/audit"
              className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-700 dark:text-gray-300 font-semibold text-sm rounded-xl hover:border-gray-300 transition-all"
            >
              <Upload className="w-4 h-4" /> Audit Contract
            </Link>
            <Link
              href="/generate"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#00C853] hover:bg-[#00892e] text-white font-bold text-sm rounded-xl transition-all shadow-md"
            >
              <Plus className="w-4 h-4" /> New Contract
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Shield,
              label: "Contracts Audited",
              value: "4",
              sub: "+1 this month",
              color: "text-blue-500",
              bg: "bg-blue-50 dark:bg-blue-950/30",
            },
            {
              icon: AlertTriangle,
              label: "Risks Caught",
              value: "11",
              sub: "Across all audits",
              color: "text-red-500",
              bg: "bg-red-50 dark:bg-red-950/30",
            },
            {
              icon: DollarSign,
              label: "Income Protected",
              value: "$62,500",
              sub: "Estimated total",
              color: "text-[#00C853]",
              bg: "bg-green-50 dark:bg-green-950/30",
            },
            {
              icon: FileText,
              label: "Contracts Generated",
              value: "3",
              sub: "Active templates",
              color: "text-purple-500",
              bg: "bg-purple-50 dark:bg-purple-950/30",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-5"
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <div className="font-display font-bold text-2xl text-navy-900 dark:text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Risk trend mini chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#00C853]" />
            <h2 className="font-display font-bold text-lg text-navy-900 dark:text-white">
              Risk Score Trend
            </h2>
            <span className="ml-auto text-xs text-[#00C853] font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Improving over time
            </span>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-3 h-24">
            {[82, 78, 68, 34].map((score, i) => {
              const color = score >= 70 ? "bg-red-400" : score >= 40 ? "bg-orange-400" : "bg-green-400";
              const labels = ["Feb 14", "Feb 28", "Mar 8", "Mar 15"];
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs font-bold text-gray-500">{score}</span>
                  <div className={cn("w-full rounded-t-lg transition-all", color)} style={{ height: `${(score / 100) * 70}px` }} />
                  <span className="text-[10px] text-gray-400">{labels[i]}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-5">
          <button
            onClick={() => setActiveTab("audits")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
              activeTab === "audits"
                ? "bg-navy-900 dark:bg-white text-white dark:text-navy-900 shadow-md"
                : "bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 hover:border-gray-300"
            )}
          >
            <Shield className="w-4 h-4" />
            My Audits
            <span className={cn("text-xs px-1.5 py-0.5 rounded-md", activeTab === "audits" ? "bg-white/20" : "bg-gray-100 dark:bg-navy-700 text-gray-500 dark:text-gray-400")}>
              {DEMO_DASHBOARD_AUDITS.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("contracts")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
              activeTab === "contracts"
                ? "bg-navy-900 dark:bg-white text-white dark:text-navy-900 shadow-md"
                : "bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 hover:border-gray-300"
            )}
          >
            <FileText className="w-4 h-4" />
            My Generated Contracts
            <span className={cn("text-xs px-1.5 py-0.5 rounded-md", activeTab === "contracts" ? "bg-white/20" : "bg-gray-100 dark:bg-navy-700 text-gray-500 dark:text-gray-400")}>
              {DEMO_DASHBOARD_CONTRACTS.length}
            </span>
          </button>
        </div>

        {/* Audits list */}
        {activeTab === "audits" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            {DEMO_DASHBOARD_AUDITS.map((audit, i) => (
              <motion.div
                key={audit.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-gray-300 dark:hover:border-navy-600 transition-all"
              >
                <div className="w-12 h-12 bg-navy-50 dark:bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-navy-600 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-navy-900 dark:text-white text-sm truncate mb-1">
                    {audit.contractName}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" /> {audit.date}
                    </span>
                    <RiskBadge score={audit.riskScore} />
                    {audit.criticalIssues > 0 && (
                      <span className="flex items-center gap-1 text-xs text-red-500 font-semibold">
                        <AlertTriangle className="w-3 h-3" /> {audit.criticalIssues} critical
                      </span>
                    )}
                    {audit.criticalIssues === 0 && (
                      <span className="flex items-center gap-1 text-xs text-green-500 font-semibold">
                        <CheckCircle className="w-3 h-3" /> No critical issues
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/audit"
                    className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg hover:border-gray-300 transition-all"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Re-audit
                  </Link>
                  <button className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg hover:border-gray-300 transition-all">
                    <Download className="w-3.5 h-3.5" /> Report
                  </button>
                  <button className="p-2 text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}

            <Link
              href="/audit"
              className="flex items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-gray-200 dark:border-navy-700 text-gray-400 hover:border-[#00C853]/50 hover:text-[#00C853] text-sm font-medium transition-all"
            >
              <Plus className="w-5 h-5" /> Audit another contract
            </Link>
          </motion.div>
        )}

        {/* Contracts list */}
        {activeTab === "contracts" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            {DEMO_DASHBOARD_CONTRACTS.map((contract, i) => (
              <motion.div
                key={contract.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-gray-300 dark:hover:border-navy-600 transition-all"
              >
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-950/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-navy-900 dark:text-white text-sm truncate mb-1">
                    {contract.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span className="bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 font-medium px-2 py-0.5 rounded-lg">
                      {contract.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {contract.date}
                    </span>
                    <span>Client: {contract.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg hover:border-gray-300 transition-all">
                    <RefreshCw className="w-3.5 h-3.5" /> Regenerate
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg hover:border-gray-300 transition-all">
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                  <Link
                    href="/audit"
                    className="flex items-center gap-1.5 px-3 py-2 bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-xs font-medium rounded-lg hover:bg-[#00C853]/20 transition-all"
                  >
                    <Shield className="w-3.5 h-3.5" /> Audit
                  </Link>
                  <button className="p-2 text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}

            <Link
              href="/generate"
              className="flex items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-gray-200 dark:border-navy-700 text-gray-400 hover:border-[#00C853]/50 hover:text-[#00C853] text-sm font-medium transition-all"
            >
              <Plus className="w-5 h-5" /> Generate a new contract
            </Link>
          </motion.div>
        )}

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-6"
        >
          <h2 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-[#00C853]" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: Upload,
                title: "Audit New Contract",
                desc: "Upload & scan for risks",
                href: "/audit",
                color: "text-blue-500",
                bg: "bg-blue-50 dark:bg-blue-950/30",
              },
              {
                icon: FileText,
                title: "Generate Contract",
                desc: "5-step wizard, always free",
                href: "/generate",
                color: "text-[#00C853]",
                bg: "bg-green-50 dark:bg-green-950/30",
              },
              {
                icon: Shield,
                title: "Learn How It Works",
                desc: "See what we protect",
                href: "/#how-it-works",
                color: "text-purple-500",
                bg: "bg-purple-50 dark:bg-purple-950/30",
              },
            ].map(({ icon: Icon, title, desc, href, color, bg }) => (
              <Link
                key={title}
                href={href}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-navy-700 hover:border-gray-200 dark:hover:border-navy-600 hover:shadow-sm transition-all group"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", bg)}>
                  <Icon className={cn("w-5 h-5", color)} />
                </div>
                <div>
                  <div className="font-semibold text-navy-900 dark:text-white text-sm group-hover:text-[#00C853] transition-colors">
                    {title}
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
