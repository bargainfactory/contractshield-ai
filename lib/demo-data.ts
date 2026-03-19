export interface RiskClause {
  id: string;
  title: string;
  originalText: string;
  riskLevel: "critical" | "medium" | "safe";
  explanation: string;
  impact: string;
  aiFixText: string;
  category: string;
}

export interface AuditResult {
  contractName: string;
  overallRiskScore: number;
  criticalCount: number;
  mediumCount: number;
  safeCount: number;
  clauses: RiskClause[];
  summary: string;
}

export interface DashboardAudit {
  id: string;
  contractName: string;
  date: string;
  riskScore: number;
  criticalIssues: number;
  status: "completed" | "pending" | "expired";
}

export interface DashboardContract {
  id: string;
  name: string;
  type: string;
  date: string;
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  saved?: string;
}

export const DEMO_AUDIT_RESULT: AuditResult = {
  contractName: "Client_Service_Agreement_2024.pdf",
  overallRiskScore: 68,
  criticalCount: 3,
  mediumCount: 4,
  safeCount: 7,
  summary:
    "This contract contains 3 critical issues that could significantly harm your freelance business, including an overly broad IP assignment clause, a non-compete restriction, and a unilateral termination clause with no kill fee. We recommend requesting revisions before signing.",
  clauses: [
    {
      id: "c1",
      title: "Intellectual Property Assignment",
      category: "IP Rights",
      riskLevel: "critical",
      originalText:
        'The Contractor hereby irrevocably assigns to the Client all intellectual property rights, including but not limited to copyrights, patents, trade secrets, and any other proprietary rights in and to any Work Product created under this Agreement, whether or not registerable, throughout the universe in perpetuity.',
      explanation:
        "This clause gives the client ownership of ALL your work product forever — including any tools, frameworks, or creative assets you bring to the project. You can't reuse your own work or show it in your portfolio without their permission.",
      impact: "You could lose the right to use your own code libraries, design systems, or creative assets in future projects.",
      aiFixText:
        'The Client shall own all intellectual property rights in the final deliverables specifically created for this project ("Deliverables"). Contractor retains ownership of all pre-existing intellectual property, tools, frameworks, and general methodologies ("Background IP") used to create the Deliverables. Contractor grants Client a non-exclusive, royalty-free license to use Background IP solely as incorporated into the Deliverables.',
    },
    {
      id: "c2",
      title: "Non-Compete Restriction",
      category: "Competition",
      riskLevel: "critical",
      originalText:
        "For a period of twenty-four (24) months following the termination of this Agreement, Contractor agrees not to provide services to any company operating in the same industry or market segment as the Client, whether directly or indirectly.",
      explanation:
        "A 2-year non-compete in your entire industry is extremely broad and could prevent you from working with other clients in your specialty. Courts often won't enforce these, but fighting one is costly and stressful.",
      impact: "You could be barred from taking on clients in your primary industry for 2 years after this project ends.",
      aiFixText:
        "Contractor agrees not to directly solicit Client's existing customers during the term of this Agreement. No restriction on Contractor's ability to work with other clients in any industry is intended or implied.",
    },
    {
      id: "c3",
      title: "Termination Without Cause / No Kill Fee",
      category: "Payment Protection",
      riskLevel: "critical",
      originalText:
        "Client may terminate this Agreement at any time, for any reason or no reason, with 48 hours written notice. Upon termination, Client shall only be obligated to pay for work completed and accepted prior to the termination date.",
      explanation:
        "The client can cancel with just 2 days notice and only pay for completed work. If you're 80% done on a project, you could get nothing for work in progress. There's no kill fee protection.",
      impact: "You could lose income for weeks of work if the client cancels at any point without a kill fee.",
      aiFixText:
        "Either party may terminate this Agreement with 14 days written notice. In the event Client terminates without cause, Client shall pay: (a) all fees for work completed to date; (b) a kill fee equal to 25% of the remaining contract value; and (c) any approved expenses incurred. Contractor shall deliver all work product completed to the termination date.",
    },
    {
      id: "c4",
      title: "Payment Terms",
      category: "Payment",
      riskLevel: "medium",
      originalText:
        "Client agrees to pay Contractor within sixty (60) days of receipt of invoice. Late payments shall incur interest at 1.5% per month.",
      explanation:
        "Net-60 payment terms are longer than the freelance standard (Net-15 to Net-30). You may need to wait 2 months to get paid for completed work.",
      impact: "Cash flow impact — waiting 60 days for each payment can strain your finances.",
      aiFixText:
        "Client agrees to pay Contractor within fifteen (15) days of receipt of invoice. Invoices unpaid after 15 days shall incur a late fee of 1.5% per month on the outstanding balance. Contractor may suspend work if any invoice is 10 or more days past due.",
    },
    {
      id: "c5",
      title: "Unlimited Revisions",
      category: "Scope",
      riskLevel: "medium",
      originalText:
        "Contractor shall make all revisions and changes requested by Client until Client is satisfied with the final deliverables. There shall be no additional charge for revisions.",
      explanation:
        "\"Until the client is satisfied\" with unlimited free revisions is a scope creep trap. This clause has no limit on the number of revision rounds or the magnitude of changes.",
      impact: "You could be locked into endless revisions with no additional compensation.",
      aiFixText:
        'Deliverables include up to two (2) rounds of revisions within the original project scope. Revisions are defined as minor adjustments that do not alter the fundamental design direction. Additional revision rounds or scope changes will be quoted separately and require written approval before commencement.',
    },
    {
      id: "c6",
      title: "Confidentiality Clause",
      category: "Confidentiality",
      riskLevel: "medium",
      originalText:
        "Contractor agrees to maintain strict confidentiality regarding all Client information, business strategies, and materials, and shall not disclose any such information to third parties without prior written consent.",
      explanation:
        "A one-sided NDA only protects the client. You're sharing confidential info too — your processes, rates, and strategies. Consider requesting mutual confidentiality.",
      impact: "Your business processes and rates could be shared without protection.",
      aiFixText:
        "Both parties agree to maintain strict confidentiality regarding the other party's proprietary information, business strategies, and materials disclosed under this Agreement. Neither party shall disclose the other's confidential information to third parties without prior written consent. This obligation survives termination for 2 years.",
    },
    {
      id: "c7",
      title: "Portfolio Usage Rights",
      category: "Marketing",
      riskLevel: "medium",
      originalText:
        "Contractor shall not display, publish, or reference any work product created under this Agreement without prior written approval from Client on a case-by-case basis.",
      explanation:
        "You can't use this work in your portfolio without asking permission each time. This restricts your ability to showcase your work to future clients.",
      impact: "Your portfolio and testimonials could be blocked, hurting future business development.",
      aiFixText:
        "Contractor may display completed Deliverables in their portfolio, website, and marketing materials after 90 days from project completion or public launch, whichever is earlier. Contractor may identify Client by name unless Client requests confidentiality in writing within 14 days of project completion.",
    },
    {
      id: "c8",
      title: "Governing Law",
      category: "Legal",
      riskLevel: "safe",
      originalText:
        "This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, and any disputes shall be resolved in the courts of New Castle County, Delaware.",
      explanation:
        "Clear governing law is good. Delaware is a well-established legal jurisdiction. If you're not in Delaware, you may want to negotiate for your home jurisdiction.",
      impact: "Minor — may need to negotiate location if you're far from Delaware.",
      aiFixText:
        "This Agreement shall be governed by the laws of [Your State]. Any disputes shall first be submitted to mediation before initiating litigation. Each party shall bear its own attorneys' fees unless a court finds conduct to be in bad faith.",
    },
    {
      id: "c9",
      title: "Independent Contractor Status",
      category: "Classification",
      riskLevel: "safe",
      originalText:
        "Contractor is an independent contractor and not an employee of Client. Contractor is responsible for all taxes and benefits associated with their compensation under this Agreement.",
      explanation:
        "Clear independent contractor classification protects both parties. Your tax responsibilities are clearly stated.",
      impact: "No issues — this is standard and protective.",
      aiFixText:
        "Contractor is an independent contractor and not an employee, partner, or agent of Client. Contractor is responsible for all income taxes, self-employment taxes, and applicable insurances. Client shall provide Form 1099 as required by law.",
    },
    {
      id: "c10",
      title: "Dispute Resolution",
      category: "Legal",
      riskLevel: "safe",
      originalText:
        "The parties agree to attempt good faith negotiation before initiating any formal dispute resolution proceedings. Either party may request mediation as a first step before litigation.",
      explanation:
        "Good faith negotiation and mediation-first is freelancer-friendly. This clause prevents immediate expensive lawsuits.",
      impact: "This is protective — keep this clause.",
      aiFixText:
        "This clause is already well-drafted and protects your interests. No changes recommended.",
    },
  ],
};

export const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "UX Designer",
    company: "Freelance",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "A client slipped a brutal IP clause into a contract that would have handed over my entire design system. ContractShield flagged it in seconds. The AI fix was so well-written my client didn't even push back. Literally saved my business.",
    saved: "$12,000",
  },
  {
    id: "t2",
    name: "Marcus Williams",
    role: "Full-Stack Developer",
    company: "Independent",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "I used to just sign whatever clients sent me. After ContractShield flagged a non-compete that would have killed half my income, I now audit every single contract. The plain-English explanations are gold — I actually understand what I'm signing.",
    saved: "$28,500",
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    role: "Brand Strategist",
    company: "ER Creative",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    text: "The contract generator is incredible. I described my services and in 2 minutes had a beautiful, bulletproof contract that looked like a $5,000 lawyer wrote it. My clients respect it and sign faster because it's so clear.",
    saved: "$8,200",
  },
  {
    id: "t4",
    name: "James Okafor",
    role: "Video Editor",
    company: "Freelance",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    rating: 5,
    text: "A production company tried to include a 'perpetual, royalty-free usage' clause in a $3k project. The AI rewrite made it time-limited and added usage fees. Client agreed, I made $9k total. The $49 scan paid for itself 180x over.",
    saved: "$6,000",
  },
  {
    id: "t5",
    name: "Priya Patel",
    role: "Content Strategist",
    company: "Independent",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
    text: "As someone who was terrible with contracts, ContractShield changed everything. The risk scores are so clear, even I can understand them. I've saved three contracts with AI rewrites that clients actually appreciated for the clarity.",
    saved: "$15,800",
  },
];

export const DEMO_DASHBOARD_AUDITS: DashboardAudit[] = [
  {
    id: "a1",
    contractName: "TechCorp NDA + Services Agreement",
    date: "Mar 15, 2026",
    riskScore: 68,
    criticalIssues: 3,
    status: "completed",
  },
  {
    id: "a2",
    contractName: "Startup Equity + Dev Contract",
    date: "Mar 8, 2026",
    riskScore: 82,
    criticalIssues: 4,
    status: "completed",
  },
  {
    id: "a3",
    contractName: "Agency Retainer Agreement",
    date: "Feb 28, 2026",
    riskScore: 34,
    criticalIssues: 1,
    status: "completed",
  },
  {
    id: "a4",
    contractName: "Photography License Agreement",
    date: "Feb 14, 2026",
    riskScore: 22,
    criticalIssues: 0,
    status: "completed",
  },
];

export const DEMO_DASHBOARD_CONTRACTS: DashboardContract[] = [
  {
    id: "c1",
    name: "Standard Web Dev Contract",
    type: "Web Development",
    date: "Mar 12, 2026",
    client: "Acme Corp",
  },
  {
    id: "c2",
    name: "Brand Design Package",
    type: "Graphic Design",
    date: "Mar 1, 2026",
    client: "StartupXYZ",
  },
  {
    id: "c3",
    name: "Monthly Retainer Agreement",
    type: "Consulting",
    date: "Feb 20, 2026",
    client: "GrowthCo",
  },
];

export const SERVICE_TYPES = [
  "Graphic Design",
  "Web Development",
  "Mobile App Development",
  "Copywriting & Content",
  "Consulting",
  "Photography",
  "Video Editing",
  "UX/UI Design",
  "Social Media Management",
  "SEO & Digital Marketing",
  "Brand Strategy",
  "Illustration",
  "Motion Graphics",
  "Virtual Assistant",
  "Data Analysis",
  "Software Engineering",
  "Project Management",
  "Accounting & Bookkeeping",
  "Translation",
  "Voice Over",
  "Other",
];

export const KEY_PROTECTIONS = [
  { id: "ip", label: "I own my IP — client gets a license, not ownership" },
  { id: "killfee", label: "Kill fee if client cancels without cause" },
  { id: "noncompete", label: "Limit or remove non-compete restriction" },
  { id: "portfolio", label: "Right to show work in my portfolio" },
  { id: "revisions", label: "Limit revision rounds (2 included, rest billable)" },
  { id: "latepayment", label: "Late payment fees (1.5%/month after Net-15)" },
  { id: "scope", label: "Scope creep protection (written approval required)" },
  { id: "deposit", label: "50% deposit before work begins" },
  { id: "expenses", label: "Client reimburses approved expenses" },
  { id: "credit", label: "Right to credit/attribution in published work" },
];

export const DEMO_GENERATED_CONTRACT = `FREELANCE SERVICES AGREEMENT

This Freelance Services Agreement ("Agreement") is entered into as of [DATE] between [YOUR NAME / BUSINESS NAME] ("Contractor") and [CLIENT NAME] ("Client").

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SERVICES

Contractor agrees to provide the following services ("Services") for Client:

[SERVICE DESCRIPTION]

Deliverables shall include:
• [DELIVERABLE 1]
• [DELIVERABLE 2]
• [DELIVERABLE 3]

Project timeline: [START DATE] to [END DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. PAYMENT

Total Project Fee: $[AMOUNT]

Payment Schedule:
• 50% deposit ($[AMOUNT]) due before work begins
• 25% milestone payment ($[AMOUNT]) upon [MILESTONE]
• 25% final payment ($[AMOUNT]) upon delivery and acceptance

Invoices are due within 15 days. Unpaid invoices after 15 days incur a 1.5% monthly late fee. Contractor may pause work on overdue accounts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INTELLECTUAL PROPERTY

Contractor retains ownership of all work until final payment is received in full.

Upon receipt of final payment, Client receives full ownership of final Deliverables specifically created for this project ("Work Product").

Contractor retains ownership of all pre-existing tools, code libraries, design systems, frameworks, and general creative assets ("Background IP"). Client receives a non-exclusive license to use Background IP as incorporated into the Deliverables.

Contractor may display completed work in their portfolio and marketing materials 90 days after project completion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. REVISIONS & SCOPE

This Agreement includes 2 rounds of revisions within the agreed project scope. Each additional revision round is billed at Contractor's standard hourly rate.

Scope changes require written approval and a revised estimate before work proceeds.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. TERMINATION & KILL FEE

Either party may terminate with 14 days written notice.

If Client terminates without cause: Client owes all fees for work completed plus a kill fee equal to 25% of the remaining contract value.

If Contractor terminates without cause: Contractor will complete work in progress and refund any prepaid amounts proportionally.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INDEPENDENT CONTRACTOR

Contractor is an independent contractor, not an employee. Contractor is responsible for their own taxes and insurance. Client will provide Form 1099 as required by law.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONFIDENTIALITY

Both parties agree to keep each other's confidential business information private. This agreement is mutual — it protects both Client and Contractor. This obligation lasts for 2 years after the Agreement ends.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. LIMITATION OF LIABILITY

Contractor's total liability is limited to the fees paid under this Agreement. Neither party is liable for indirect or consequential damages.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DISPUTE RESOLUTION

Disputes will first be resolved through good faith negotiation. If unresolved in 30 days, parties agree to mediation before any litigation.

Governing Law: [YOUR STATE/JURISDICTION]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SIGNATURES

By signing below, both parties agree to the terms of this Agreement.

CONTRACTOR:                          CLIENT:

_______________________              _______________________
[YOUR NAME]                          [CLIENT NAME]

Date: _________________              Date: _________________
`;
