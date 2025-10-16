import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  color?: string;
}

export default function SkillBadge({ name, icon: Icon, color = "ring" }: SkillBadgeProps) {
  const colorClasses = {
    ring: "bg-ring/10 text-ring border-ring/20 hover:bg-ring/20",
    accent: "bg-accent/10 text-accent-foreground border-accent/20 hover:bg-accent/20",
    primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.ring;

  return (
    <div 
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 hover:scale-105 ${selectedColor}`}
      data-testid={`badge-skill-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
}