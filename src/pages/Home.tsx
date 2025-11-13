import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AIShowcase from "@/components/AIShowcase";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import GitHubStats from "@/components/GitHubStats";
import CaseStudies from "@/components/CaseStudies";
import { useTheme } from "@/components/ThemeProvider";
import { MessageSquare, MapPin, BookOpen, Code, Brain, Zap, Database, Cpu, Globe, Smartphone, Cloud, Music, Heart } from "lucide-react";

const projects = [
  {
    title: "JamFind – AI-Powered Music Discovery",
    description: "A multi-platform African music discovery website that ranks playlists and tracks based on popularity, tipping, and engagement. Artists and fans interact through real-time feedback, analytics, and gamified charts, all powered by a smart AI recommendation engine.",
    icon: Music,
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "Node.js", "Spotify API", "AI Recommendations"],
    liveUrl: "https://jam-find.vercel.app/",
    githubUrl: "https://github.com/martin-sack/jamfind",
    featured: true
  },
  {
    title: "Impact Bridge – Community Investment Platform",
    description: "A web platform connecting local African entrepreneurs with global donors and supporters. Users propose real projects (e.g. farms, boreholes, small businesses), and backers contribute through a transparent, story-driven donation model. Includes project tracking, updates, and contributor dashboards.",
    icon: Heart,
    technologies: ["React", "Prisma", "Node.js", "MySQL", "NextAuth", "Mapbox", "Donation API"],
    liveUrl: "https://impact-bridge.netlify.app/",
    githubUrl: "https://github.com/martin-sack/impact-bridge",
    featured: true
  },
  {
    title: "Geospatial Artifact Discovery",
    description: "Interactive website where users click around an interactive map to find hidden historical artifacts and treasures, earning points and unlocking new areas as they explore different geographical locations.",
    icon: MapPin,
    technologies: ["JavaScript", "Geospatial APIs", "Interactive Maps", "Virtual Environment"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    title: "Personal AI Diary with RAG",
    description: "Smart journaling website with AI insights using Retrieval-Augmented Generation to provide personalized recommendations and emotional analysis.",
    icon: BookOpen,
    technologies: ["RAG", "LangChain", "Next.js", "Vector DB", "AI"],
    liveUrl: "https://rag-diary-jb8w.vercel.app/",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    title: "Whisper Voice Translator",
    description: "Simple voice translation website that helps people communicate across languages. Perfect for travelers and language learners.",
    icon: MessageSquare,
    technologies: ["OpenAI API", "JavaScript", "HTML", "Web Speech API"],
    githubUrl: "https://github.com",
    featured: false
  },
  {
    title: "Coding Games Website",
    description: "Simple website where non-coders can play fun games and developers can submit their own coding games to share with the community.",
    icon: Code,
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "HTML5"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  }
];

//todo: remove mock functionality - replace with real skill data
const skills = [
  { name: "Python", icon: Code, color: "ring" as const },
  { name: "TensorFlow", icon: Brain, color: "accent" as const },
  { name: "Next.js", icon: Zap, color: "primary" as const },
  { name: "OpenAI", icon: Database, color: "ring" as const },
  { name: "Machine Learning", icon: Cpu, color: "accent" as const },
  { name: "React", icon: Globe, color: "primary" as const },
  { name: "React Native", icon: Smartphone, color: "ring" as const },
  { name: "Cloud Computing", icon: Cloud, color: "accent" as const }
];

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">PROJECTS</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my latest work in AI, machine learning, and innovative applications that push the boundaries of technology and user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">SKILLS</h2>
            <p className="text-muted-foreground text-lg">
              Technologies and frameworks I work with to create exceptional AI-powered experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}