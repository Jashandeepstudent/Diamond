import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LogoMark className="h-8 w-8" />
            <span className="text-offwhite font-bold tracking-tight">
              DIAMOND MANUFACTURING
            </span>
          </div>
          <p className="text-slate-light text-sm leading-relaxed max-w-xs">
            PVC pipes and pipe rope, manufactured at our unit in Sidco, Bari
            Brahmana.
          </p>
        </div>

        <div>
          <p className="text-offwhite font-bold text-sm mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {[
              { href: "#products", label: "Products" },
              { href: "#why-us", label: "Why Us" },
              { href: "#reviews", label: "Reviews" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-slate-light hover:text-marigold text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-offwhite font-bold text-sm mb-4">Contact</p>
          <ul className="space-y-2.5 text-slate-light text-sm leading-relaxed">
            <li>
              <a href="tel:08082512513" className="hover:text-marigold transition-colors">
                080825 12513
              </a>
            </li>
            <li>
              4 No, near R.S. Cryogenic, Sidco, Bari Brahmana, Jammu, Jammu
              and Kashmir 181133
            </li>
            <li>Open Monday to Saturday</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6">
          <p className="text-slate-light text-xs">
            &copy; {new Date().getFullYear()} Diamond Manufacturing Industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
