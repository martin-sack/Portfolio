import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, FileText, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle Corporation",
    type: "Certification",
    date: "2025",
    icon: Award,
    file: "/Oracle Cloud Infrastructure 2025 AI Foundations Associate.pdf",
    description: "Associate-level certification in AI foundations on Oracle Cloud Infrastructure"
  },
  {
    id: 2,
    title: "AI Security & Governance",
    issuer: "Securiti Education",
    type: "Certification",
    date: "2024",
    icon: Award,
    file: "/AI Securitiy $ Governance.pdf",
    description: "Comprehensive training on AI security and governance frameworks"
  },
  {
    id: 3,
    title: "Data Security Posture Management (DSPM) Fundamentals",
    issuer: "Securiti Education",
    type: "Certification",
    date: "2024",
    icon: Award,
    file: "/DSPM Fundamentals.pdf",
    description: "Fundamentals of data security posture management"
  },
  {
    id: 4,
    title: "RAG Strategy & Execution",
    issuer: "AI Academy",
    type: "Certification",
    date: "2024",
    icon: Award,
    file: "/RAG Strategy & Execution.jpg",
    description: "Advanced course on Retrieval-Augmented Generation strategies"
  },
  {
    id: 5,
    title: "Bachelor's Degree",
    issuer: "University",
    type: "Degree",
    date: "2024",
    icon: GraduationCap,
    file: "/Bachelors Degree.pdf",
    description: "Bachelor's degree in Computer Science / Technology"
  },
  {
    id: 6,
    title: "Academic Transcript",
    issuer: "University",
    type: "Transcript",
    date: "2024",
    icon: FileText,
    file: "/Transcript.pdf",
    description: "Official academic transcript and course records"
  }
];

export default function CertificationsGallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleView = (file: string, title: string) => {
    window.open(file, '_blank');
  };

  const handleDownload = (file: string, title: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title.replace(/[^a-z0-9]/gi, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show only first 3 certifications when collapsed
  const displayedCertifications = isExpanded ? certifications : certifications.slice(0, 3);
  const totalCount = certifications.length;

  return (
    <section id="certifications" className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-ring" />
            <h2 className="text-4xl font-bold">Certifications & Credentials</h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Professional certifications, academic credentials, and continuous learning achievements in AI, security, and cloud technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-ring/20 group hover:shadow-lg hover:shadow-ring/10 transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg bg-ring/10 flex items-center justify-center group-hover:bg-ring/20 transition-colors">
                      <cert.icon className="w-6 h-6 text-ring" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-ring transition-colors leading-tight">
                    {cert.title}
                  </CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {cert.description}
                  </p>
                  
                  <div className="flex gap-2 pt-4 border-t border-ring/20">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleView(cert.file, cert.title)}
                      className="flex-1 group-hover:border-ring/50 group-hover:text-ring"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(cert.file, cert.title)}
                      className="flex-1 group-hover:border-ring/50 group-hover:text-ring"
                    >
                      <FileText className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-ring/20 hover:bg-ring/30 text-ring border-ring/50 border"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                View All {totalCount} Certifications
              </>
            )}
          </Button>
        </div>

        {/* Call to Action */}
        {isExpanded && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-2xl mx-auto border-ring/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground mb-6">
                  I'm committed to staying current with the latest technologies and best practices in AI, security, and cloud computing.
                </p>
                <Button 
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-ring/20 hover:bg-ring/30 text-ring border-ring/50 border"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Let's Work Together
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}