"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Eye, EyeOff, Loader2, CheckCircle, AlertCircle, Lock } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { cn } from "@/lib/utils";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  /** Which tab to show by default */
  defaultTab?: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, onSuccess, defaultTab = "login" }: AuthModalProps) {
  const { login, signup } = useAuth();
  const [tab, setTab] = useState<"login" | "signup">(defaultTab);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Reset form when modal opens or tab changes
  useEffect(() => {
    if (isOpen) {
      setTab(defaultTab);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
      setSuccess(false);
      setLoading(false);
    }
  }, [isOpen, defaultTab]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (tab === "signup") {
        if (password !== confirmPassword) throw new Error("Passwords don't match.");
        await signup(email, password, name);
      } else {
        await login(email, password);
      }
      setSuccess(true);
      // Brief success flash, then proceed
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 700);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-md bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-navy-700 overflow-hidden">

              {/* Header */}
              <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 px-8 pt-8 pb-6 text-white text-center">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-14 h-14 bg-[#00C853]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-[#00C853]" />
                </div>
                <h2 className="font-display font-bold text-xl mb-1">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h2>
                <p className="text-gray-300 text-sm">
                  {tab === "login"
                    ? "Log in to save and access your audit results"
                    : "Join 5,000+ freelancers protecting their income"}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100 dark:border-navy-700">
                {(["login", "signup"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setTab(t); setError(""); }}
                    className={cn(
                      "flex-1 py-3.5 text-sm font-semibold transition-all",
                      tab === t
                        ? "text-[#00C853] border-b-2 border-[#00C853]"
                        : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    )}
                  >
                    {t === "login" ? "Log In" : "Sign Up"}
                  </button>
                ))}
              </div>

              {/* Form */}
              <div className="px-8 py-6">
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-6 gap-3"
                    >
                      <div className="w-14 h-14 bg-[#00C853]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-[#00C853]" />
                      </div>
                      <p className="font-bold text-navy-900 dark:text-white">
                        {tab === "login" ? "Logged in!" : "Account created!"}
                      </p>
                      <p className="text-sm text-gray-400">Starting your audit…</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key={tab}
                      initial={{ opacity: 0, x: tab === "login" ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Name field — signup only */}
                      {tab === "signup" && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            placeholder="Jane Smith"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoFocus
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] transition-colors"
                          />
                        </div>
                      )}

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          autoFocus={tab === "login"}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] transition-colors"
                        />
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Password
                          </label>
                          {tab === "login" && (
                            <button
                              type="button"
                              className="text-xs text-[#00C853] hover:text-[#00892e] font-medium transition-colors"
                            >
                              Forgot password?
                            </button>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Min. 6 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            className="w-full px-4 py-3 pr-11 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] transition-colors"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Confirm password — signup only */}
                      {tab === "signup" && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                            Confirm Password
                          </label>
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded-xl text-sm text-navy-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853] transition-colors"
                          />
                        </div>
                      )}

                      {/* Error */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3 text-sm"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {error}
                        </motion.div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-[#00C853] hover:bg-[#00892e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            {tab === "login" ? "Logging in…" : "Creating account…"}
                          </>
                        ) : (
                          tab === "login" ? "Log In & Start Audit" : "Create Account & Start Audit"
                        )}
                      </button>

                      {/* Switch tab */}
                      <p className="text-center text-sm text-gray-400">
                        {tab === "login" ? (
                          <>
                            Don't have an account?{" "}
                            <button
                              type="button"
                              onClick={() => { setTab("signup"); setError(""); }}
                              className="text-[#00C853] font-semibold hover:text-[#00892e]"
                            >
                              Sign up free
                            </button>
                          </>
                        ) : (
                          <>
                            Already have an account?{" "}
                            <button
                              type="button"
                              onClick={() => { setTab("login"); setError(""); }}
                              className="text-[#00C853] font-semibold hover:text-[#00892e]"
                            >
                              Log in
                            </button>
                          </>
                        )}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Trust note */}
                <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                  <Lock className="w-3 h-3 text-[#00C853]" />
                  Encrypted & secure · We never share your data
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
