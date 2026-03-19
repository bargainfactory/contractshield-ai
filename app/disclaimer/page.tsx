import { Metadata } from "next";
import { AlertTriangle, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Disclaimer – ContractShield AI",
  description: "Important disclaimer about the nature of ContractShield AI services.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <AlertTriangle className="w-4 h-4" />
            Legal Disclaimer
          </div>
          <h1 className="font-display font-bold text-4xl text-navy-900 dark:text-white mb-4">
            Legal Disclaimer
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Please read this disclaimer carefully before using ContractShield AI.
          </p>
        </div>

        {/* Main disclaimer box */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display font-bold text-xl text-amber-900 dark:text-amber-300 mb-3">
                ContractShield AI is not a law firm and does not provide legal advice
              </h2>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed mb-4">
                The information, analysis, suggestions, and contract templates provided by ContractShield AI are for informational and educational purposes only. They do not constitute legal advice and should not be relied upon as such.
              </p>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Use of ContractShield AI does not create an attorney-client relationship. For advice specific to your legal situation, please consult a licensed attorney in your jurisdiction.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-4">
              What ContractShield AI does
            </h2>
            <div className="space-y-3">
              {[
                "Uses artificial intelligence to analyze contract language and identify potentially unfavorable terms commonly seen in contracts with freelancers",
                "Provides plain-English explanations of contract clauses and their potential implications in general terms",
                "Suggests alternative contract language based on general best practices for freelancers",
                "Generates contract templates based on user inputs and established freelancer-friendly practices",
                "Provides a starting point for contract review and discussion with clients or legal counsel",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00C853] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-4">
              What ContractShield AI does not do
            </h2>
            <div className="space-y-3">
              {[
                "Provide legal advice tailored to your specific legal situation, jurisdiction, or circumstances",
                "Guarantee that any contract language or suggestion is legally enforceable in your jurisdiction",
                "Replace the judgment of a licensed attorney who can review your specific situation",
                "Create an attorney-client relationship or any duty of care",
                "Represent you in legal proceedings or negotiations",
                "Provide advice about tax, regulatory, or compliance matters",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-red-400" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-4">
              Jurisdiction and enforceability
            </h2>
            <p className="mb-3">
              Contract law varies significantly by jurisdiction, country, state, and province. A clause that is enforceable in one jurisdiction may not be enforceable in another. ContractShield AI's analysis is based on general principles and may not account for:
            </p>
            <div className="space-y-2 mb-4">
              {[
                "Specific laws in your state, country, or jurisdiction",
                "Industry-specific regulations that may affect your contract",
                "Recent legal developments or case law",
                "Your specific business circumstances or relationship with the other party",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Always consult a licensed attorney in your jurisdiction before entering into any significant contract.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-4">
              Limitation of liability
            </h2>
            <p>
              ContractShield AI, its founders, employees, and affiliates shall not be liable for any damages resulting from your reliance on information provided by the Service. This includes, without limitation, any decision to sign or not sign a contract, any outcome of contract negotiations, or any legal dispute arising from contracts reviewed or generated using the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-4">
              When to consult a lawyer
            </h2>
            <p className="mb-3">We recommend consulting a licensed attorney when:</p>
            <div className="space-y-2">
              {[
                "The contract involves significant money (generally $10,000+)",
                "There are complex IP, equity, or exclusivity clauses",
                "The contract involves employees, partners, or investors",
                "You are operating in a highly regulated industry",
                "There is an existing legal dispute or threat of litigation",
                "The other party is represented by counsel",
                "You are uncertain about any aspect of the contract",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer links */}
        <div className="mt-12 bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00C853]" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Questions? Contact <span className="text-[#00C853]">legal@contractshield.ai</span>
            </span>
          </div>
          <div className="flex gap-3">
            <Link href="/privacy" className="text-sm text-[#00C853] hover:underline flex items-center gap-1">
              Privacy Policy <ArrowRight className="w-3 h-3" />
            </Link>
            <Link href="/terms" className="text-sm text-[#00C853] hover:underline flex items-center gap-1">
              Terms of Service <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
