import Link from "next/link";
import { Shield, Lock, CheckCircle, Award } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Audit a Contract", href: "/audit" },
    { label: "Generate a Contract", href: "/generate" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Pricing", href: "/#pricing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/#how-it-works" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const trustBadges = [
  { icon: Lock, label: "256-bit SSL" },
  { icon: CheckCircle, label: "SOC 2 Compliant" },
  { icon: Shield, label: "GDPR Ready" },
  { icon: Award, label: "LegalTech Award 2025" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white">
      {/* Disclaimer banner */}
      <div className="bg-navy-800 dark:bg-navy-900 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-300 leading-relaxed">
            <span className="font-semibold text-[#00C853]">Important:</span>{" "}
            ContractShield AI is AI-powered assistance, not a substitute for licensed legal advice. We are not a law firm and do not provide legal representation. For legal advice specific to your situation, consult a licensed attorney.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00C853] to-[#00892e] rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl">
                ContractShield <span className="text-[#00C853]">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              The award-winning AI contract auditor and generator built specifically for freelancers. Protect your income. Work with confidence.
            </p>
            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-2">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-navy-800 rounded-lg px-3 py-2"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00C853] flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#00C853] text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            {[
              { value: "5,000+", label: "Freelancers Protected" },
              { value: "$47M+", label: "Income Saved" },
              { value: "4.98/5", label: "Average Rating" },
              { value: "2,347", label: "Verified Reviews" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-2xl text-[#00C853]">{value}</div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} ContractShield AI. All rights reserved. Built by lawyers and engineers who care about freelancers.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Lock className="w-3 h-3 text-[#00C853]" />
              <span>Files encrypted with 256-bit AES. Deleted after 30 days unless saved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
