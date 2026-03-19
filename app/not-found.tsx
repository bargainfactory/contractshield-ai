import Link from "next/link";
import { Shield, Home, Upload, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-[#00C853]/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Shield className="w-12 h-12 text-[#00C853]" />
        </div>
        <h1 className="font-display font-bold text-7xl text-white mb-4">404</h1>
        <h2 className="font-display font-bold text-2xl text-white mb-3">
          Page not found
        </h2>
        <p className="text-blue-200/70 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back to protecting your freelance business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-navy-900 font-bold rounded-xl hover:bg-gray-50 transition-all"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link
            href="/audit"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00C853] text-white font-bold rounded-xl hover:bg-[#00892e] transition-all"
          >
            <Upload className="w-4 h-4" /> Audit a Contract
          </Link>
          <Link
            href="/generate"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            <FileText className="w-4 h-4" /> Generate Contract
          </Link>
        </div>
      </div>
    </div>
  );
}
