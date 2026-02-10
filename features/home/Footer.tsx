import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-700/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <span className="text-sm text-slate-500">
          © TransferLinkz. All rights reserved.
        </span>
        <div className="flex gap-8 text-sm text-slate-400">
          <Link href="#" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="transition hover:text-white">
            Terms
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
