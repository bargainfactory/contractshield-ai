import { Metadata } from "next";
import { FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service – ContractShield AI",
  description: "Terms and conditions for using ContractShield AI.",
};

const lastUpdated = "March 15, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <FileText className="w-4 h-4" />
            Terms of Service
          </div>
          <h1 className="font-display font-bold text-4xl text-navy-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Key disclaimer */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-10 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 dark:text-amber-300 mb-1">Important Notice</p>
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              ContractShield AI provides AI-powered contract analysis and generation tools. We are <strong>not a law firm</strong> and do not provide legal advice. Our services are for informational and educational purposes only and do not constitute legal advice, legal services, or the practice of law. For legal advice specific to your situation, please consult a licensed attorney in your jurisdiction.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing or using ContractShield AI (the 'Service'), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. These terms constitute a legally binding agreement between you and ContractShield AI, Inc.",
            },
            {
              title: "2. Description of Service",
              content: "ContractShield AI provides: (a) AI-powered contract analysis that identifies potential risks and suggests alternative language; (b) AI-powered contract generation based on user inputs and templates; (c) a dashboard for managing your audits and generated contracts. The Service is for informational and educational purposes only. Nothing in the Service constitutes legal advice, and use of the Service does not create an attorney-client relationship.",
            },
            {
              title: "3. Not Legal Advice",
              content: "THE SERVICE DOES NOT CONSTITUTE LEGAL ADVICE. ContractShield AI is not a law firm and the Service is not a substitute for legal advice from a qualified attorney. The AI-generated analysis and suggestions are informational only. Laws vary by jurisdiction and individual circumstances. You should consult a licensed attorney before signing any contract or taking any legal action. ContractShield AI expressly disclaims any liability for decisions made based on the Service.",
            },
            {
              title: "4. Account Registration",
              content: "You must create an account to access certain features. You are responsible for maintaining the security of your account credentials. You must provide accurate information and promptly update it if it changes. You must be at least 18 years old to use the Service. You may not share your account or allow others to access it.",
            },
            {
              title: "5. Payment and Refunds",
              content: "The Service offers per-contract pricing. Payments are processed by Stripe. All fees are in USD unless otherwise stated. We offer a 30-day money-back guarantee if you are unsatisfied with a paid service. Refund requests must be submitted via email within 30 days of purchase. Contract generation is free; auditing fees apply as displayed at checkout.",
            },
            {
              title: "6. Your Content",
              content: "You retain all rights to contracts and documents you upload. By uploading content, you grant us a limited, non-exclusive license to process it for the purpose of providing the Service. We process your content only as necessary to deliver the Service and do not use it for any other purpose. See our Privacy Policy for details on retention and deletion.",
            },
            {
              title: "7. Intellectual Property",
              content: "The Service, including all software, AI models, templates, UI design, and content created by ContractShield AI, is owned by ContractShield AI, Inc. and protected by copyright and intellectual property laws. Contracts generated using the Service from your inputs are yours to use freely. You may not reverse engineer, copy, or distribute our AI models or software.",
            },
            {
              title: "8. Prohibited Uses",
              content: "You may not: (a) use the Service to generate fraudulent, deceptive, or illegal contracts; (b) attempt to reverse-engineer our AI models; (c) share account access with others; (d) use the Service to harm, defraud, or misrepresent to third parties; (e) upload malware or harmful code; (f) circumvent any security or access controls.",
            },
            {
              title: "9. Limitation of Liability",
              content: "TO THE FULLEST EXTENT PERMITTED BY LAW, CONTRACTSHIELD AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM. Some jurisdictions do not allow limitation of liability; in such jurisdictions, our liability is limited to the fullest extent permitted by law.",
            },
            {
              title: "10. Indemnification",
              content: "You agree to indemnify and hold ContractShield AI and its officers, directors, employees, and agents harmless from any claims, damages, or expenses (including attorneys' fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any contracts you sign or decisions you make based on the Service.",
            },
            {
              title: "11. Dispute Resolution",
              content: "Disputes arising from these Terms shall be resolved by binding arbitration under the American Arbitration Association's rules, conducted in [State]. You waive the right to participate in class action lawsuits. Either party may seek injunctive relief in court for intellectual property violations. Claims must be brought within one year of the event giving rise to the claim.",
            },
            {
              title: "12. Changes to Terms",
              content: "We may update these Terms. Material changes will be communicated via email at least 30 days before they take effect. Continued use after changes constitutes acceptance. If you disagree with changes, you may close your account before they take effect.",
            },
            {
              title: "13. Contact",
              content: "Questions about these Terms: legal@contractshield.ai. For general support: support@contractshield.ai.",
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-3">{title}</h2>
              <p>{content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
