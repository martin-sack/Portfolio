import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Code, Zap } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "15+",
    label: "Clients Served",
    description: "Local businesses and individuals"
  },
  {
    icon: Code,
    value: "25+",
    label: "Projects Completed",
    description: "AI tools and web applications"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Avg. Efficiency Gain",
    description: "For businesses using my AI solutions"
  },
  {
    icon: Zap,
    value: "60%",
    label: "Faster Response Time",
    description: "With AI chatbot implementations"
  }
];

export default function Impact() {
  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Impact & Results</h2>
          <p className="text-muted-foreground text-lg">
            Measurable outcomes from my AI solutions and development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-ring/20 text-center group hover:shadow-lg hover:shadow-ring/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-ring/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-ring/20 transition-colors">
                  <metric.icon className="w-6 h-6 text-ring" />
                </div>
                <div className="text-3xl font-bold text-ring mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}