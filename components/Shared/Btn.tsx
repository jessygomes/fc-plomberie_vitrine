import Link from "next/link";

interface BtnProps {
  children: React.ReactNode;
  href: string;
}

export default function Btn({ children, href }: BtnProps) {
  return (
    <Link
      href={href}
      className="group relative inline-block overflow-hidden px-8 py-4 rounded-md bg-linear-to-r from-noir-500 to-noir-700 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-noir-500/20"
    >
      {/* Effet de brillance animé */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-primary-500/0 transition-all duration-300" />

      <p className="relative z-10 text-center text-white text-sm font-medium font-two tracking-[3px] uppercase group-hover:text-white transition-colors duration-300">
        {children}
      </p>
    </Link>
  );
}
