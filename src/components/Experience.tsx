import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Local Tech Startup",
    position: "Junior Developer",
    location: "Accra, Ghana",
    period: "2024 - Present",
    type: "Part-time",
    description: "Learning and building simple AI tools while working on real projects. Focusing on practical solutions that help local businesses and everyday people.",
    achievements: [
      "Built my first chatbot using OpenAI API for a small business",
      "Created a simple voice transcription app for students",
      "Helped 3 local businesses set up basic AI tools",
      "Learned Python and React through hands-on projects"
    ],
    technologies: ["Python", "React", "OpenAI API", "JavaScript", "HTML/CSS"]
  },
  {
    company: "Freelance Projects",
    position: "AI Enthusiast & Developer",
    location: "Accra, Ghana",
    period: "2024",
    type: "Freelance",
    description: "Started learning AI development and taking on small projects to practice and help others. Building simple but useful tools that solve real problems.",
    achievements: [
      "Completed 5 small AI projects for friends and family",
      "Built a simple animation tool using basic 3D software",
      "Created documentation and guides for my projects",
      "Joined local tech meetups and AI learning groups"
    ],
    technologies: ["Python", "ChatGPT API", "Basic 3D Tools", "Figma", "GitHub"]
  },
  {
    company: "Personal Learning",
    position: "Self-Taught AI Student",
    location: "Accra, Ghana",
    period: "2023 - 2024",
    type: "Learning",
    description: "Started my journey into AI and technology by taking online courses and building small projects. Focused on understanding the basics and practical applications.",
    achievements: [
      "Completed online courses in Python and AI basics",
      "Built my first simple website with HTML, CSS, and JavaScript",
      "Started experimenting with AI prompts and ChatGPT",
      "Learned about AI ethics and responsible development"
    ],
    technologies: ["Python Basics", "HTML/CSS", "JavaScript", "AI Tools", "Online Learning Platforms"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <p className="text-muted-foreground text-xl">
            My learning journey in AI and tech - starting small, building practical solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:shadow-ring/10 border-ring/20">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-ring transition-colors">
                      {exp.position}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:text-right">
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 text-ring mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-ring mr-2" />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1 h-1 rounded-full bg-ring mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}