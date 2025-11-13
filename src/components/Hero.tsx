import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
const profileImage = "/IMG_0301.JPG";

export default function Hero() {
  const handleExploreWork = () => {
    console.log("Explore work clicked - scrolling to projects");
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-12 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ring/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          className="space-y-8 lg:pr-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-ring">Martin</span>{" "}
              —
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creating Simple{" "}
              <span className="text-ring font-semibold">AI Solutions</span> That{" "}
              <span className="text-ring font-semibold">Actually Help</span>.
            </motion.p>
            
            {/* Status Badge */}
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for new projects • Accra, Ghana (GMT+0)</span>
            </motion.div>
          </div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={handleExploreWork}
              data-testid="button-explore-work"
              className="group bg-ring/20 hover:bg-ring/30 text-ring border-ring/50 border backdrop-blur-sm text-lg px-8 py-6 rounded-lg font-medium tracking-wide"
            >
              EXPLORE MY WORK
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-ring/50 text-ring hover:bg-ring/10 text-lg px-8 py-6"
              onClick={() => {
                // In a real app, this would download the resume
                console.log("Download resume clicked");
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open("https://github.com/martin-sack", "_blank")}
                className="text-muted-foreground hover:text-ring"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open("https://www.linkedin.com/in/martin-azumah-sackey-783063332/", "_blank", "noopener,noreferrer")}
                className="text-muted-foreground hover:text-ring"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image - Right Side */}
        <motion.div 
          className="flex justify-center lg:justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative group">
            {/* Animated outer glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ring/40 to-accent/40 p-1 animate-spin [animation-duration:8s]">
              <div className="w-full h-full rounded-full bg-transparent border border-ring/20"></div>
            </div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-l from-accent/30 to-ring/30 p-1 animate-spin [animation-duration:6s] [animation-direction:reverse]">
              <div className="w-full h-full rounded-full bg-transparent border border-accent/20"></div>
            </div>
            
            {/* Pulsing inner glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-ring/50 to-accent/50 animate-pulse [animation-duration:2s]">
              <div className="w-full h-full rounded-full bg-background opacity-90"></div>
            </div>
            
            {/* Profile image container with hover effects */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-ring/30 transition-all duration-500 group-hover:border-ring/50 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-ring/20">
              <img
                src={profileImage}
                alt="Joseph - AI Developer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                data-testid="img-profile"
              />
              {/* Overlay gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ring/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}