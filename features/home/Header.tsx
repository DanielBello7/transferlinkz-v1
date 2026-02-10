import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data/home";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50 bg-[#0c1222]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/transferlinkz-logo.png"
            alt="TransferLinkz"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl font-semibold tracking-tight text-cyan-400">
            TransferLinkz
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="btn-cta-gradient flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition"
          >
            Contact
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
