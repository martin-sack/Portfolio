import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, FileText, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI/ML Consulting",
    description: "Help your business use AI in simple, practical ways that actually save time and money.",
    features: ["Smart Automation", "Easy AI Tools", "Business Solutions", "Quick Setup"]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Build websites and apps that work well, look good, and don't break the bank.",
    features: ["Modern Websites", "Mobile Apps", "Fast Development", "Easy Updates"]
  },
  {
    icon: FileText,
    title: "Technical Writing & Documentation",
    description: "Write clear guides and instructions that help people understand and use your products easily.",
    features: ["User Guides", "How-to Manuals", "Simple Instructions", "Clear Writing"]
  },
  {
    icon: MessageSquare,
    title: "AI Prompt Engineering",
    description: "Make AI chatbots and tools work better by teaching them exactly what to say and do.",
    features: ["Better AI Responses", "Smart Conversations", "Helpful Chatbots", "Easy Training"]
  },
];

export default function Services() {
  const handleContactClick = () => {
    console.log("Contact for service clicked");
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Services</h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Simple, affordable tech services to help your business grow and solve real problems with smart solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 hover:shadow-lg hover:shadow-ring/10 border-ring/20"
              data-testid={`card-service-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-ring/10 flex items-center justify-center mb-4 group-hover:bg-ring/20 transition-colors">
                  <service.icon className="w-6 h-6 text-ring" />
                </div>
                <CardTitle className="text-lg group-hover:text-ring transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1 h-1 rounded-full bg-ring mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleContactClick}
                  className="w-full group-hover:border-ring/50 group-hover:text-ring"
                  data-testid={`button-contact-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}