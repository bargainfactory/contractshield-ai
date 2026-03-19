"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import ResultsView from "@/components/audit/ResultsView";
import AuthModal from "@/components/auth/AuthModal";
import { useAuth } from "@/components/providers/AuthProvider";

type Stage = "upload" | "analyzing" | "results";

const ANALYSIS_STEPS = [
  "Extracting contract text…",
  "Identifying clause types…",
  "Scanning for IP assignment risks…",
  "Checking non-compete restrictions…",
  "Analyzing payment terms…",
  "Reviewing termination clauses…",
  "Assessing confidentiality scope…",
  "Running award-winning AI model…",
  "Generating plain-English explanations…",
  "Preparing your results…",
];

export default function AuditPage() {
  const { user } = useAuth();
  const [stage, setStage] = useState<Stage>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "standard" | "premium">("standard");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
    },
    maxSize: 15 * 1024 * 1024,
    maxFiles: 1,
  });

  const runAnalysis = () => {
    setStage("analyzing");
    setProgress(0);
    setCurrentStep(0);

    // Simulate analysis progress
    let step = 0;
    const totalSteps = ANALYSIS_STEPS.length;
    const stepDuration = 400;

    const interval = setInterval(() => {
      step += 1;
      setCurrentStep(step);
      setProgress(Math.round((step / totalSteps) * 100));

      if (step >= totalSteps) {
        clearInterval(interval);
        setTimeout(() => setStage("results"), 600);
      }
    }, stepDuration);
  };

  const startAnalysis = () => {
    if (!file) return;
    // If not logged in, show auth modal first; runAnalysis is called on success
    if (!user) {
      setShowAuthModal(true);
    } else {
      runAnalysis();
    }
  };

  if (stage === "results") {
    return <ResultsView fileName={file?.name ?? "Contract.pdf"} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] px-4 py-2 rounded-full text-sm font-semibold mb-5"
          >
            <Shield className="w-4 h-4" />
            AI Contract Auditor
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-navy-900 dark:text-white mb-4"
          >
            Audit Your Contract
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg"
          >
            Upload your contract. Get risks flagged in plain English in under 10 seconds.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {stage === "upload" && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Plan selector */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-6">
                <h2 className="font-semibold text-navy-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Select Your Plan
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {(["basic", "standard", "premium"] as const).map((plan) => {
                    const labels = {
                      basic: { name: "Basic", price: "$29", desc: "Risk flags + explanations" },
                      standard: { name: "Standard", price: "$49", desc: "Flags + AI rewrites" },
                      premium: { name: "Premium", price: "$79", desc: "Flags + rewrites + lawyer" },
                    };
                    const l = labels[plan];
                    return (
                      <button
                        key={plan}
                        onClick={() => setSelectedPlan(plan)}
                        className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                          selectedPlan === plan
                            ? "border-[#00C853] bg-[#00C853]/5 dark:bg-[#00C853]/10"
                            : "border-gray-200 dark:border-navy-600 hover:border-gray-300 dark:hover:border-navy-500"
                        }`}
                      >
                        {plan === "standard" && (
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#00C853] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                            Popular
                          </span>
                        )}
                        <div className="font-bold text-navy-900 dark:text-white text-lg">{l.price}</div>
                        <div className="font-semibold text-navy-900 dark:text-white text-sm">{l.name}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{l.desc}</div>
                        {selectedPlan === plan && (
                          <CheckCircle className="absolute top-3 right-3 w-4 h-4 text-[#00C853]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drop zone */}
              <div
                {...getRootProps()}
                className={`relative bg-white dark:bg-navy-900 rounded-2xl border-2 border-dashed transition-all cursor-pointer group ${
                  isDragActive
                    ? "border-[#00C853] bg-[#00C853]/5"
                    : file
                    ? "border-[#00C853]/50 bg-[#00C853]/3"
                    : "border-gray-200 dark:border-navy-600 hover:border-[#00C853]/50"
                }`}
              >
                <input {...getInputProps()} />
                <div className="p-12 flex flex-col items-center text-center">
                  <motion.div
                    animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                      file ? "bg-[#00C853]/15" : "bg-gray-50 dark:bg-navy-800 group-hover:bg-[#00C853]/5"
                    }`}
                  >
                    {file ? (
                      <FileText className="w-8 h-8 text-[#00C853]" />
                    ) : (
                      <Upload className={`w-8 h-8 ${isDragActive ? "text-[#00C853]" : "text-gray-400"}`} />
                    )}
                  </motion.div>

                  {file ? (
                    <div>
                      <p className="font-semibold text-navy-900 dark:text-white mb-1">{file.name}</p>
                      <p className="text-sm text-gray-400">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                        className="mt-3 text-xs text-red-500 hover:text-red-600 flex items-center gap-1 mx-auto"
                      >
                        <X className="w-3 h-3" /> Remove file
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="font-semibold text-navy-900 dark:text-white text-lg mb-2">
                        {isDragActive ? "Drop your contract here!" : "Drag & drop your contract"}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        or <span className="text-[#00C853] font-medium">click to browse files</span>
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" /> PDF
                        </span>
                        <span className="w-px h-3 bg-gray-200 dark:bg-navy-600" />
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" /> DOCX
                        </span>
                        <span className="w-px h-3 bg-gray-200 dark:bg-navy-600" />
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" /> TXT
                        </span>
                        <span className="w-px h-3 bg-gray-200 dark:bg-navy-600" />
                        <span>Max 15 MB</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {fileRejections.length > 0 && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">
                    {fileRejections[0].errors[0].message}. Please upload a PDF, DOCX, or TXT file under 15 MB.
                  </span>
                </div>
              )}

              {/* Trust row */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#00C853]" /> 256-bit encrypted
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#00C853]" /> Never shared with third parties
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00C853]" /> Auto-deleted after 30 days
                </span>
              </div>

              {/* CTA button */}
              <button
                onClick={startAnalysis}
                disabled={!file}
                className="w-full py-4 bg-[#00C853] hover:bg-[#00892e] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[#00C853]/25 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                {file ? `Audit My Contract — ${{ basic: "29", standard: "49", premium: "79" }[selectedPlan]}` : "Upload a contract to continue"}
              </button>

              {user && (
                <p className="text-center text-xs text-gray-400">
                  Logged in as <span className="font-semibold text-navy-900 dark:text-white">{user.email}</span>
                </p>
              )}

              <p className="text-center text-xs text-gray-400">
                Demo mode: click "Audit My Contract" after uploading any file to see a full sample audit result.{" "}
                <Link href="/generate" className="text-[#00C853] hover:underline">
                  Or generate a new contract free →
                </Link>
              </p>
            </motion.div>
          )}

          {stage === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 p-10 text-center"
            >
              {/* Animated shield */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 bg-gradient-to-br from-[#00C853] to-[#00892e] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#00C853]/30"
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="font-display font-bold text-2xl text-navy-900 dark:text-white mb-2">
                Analyzing with award-winning AI model…
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Scanning every clause for risks that hurt freelancers
              </p>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2.5 bg-gray-100 dark:bg-navy-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00C853] to-[#69F0AE] rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Current step */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-[#00C853] font-medium"
                >
                  {ANALYSIS_STEPS[Math.min(currentStep, ANALYSIS_STEPS.length - 1)]}
                </motion.p>
              </AnimatePresence>

              {/* Completed steps checklist */}
              <div className="mt-8 space-y-2 text-left max-w-sm mx-auto">
                {ANALYSIS_STEPS.slice(0, currentStep).map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-xs text-gray-400"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#00C853] flex-shrink-0" />
                    {step}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={runAnalysis}
        defaultTab="signup"
      />
    </div>
  );
}
