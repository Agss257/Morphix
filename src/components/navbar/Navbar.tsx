import { Link } from "react-router-dom";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm bg-black/40 border-b border-white/5">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center text-black font-bold">M</div>
          <Link to="/" className="font-mono font-bold text-slate-100">Morphix</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <Link to="/#features" className="hover:text-cyan-300">Features</Link>
          <Link to="/#formats" className="hover:text-cyan-300">Formats</Link>
          <a href="#" className="px-3 py-1 rounded-md bg-cyan-600/10 text-cyan-300 border border-cyan-700/30 hover:bg-cyan-600/20">Launch App</a>
          <ThemeToggle />
        </nav>

        {/* Mobile minimal: icon + toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="p-2 rounded-md text-slate-200/90">☰</button>
        </div>
      </div>
    </header>
  );
}
