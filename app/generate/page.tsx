"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ChevronRight,
  ChevronLeft,
  Check,
  Shield,
  Download,
  Copy,
  Edit3,
  Zap,
  Lock,
  Search,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { SERVICE_TYPES, KEY_PROTECTIONS, DEMO_GENERATED_CONTRACT } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4 | 5;
type Stage = "wizard" | "generating" | "preview";

interface FormData {
  serviceType: string;
  customService: string;
  projectScope: string;
  deliverables: string;
  timeline: string;
  startDate: string;
  totalAmount: string;
  milestones: string;
  deposit: boolean;
  lateFees: boolean;
  protections: string[];
  clientName: string;
  clientEmail: string;
  contractorName: string;
  contractorEmail: string;
}

const STEPS = [
  { id: 1, title: "Your Service", desc: "What are you providing?" },
  { id: 2, title: "Project Scope", desc: "Deliverables & timeline" },
  { id: 3, title: "Payment Terms", desc: "Milestones & deposits" },
  { id: 4, title: "Protections", desc: "What you want covered" },
  { id: 5, title: "Parties", desc: "Your details & client" },
];

const GENERATION_STEPS = [
  "Building contract structure…",
  "Adding IP ownership clauses…",
  "Writing payment terms…",
  "Applying kill fee protection…",
  "Adding scope-creep guard…",
  "Writing revision limit clause…",
  "Adding confidentiality section…",
  "Formatting in plain English…",
  "Final review by AI model…",
  "Your contract is ready!",
];

export default function GeneratePage() {
  const [step, setStep] = useState<Step>(1);
  const [stage, setStage] = useState<Stage>("wizard");
  const [genProgress, setGenProgress] = useState(0);
  const [genStep, setGenStep] = useState(0);
  const [serviceSearch, setServiceSearch] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [contractText, setContractText] = useState(DEMO_GENERATED_CONTRACT);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    serviceType: "",
    customService: "",
    projectScope: "",
    deliverables: "",
    timeline: "",
    startDate: "",
    totalAmount: "",
    milestones: "",
    deposit: true,
    lateFees: true,
    protections: ["ip", "killfee", "revisions", "latepayment", "portfolio"],
    clientName: "",
    clientEmail: "",
    contractorName: "",
    contractorEmail: "",
  });

  const updateForm = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleProtection = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      protections: prev.protections.includes(id)
        ? prev.protections.filter((p) => p !== id)
        : [...prev.protections, id],
    }));
  };

  const filteredServices = SERVICE_TYPES.filter((s) =>
    s.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  const canAdvance = () => {
    if (step === 1) return !!formData.serviceType;
    if (step === 2) return !!formData.projectScope;
    if (step === 3) return !!formData.totalAmount;
    if (step === 4) return formData.protections.length > 0;
    if (step === 5) return !!formData.contractorName && !!formData.clientName;
    return false;
  };

  const handleGenerate = () => {
    setStage("generating");
    setGenProgress(0);
    setGenStep(0);

    let s = 0;
    const total = GENERATION_STEPS.length;
    const interval = setInterval(() => {
      s += 1;
      setGenStep(s);
      setGenProgress(Math.round((s / total) * 100));
      if (s >= total) {
        clearInterval(interval);
        setTimeout(() => setStage("preview"), 800);
      }
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contractText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generating stage
  if (stage === "generating") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-navy-950 pt-24 pb-20 flex items-center">
        <div className="max-w-lg mx-auto px-4 w-full">
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-10 text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-br from-[#00C853] to-[#00892e] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#00C853]/30"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="font-display font-bold text-2xl text-navy-900 dark:text-white mb-2">
              Generating your contract…
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Writing every clause to protect your freelance business
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Progress</span>
                <span>{genProgress}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 dark:bg-navy-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00C853] to-[#69F0AE] rounded-full"
                  style={{ width: `${genProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={genStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-[#00C853] font-medium"
              >
                {GENERATION_STEPS[Math.min(genStep, GENERATION_STEPS.length - 1)]}
              </motion.p>
            </AnimatePresence>

            <div className="mt-8 space-y-1.5 text-left max-w-xs mx-auto">
              {GENERATION_STEPS.slice(0, genStep).map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-xs text-gray-400"
                >
                  <Check className="w-3.5 h-3.5 text-[#00C853]" />
                  {s}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Preview stage
  if (stage === "preview") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-navy-950 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 sm:p-8 mb-6 text-white"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-16 h-16 bg-[#00C853]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-8 h-8 text-[#00C853]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span className="text-[#00C853] text-sm font-semibold">Contract Generated!</span>
                </div>
                <h1 className="font-display font-bold text-2xl sm:text-3xl mb-1">
                  {formData.serviceType || "Freelance"} Services Agreement
                </h1>
                <p className="text-gray-300 text-sm">
                  Freelancer-friendly contract with {formData.protections.length} built-in protections
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="flex items-center gap-1.5 bg-[#00C853]/20 border border-[#00C853]/30 rounded-xl px-3 py-2">
                  <Shield className="w-4 h-4 text-[#00C853]" />
                  <span className="text-[#00C853] text-sm font-bold">Bulletproof</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setEditMode(!editMode)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all",
                editMode
                  ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900"
                  : "bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-700 dark:text-gray-300 hover:border-gray-300"
              )}
            >
              <Edit3 className="w-4 h-4" />
              {editMode ? "Done Editing" : "Edit Contract"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-300 transition-all"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copied!" : "Copy Text"}
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-[#00C853] hover:bg-[#00892e] text-white font-bold rounded-xl shadow-lg transition-all">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-300 transition-all">
              <Download className="w-4 h-4" />
              Download DOCX
            </button>
          </div>

          {/* "Make it stronger" & "Audit this contract" */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => {
                setStage("generating");
                setTimeout(() => setStage("preview"), 4500);
              }}
              className="flex items-center gap-2 px-4 py-2.5 border-2 border-[#00C853] text-[#00C853] hover:bg-[#00C853]/5 font-semibold text-sm rounded-xl transition-all"
            >
              <Zap className="w-4 h-4" />
              Make It Stronger
            </button>
            <Link
              href="/audit"
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-navy-600 text-gray-600 dark:text-gray-300 hover:border-gray-300 font-medium text-sm rounded-xl transition-all"
            >
              <Shield className="w-4 h-4" />
              Audit This Contract for Free
            </Link>
          </div>

          {/* Contract preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-navy-800 px-6 py-4 border-b border-gray-100 dark:border-navy-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#00C853]" />
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  {formData.serviceType || "Freelance"} Services Agreement
                </span>
              </div>
              <span className="text-xs text-gray-400">
                {editMode ? "Editing mode" : "Preview mode"}
              </span>
            </div>
            {editMode ? (
              <textarea
                value={contractText}
                onChange={(e) => setContractText(e.target.value)}
                className="w-full min-h-[600px] p-8 font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-200 bg-white dark:bg-navy-900 border-none outline-none resize-none"
              />
            ) : (
              <pre className="p-8 font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-200 whitespace-pre-wrap overflow-x-auto">
                {contractText
                  .replace("[SERVICE DESCRIPTION]", `${formData.serviceType} services — ${formData.projectScope}`)
                  .replace("[DATE]", new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))
                  .replace("[YOUR NAME / BUSINESS NAME]", formData.contractorName || "Your Name")
                  .replace("[CLIENT NAME]", formData.clientName || "Client Name")
                  .replace("[START DATE]", formData.startDate || "Project Start")
                  .replace("[END DATE]", formData.timeline || "Project End")
                  .replace(/\[AMOUNT\]/g, formData.totalAmount ? `${parseInt(formData.totalAmount) / 2}` : "TBD")
                }
              </pre>
            )}
          </motion.div>

          <p className="text-center text-xs text-gray-400 mt-6">
            ContractShield AI is AI-powered assistance, not a substitute for licensed legal advice. For legal advice specific to your situation, consult a licensed attorney.
          </p>
        </div>
      </div>
    );
  }

  // Wizard stage
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] px-4 py-2 rounded-full text-sm font-semibold mb-5"
          >
            <FileText className="w-4 h-4" />
            Contract Generator — Always Free
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-navy-900 dark:text-white mb-3"
          >
            Generate Your Contract
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400"
          >
            Answer 5 quick questions. Get a bulletproof freelancer contract in under 2 minutes.
          </motion.p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className={cn(
                  "flex flex-col items-center gap-1",
                  s.id === step ? "opacity-100" : s.id < step ? "opacity-100" : "opacity-40"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                    s.id < step
                      ? "bg-[#00C853] text-white"
                      : s.id === step
                      ? "bg-navy-900 dark:bg-white text-white dark:text-navy-900 ring-4 ring-navy-900/20 dark:ring-white/20"
                      : "bg-gray-200 dark:bg-navy-700 text-gray-400"
                  )}
                >
                  {s.id < step ? <Check className="w-4 h-4" /> : s.id}
                </div>
                <span className="text-[10px] text-gray-400 hidden sm:block">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="relative h-1.5 bg-gray-200 dark:bg-navy-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#00C853] rounded-full"
              animate={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>Step {step} of {STEPS.length}</span>
            <span>{STEPS[step - 1].desc}</span>
          </div>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-6 sm:p-8 mb-6"
          >
            {/* Step 1: Service Type */}
            {step === 1 && (
              <div>
                <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-1">
                  What service are you providing?
                </h2>
                <p className="text-gray-400 text-sm mb-5">
                  Select your primary service type. This shapes the language and protections in your contract.
                </p>

                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services…"
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] transition-colors"
                  />
                </div>

                <div className="max-h-64 overflow-y-auto space-y-1.5">
                  {filteredServices.map((service) => (
                    <button
                      key={service}
                      onClick={() => updateForm("serviceType", service)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        formData.serviceType === service
                          ? "bg-[#00C853] text-white"
                          : "hover:bg-gray-50 dark:hover:bg-navy-800 text-gray-700 dark:text-gray-300"
                      )}
                    >
                      <span className="flex items-center justify-between">
                        {service}
                        {formData.serviceType === service && <Check className="w-4 h-4" />}
                      </span>
                    </button>
                  ))}
                </div>

                {formData.serviceType === "Other" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Describe your service…"
                      value={formData.customService}
                      onChange={(e) => updateForm("customService", e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Project Scope */}
            {step === 2 && (
              <div>
                <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-1">
                  Project scope, deliverables & timeline
                </h2>
                <p className="text-gray-400 text-sm mb-5">
                  Be specific — the more detail you add, the stronger your scope-creep protection.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what you're building, creating, or delivering…"
                      value={formData.projectScope}
                      onChange={(e) => updateForm("projectScope", e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Deliverables
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., 5-page website, 3 logo concepts, 10,000-word ebook…"
                      value={formData.deliverables}
                      onChange={(e) => updateForm("deliverables", e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => updateForm("startDate", e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white focus:outline-none focus:border-[#00C853]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Project Duration
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 4 weeks, 3 months…"
                        value={formData.timeline}
                        onChange={(e) => updateForm("timeline", e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment Terms */}
            {step === 3 && (
              <div>
                <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-1">
                  Payment terms
                </h2>
                <p className="text-gray-400 text-sm mb-5">
                  Set your rates, milestones, and protections. We'll build it all in automatically.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Total Project Fee (USD) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                      <input
                        type="number"
                        placeholder="5000"
                        value={formData.totalAmount}
                        onChange={(e) => updateForm("totalAmount", e.target.value)}
                        className="w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Payment Milestones (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., 50% on signing, 25% at design review, 25% on delivery…"
                      value={formData.milestones}
                      onChange={(e) => updateForm("milestones", e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] resize-none"
                    />
                  </div>

                  <div className="space-y-3">
                    {[
                      { key: "deposit", label: "Require 50% deposit before work begins", desc: "Protects you if client ghosts after you start" },
                      { key: "lateFees", label: "Add late payment fees (1.5%/month after Net-15)", desc: "Incentivizes clients to pay on time" },
                    ].map(({ key, label, desc }) => (
                      <label key={key} className="flex items-start gap-3 cursor-pointer p-4 bg-gray-50 dark:bg-navy-800 rounded-xl hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors">
                        <div
                          className={cn(
                            "w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 transition-all",
                            formData[key as "deposit" | "lateFees"]
                              ? "bg-[#00C853] border-[#00C853]"
                              : "border-gray-300 dark:border-navy-500"
                          )}
                          onClick={() => updateForm(key as "deposit" | "lateFees", !formData[key as "deposit" | "lateFees"])}
                        >
                          {formData[key as "deposit" | "lateFees"] && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-navy-900 dark:text-white">{label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Protections */}
            {step === 4 && (
              <div>
                <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-1">
                  Key protections you want
                </h2>
                <p className="text-gray-400 text-sm mb-5">
                  Select every protection you want built in. We recommend selecting all of them.
                </p>

                <div className="space-y-2.5">
                  {KEY_PROTECTIONS.map(({ id, label }) => (
                    <label
                      key={id}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                        formData.protections.includes(id)
                          ? "border-[#00C853] bg-[#00C853]/5 dark:bg-[#00C853]/10"
                          : "border-gray-200 dark:border-navy-600 hover:border-gray-300"
                      )}
                      onClick={() => toggleProtection(id)}
                    >
                      <div
                        className={cn(
                          "w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all",
                          formData.protections.includes(id)
                            ? "bg-[#00C853] border-[#00C853]"
                            : "border-gray-300 dark:border-navy-500"
                        )}
                      >
                        {formData.protections.includes(id) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm font-medium text-navy-900 dark:text-white">{label}</span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={() => updateForm("protections", KEY_PROTECTIONS.map(p => p.id))}
                  className="mt-4 flex items-center gap-1.5 text-sm text-[#00C853] hover:text-[#00892e] font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" /> Select all protections (recommended)
                </button>
              </div>
            )}

            {/* Step 5: Parties */}
            {step === 5 && (
              <div>
                <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-1">
                  Your details & client info
                </h2>
                <p className="text-gray-400 text-sm mb-5">
                  This fills in the signature blocks. You can always edit these in the preview.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Your Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Your Name / Business Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Jane Smith Design"
                          value={formData.contractorName}
                          onChange={(e) => updateForm("contractorName", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="jane@example.com"
                          value={formData.contractorEmail}
                          onChange={(e) => updateForm("contractorEmail", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Client Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Client Name / Company *
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Corp"
                          value={formData.clientName}
                          onChange={(e) => updateForm("clientName", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Client Email
                        </label>
                        <input
                          type="email"
                          placeholder="client@acme.com"
                          value={formData.clientEmail}
                          onChange={(e) => updateForm("clientEmail", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-3">
          {step > 1 && (
            <button
              onClick={() => setStep((prev) => (prev - 1) as Step)}
              className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-300 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          )}

          {step < 5 ? (
            <button
              onClick={() => setStep((prev) => (prev + 1) as Step)}
              disabled={!canAdvance()}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-navy-900 dark:bg-[#00C853] hover:bg-navy-800 dark:hover:bg-[#00892e] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all active:scale-95"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={!canAdvance()}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#00C853] hover:bg-[#00892e] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[#00C853]/25 transition-all active:scale-95"
            >
              <Zap className="w-5 h-5" /> Generate My Contract Free
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
