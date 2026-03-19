import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://contractshield.ai"),
  title: "ContractShield AI – Award-Winning AI Contract Auditor & Generator",
  description:
    "Upload any contract in 10 seconds. Get risks flagged + plain-English fixes. Or generate a bulletproof freelancer contract from scratch. Used by 5,000+ freelancers.",
  keywords: [
    "contract audit",
    "AI contract review",
    "freelancer contract",
    "contract generator",
    "legal AI",
    "contract risk analysis",
    "freelance protection",
  ],
  openGraph: {
    title: "ContractShield AI – Protect Your Freelance Income",
    description:
      "AI-powered contract auditing & generation for freelancers. Flag risks, rewrite clauses, generate bulletproof contracts. From $29.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ContractShield AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ContractShield AI – AI Contract Auditor for Freelancers",
    description: "Upload any contract. Get risks flagged. Download a better version. From $29.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
