import { Metadata } from "next";
import { Lock, Shield, Eye, Trash2, Server, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy – ContractShield AI",
  description: "How ContractShield AI collects, uses, and protects your data.",
};

const lastUpdated = "March 15, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <Lock className="w-4 h-4" />
            Privacy Policy
          </div>
          <h1 className="font-display font-bold text-4xl text-navy-900 dark:text-white mb-4">
            Your privacy, plainly explained
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Key summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              icon: Trash2,
              color: "text-red-500",
              bg: "bg-red-50 dark:bg-red-950/30",
              title: "Auto-Deleted in 30 Days",
              desc: "Uploaded contracts are automatically and permanently deleted 30 days after upload unless you choose to save them to your account.",
            },
            {
              icon: Lock,
              color: "text-blue-500",
              bg: "bg-blue-50 dark:bg-blue-950/30",
              title: "256-bit AES Encryption",
              desc: "All uploaded files are encrypted with 256-bit AES encryption at rest and in transit. We use TLS 1.3 for all data transfer.",
            },
            {
              icon: Eye,
              color: "text-purple-500",
              bg: "bg-purple-50 dark:bg-purple-950/30",
              title: "Never Sold or Shared",
              desc: "Your contracts and personal data are never sold to or shared with third parties for advertising, training, or any other purpose.",
            },
            {
              icon: Shield,
              color: "text-[#00C853]",
              bg: "bg-green-50 dark:bg-green-950/30",
              title: "GDPR Ready",
              desc: "We comply with GDPR and other applicable privacy regulations. EU/UK users have full rights of access, correction, and deletion.",
            },
          ].map(({ icon: Icon, color, bg, title, desc }) => (
            <div key={title} className={`p-5 rounded-2xl border-0 ${bg}`}>
              <Icon className={`w-6 h-6 ${color} mb-3`} />
              <h3 className="font-bold text-navy-900 dark:text-white mb-1.5">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Policy content */}
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
          {[
            {
              title: "1. Information We Collect",
              content: [
                "Account information: When you create an account, we collect your email address and a hashed password. We do not store plain-text passwords.",
                "Uploaded contracts: Files you upload for analysis are stored temporarily, encrypted, and processed by our AI systems. They are automatically deleted 30 days after upload unless you explicitly save them to your account.",
                "Generated contracts: Contracts you generate through our wizard are associated with your account if you're logged in. You can delete them at any time.",
                "Usage data: We collect anonymized, aggregated data about how users interact with ContractShield AI to improve our service (e.g., which features are used, error rates). This data does not identify individual users.",
                "Payment information: Payment processing is handled entirely by Stripe. We never see or store your full credit card number. We only receive confirmation of successful payments.",
              ],
            },
            {
              title: "2. How We Use Your Information",
              content: [
                "To provide the services you request — auditing uploaded contracts and generating new ones.",
                "To authenticate your identity and maintain your account.",
                "To send you transactional emails related to your account (receipt of payment, file deletion notifications).",
                "To improve our AI models and product features using anonymized, aggregated data only — never your specific contracts.",
                "We do NOT use your contracts to train our AI models without your explicit written consent.",
                "We do NOT sell your data to advertisers, data brokers, or any other third parties.",
              ],
            },
            {
              title: "3. Data Retention",
              content: [
                "Uploaded contract files: Automatically and permanently deleted 30 days after upload, unless you save them to your account.",
                "Saved contract files: Retained until you delete them or close your account.",
                "Account data: Retained while your account is active. You can request deletion at any time.",
                "Payment records: Retained as required by applicable tax and financial regulations (typically 7 years).",
                "Anonymized analytics: Retained indefinitely as they cannot be linked to individual users.",
              ],
            },
            {
              title: "4. Data Security",
              content: [
                "All uploaded files are encrypted using 256-bit AES encryption at rest.",
                "All data in transit is encrypted using TLS 1.3.",
                "We are SOC 2 Type II compliant, with annual third-party security audits.",
                "Access to production systems is restricted to a small number of authorized engineers.",
                "We conduct regular penetration testing and vulnerability assessments.",
                "In the event of a data breach, we will notify affected users within 72 hours of discovery, as required by GDPR.",
              ],
            },
            {
              title: "5. Third-Party Services",
              content: [
                "Stripe: Payment processing. Governed by Stripe's Privacy Policy.",
                "Vercel: Hosting and edge computing. Data is processed in the US and EU.",
                "Anthropic Claude API: Powers our AI analysis. Contracts are transmitted to Anthropic's API for processing. Anthropic does not use API inputs to train their models by default.",
                "We do not use advertising networks, social tracking pixels, or behavioral analytics tools.",
              ],
            },
            {
              title: "6. Your Rights",
              content: [
                "Access: Request a copy of all personal data we hold about you.",
                "Correction: Request correction of inaccurate personal data.",
                "Deletion: Request deletion of your account and all associated data.",
                "Portability: Request your data in a machine-readable format.",
                "Opt-out: You can opt out of non-essential communications at any time.",
                "To exercise any of these rights, email us at privacy@contractshield.ai. We will respond within 30 days.",
              ],
            },
            {
              title: "7. Cookies",
              content: [
                "We use only essential cookies required for authentication and session management.",
                "We do not use advertising cookies, tracking cookies, or third-party analytics cookies.",
                "You can disable cookies in your browser settings, but this may affect your ability to log in.",
              ],
            },
            {
              title: "8. Contact",
              content: [
                "For privacy inquiries: privacy@contractshield.ai",
                "For security disclosures: security@contractshield.ai",
                "Mailing address: ContractShield AI, [Address], [City, State ZIP]",
              ],
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-4">{title}</h2>
              <ul className="space-y-2">
                {content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 p-5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-300">
            This privacy policy was last updated on {lastUpdated}. We will notify you of material changes via email at least 30 days before they take effect.
          </p>
        </div>
      </div>
    </div>
  );
}
