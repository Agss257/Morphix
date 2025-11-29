import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="pt-12 pb-16 w-full">
      
      {/* CONTAINER responsable del ancho */}
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left column */}
          <div>
            <p className="text-sm text-cyan-300/70 font-mono mb-3">morphix.app</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Morphix
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-6">
              Transform data formats instantly in your browser. No installation. 
              No signup. Just paste and convert.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/apps/transformer"
                className="px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold shadow-sm hover:brightness-105"
              >
                Try It Now →
              </Link>

              <div className="text-sm text-slate-400">
                • Privacy first • Client-side
              </div>
            </div>
          </div>

          {/* Right column (demo preview) */}
          <div className="hidden lg:block">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-300 mb-2">
                Live Transformation Demo
              </div>
              <div className="bg-[#07121a] border border-white/10 rounded-md p-3 font-mono text-sm text-slate-200">
                <pre className="whitespace-pre-wrap">
                  {`{ "user": { "id": 12345, "name": "Jane Doe" } }`}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
