import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden 
                    bg-slate-50 text-slate-900
                    dark:bg-[#07101a] dark:text-slate-200 
                    transition-colors relative">

      {/* Fondo animado */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br 
                        from-cyan-900/5 via-transparent to-purple-900/5 
                        animate-gradient-magic"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
