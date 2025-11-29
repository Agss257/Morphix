import { Hero } from "../components/hero";
import { FeatureCard } from "../components/feature-card";
import { AppCard } from "../components/app-card";

export function Home() {
  return (
    <>

      <Hero />

      {/* CONTENIDO PRINCIPAL: container igual al Hero */}
      <div className="w-full max-w-7xl mx-auto px-6">

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Why Morphix?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon="🔄" title="Instant Transform" description="Convert data in real-time" />
            <FeatureCard icon="🔒" title="Privacy First" description="Everything runs locally" />
            <FeatureCard icon="⚡" title="Lightning Fast" description="Optimized parsing engine" />
          </div>
        </section>

        <section className="mt-16 mb-20">
          <h2 className="text-2xl font-bold mb-6">Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AppCard name="Transformer" description="JSON ↔ TS ↔ TOON instantly" icon="🔄" link="/apps/transformer" />
            <AppCard name="DTO Visualizer" description="Visualize structured data" icon="📦" link="/apps/dto-visualizer" />
          </div>
        </section>

      </div>
    </>
  );
}
