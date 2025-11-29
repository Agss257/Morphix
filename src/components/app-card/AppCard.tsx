import { Link } from "react-router-dom";

interface AppCardProps {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export function AppCard({ name, description, icon, link }: AppCardProps) {
  return (
    <Link to={link} className="block rounded-xl border border-white/6 bg-white/2 p-5 hover:scale-[1.01] transition-transform">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{icon}</div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-slate-300 text-sm">{description}</div>
          </div>
        </div>
        <div className="text-slate-400">→</div>
      </div>
    </Link>
  );
}
