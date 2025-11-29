interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-white/6 bg-white/2 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}
