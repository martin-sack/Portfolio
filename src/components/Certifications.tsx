import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, CheckCircle } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Introducing Generative AI with AWS",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    description: "Foundation course covering generative AI concepts and AWS services for building AI applications.",
    skills: ["Generative AI", "AWS Services", "Machine Learning", "Cloud Computing"],
    status: "Active"
  },
  {
    id: 2,
    title: "AI Security and Governance",
    issuer: "Professional Training",
    issueDate: "2024",
    description: "Comprehensive training on securing AI systems and implementing governance frameworks.",
    skills: ["AI Security", "Governance", "Risk Management", "Compliance"],
    status: "Active"
  },
  {
    id: 3,
    title: "Data Security Posture Management Fundamentals",
    issuer: "Security Institute",
    issueDate: "2024",
    description: "Essential principles of data security posture management and protection strategies.",
    skills: ["Data Security", "Risk Assessment", "Security Posture", "Management"],
    status: "Active"
  },
  {
    id: 4,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle Corporation",
    issueDate: "2025",
    description: "Associate-level certification demonstrating knowledge of AI foundations on Oracle Cloud Infrastructure.",
    skills: ["Oracle Cloud", "AI Foundations", "Cloud Infrastructure", "Machine Learning"],
    status: "Active"
  },
  {
    id: 5,
    title: "RAG Strategy & Execution: Build Enterprise Knowledge Systems",
    issuer: "AI Academy",
    issueDate: "2024",
    description: "Advanced course on Retrieval-Augmented Generation strategies for building enterprise knowledge systems.",
    skills: ["RAG", "Knowledge Systems", "Vector Databases", "Enterprise AI"],
    status: "Active"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-ring" />
            <h2 className="text-4xl font-bold">Certifications</h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Continuous learning and professional development in AI, security, and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => (
            <Card key={cert.id} className="group transition-all duration-300 hover:shadow-lg hover:shadow-ring/10 border-ring/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {cert.issuer}
                  </Badge>
                  {cert.status === "Active" && (
                    <Badge className="bg-green-500/20 text-green-600 text-xs flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Active
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-ring transition-colors leading-tight">
                  {cert.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {cert.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-3 h-3" />
                  Issued {cert.issueDate}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-ring/30 text-ring">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}