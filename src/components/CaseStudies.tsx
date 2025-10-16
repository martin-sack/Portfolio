import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "AI Customer Service for Fashion Retailer",
    client: "Accra Fashion Hub",
    industry: "Retail",
    duration: "2 weeks",
    problem: "Manual customer service was overwhelming during peak hours, leading to delayed responses and lost sales.",
    solution: "Implemented an AI chatbot using OpenAI API that handles common inquiries, product recommendations, and order tracking.",
    results: [
      { metric: "Response Time", improvement: "From 4 hours to 30 seconds", icon: Clock },
      { metric: "Customer Satisfaction", improvement: "Increased by 85%", icon: TrendingUp },
      { metric: "Daily Inquiries Handled", improvement: "300% increase", icon: Users },
      { metric: "Sales Conversion", improvement: "40% improvement", icon: Zap }
    ],
    technologies: ["OpenAI API", "Python", "Flask", "WhatsApp Business API"],
    testimonial: "Martin's chatbot transformed our customer service. We can now handle 3x more customers with better satisfaction rates.",
    featured: true
  },
  {
    id: 2,
    title: "Voice Translation App for NGO",
    client: "Community Outreach Ghana",
    industry: "Non-Profit",
    duration: "3 weeks",
    problem: "Language barriers prevented effective communication with rural communities during health education programs.",
    solution: "Built a real-time voice translation app supporting local languages using Whisper API and Google Translate.",
    results: [
      { metric: "Languages Supported", improvement: "5 local dialects", icon: Users },
      { metric: "Translation Accuracy", improvement: "92% accuracy rate", icon: TrendingUp },
      { metric: "Communities Reached", improvement: "200% increase", icon: Zap },
      { metric: "Program Efficiency", improvement: "60% time savings", icon: Clock }
    ],
    technologies: ["Whisper API", "Google Translate", "React Native", "Node.js"],
    testimonial: "This app broke down language barriers and helped us reach more communities effectively.",
    featured: false
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Case Studies</h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Real projects, real results. See how AI solutions have transformed businesses and communities in Ghana.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`border-ring/20 overflow-hidden ${study.featured ? 'ring-2 ring-ring/20' : ''}`}>
                <CardHeader className="pb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        {study.featured && (
                          <Badge className="bg-ring/20 text-ring">Featured</Badge>
                        )}
                      </div>
                      <CardDescription className="text-lg">
                        {study.client} • {study.industry} • {study.duration}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-400">The Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">The Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <h4 className="font-semibold text-lg mb-6 text-ring">Results & Impact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <Card key={resultIndex} className="border-ring/10 text-center">
                          <CardContent className="p-4">
                            <result.icon className="w-6 h-6 text-ring mx-auto mb-2" />
                            <div className="font-semibold text-sm mb-1">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.improvement}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-ring/30 text-ring">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-ring/5 p-6 rounded-lg border-l-4 border-ring">
                    <p className="italic text-muted-foreground mb-2">"{study.testimonial}"</p>
                    <p className="text-sm font-medium">— {study.client}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      variant="outline"
                      className="border-ring/50 text-ring hover:bg-ring/10"
                      onClick={() => {
                        const contactSection = document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}