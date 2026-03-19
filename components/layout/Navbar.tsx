"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Audit Contract", href: "/audit" },
  { label: "Generate Contract", href: "/generate" },
  { label: "Dashboard", href: "/dashboard" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-navy-800"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00C853] to-[#00892e] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow-green transition-all duration-300">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00C853] rounded-full border-2 border-white dark:border-navy-950 animate-pulse" />
            </div>
            <div>
              <span
                className={cn(
                  "font-display font-bold text-lg leading-none",
                  scrolled || !isHome
                    ? "text-navy-900 dark:text-white"
                    : "text-white"
                )}
              >
                ContractShield
              </span>
              <span className="text-[#00C853] font-bold text-lg leading-none"> AI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      scrolled || !isHome
                        ? "text-gray-600 hover:text-navy-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-800"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-navy-900 rounded-xl shadow-xl border border-gray-100 dark:border-navy-700 py-1 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    pathname === link.href
                      ? "bg-[#00C853]/10 text-[#00C853]"
                      : scrolled || !isHome
                      ? "text-gray-600 hover:text-navy-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-800"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  scrolled || !isHome
                    ? "text-gray-500 hover:text-navy-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-navy-800"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>
            )}
            <Link
              href="/audit"
              className="px-5 py-2.5 bg-[#00C853] hover:bg-[#00892e] text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-[#00C853]/25 active:scale-95"
            >
              Audit My Contract
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "p-2 rounded-lg",
                  scrolled || !isHome
                    ? "text-gray-500 dark:text-gray-400"
                    : "text-white/70"
                )}
              >
                {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-lg",
                scrolled || !isHome
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-white"
              )}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-navy-950 border-t border-gray-100 dark:border-navy-800"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-navy-800 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "bg-[#00C853]/10 text-[#00C853]"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-800"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-gray-100 dark:border-navy-800">
                <Link
                  href="/audit"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-[#00C853] hover:bg-[#00892e] text-white text-sm font-semibold rounded-xl transition-all"
                >
                  Audit My Contract Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
