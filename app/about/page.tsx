import { Metadata } from "next";
import { Shield, Award, Users, Heart, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – ContractShield AI",
  description: "Built by an actual award-winning contract lawyer and AI team. Learn our story and mission.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy-900 dark:text-white mb-5 leading-tight">
            Built by lawyers and engineers who actually care about freelancers
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We got tired of watching talented freelancers get crushed by predatory contracts. So we built the tool we wish had existed from the start.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 sm:p-12 mb-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#00C853]/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#00C853]" />
            </div>
            <h2 className="font-display font-bold text-2xl">Our Mission</h2>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Freelancers deserve the same contract protection that corporations get — without the $500/hour lawyer bill.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Every week, thousands of freelancers sign contracts with hidden IP grabs, unlimited non-competes, no kill fees, and endless revision clauses. These aren't accidents — they're intentional. ContractShield AI was built to level the playing field.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-16">
          {[
            { icon: Users, value: "5,000+", label: "Freelancers Protected" },
            { icon: Shield, value: "$47M", label: "Income Saved" },
            { icon: Star, value: "4.98/5", label: "Average Rating" },
            { icon: Award, value: "2025", label: "LegalTech Award" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 border border-gray-100 dark:border-navy-700">
              <Icon className="w-6 h-6 text-[#00C853] mx-auto mb-3" />
              <div className="font-display font-bold text-3xl text-navy-900 dark:text-white mb-1">{value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl text-navy-900 dark:text-white mb-3">
            Built by people who get it
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Our team combines 15+ years of contract law experience with world-class AI engineering. We've been on both sides of terrible contracts — and we built this so you never have to be.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: "Alexandra Mercer, J.D.",
                role: "Co-Founder & Chief Legal Advisor",
                bio: "Former BigLaw contract attorney turned freelancer advocate. LegalTech Award Winner 2025. Negotiated 1,000+ commercial contracts before building ContractShield. Knows every trick in the book — and wrote the AI to catch them all.",
                badges: ["Award-Winning Lawyer", "LegalTech 2025", "J.D. Harvard Law"],
              },
              {
                name: "Marcus Chen",
                role: "Co-Founder & CTO",
                bio: "Former ML engineer at a leading AI lab. Built and trained the risk-detection models that power ContractShield. Freelanced himself for 3 years before co-founding — personally experienced the IP clause that inspired this product.",
                badges: ["AI/ML Expert", "Ex-Big Tech", "Freelancer First"],
              },
            ].map((member) => (
              <div key={member.name} className="bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 border border-gray-100 dark:border-navy-700">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">{member.name[0]}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-0.5">
                  {member.name}
                </h3>
                <p className="text-[#00C853] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.badges.map((badge) => (
                    <span key={badge} className="text-xs font-medium bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-gray-300 px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl text-navy-900 dark:text-white mb-8">
            What we stand for
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Radically plain language",
                desc: "Every explanation uses words real humans use. No \"heretofore\", no \"notwithstanding\", no legalese.",
              },
              {
                title: "Privacy first, always",
                desc: "Your contracts are encrypted, never sold, never shared with third parties, and auto-deleted after 30 days unless you choose to save them.",
              },
              {
                title: "Honest about what we are",
                desc: "We're AI-powered assistance. We're not a law firm, and we'll never pretend to be. We'll always recommend a licensed attorney for complex legal situations.",
              },
              {
                title: "Built for the self-employed",
                desc: "Every decision we make — from pricing to features — is filtered through one question: does this help freelancers earn more and sleep better?",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-navy-900 rounded-2xl border border-gray-100 dark:border-navy-700">
                <CheckCircle className="w-5 h-5 text-[#00C853] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-center text-white">
          <Heart className="w-10 h-10 text-[#00C853] mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-3">
            Ready to protect your freelance income?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Join 5,000+ freelancers who audit and generate contracts with ContractShield AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/audit" className="px-6 py-3 bg-[#00C853] hover:bg-[#00892e] text-white font-bold rounded-xl transition-all">
              Audit My Contract
            </Link>
            <Link href="/generate" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all">
              Generate Free Contract
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
