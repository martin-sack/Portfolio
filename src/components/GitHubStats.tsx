import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const githubStats = {
  username: "martin-sack",
  totalRepos: 12,
  totalStars: 8,
  totalCommits: 156,
  currentStreak: 7
};

const featuredRepos = [
  {
    name: "ai-chatbot-starter",
    description: "Simple AI chatbot template for small businesses using OpenAI API",
    language: "Python",
    stars: 3,
    forks: 1,
    url: "https://github.com/martin-sack/ai-chatbot-starter"
  },
  {
    name: "voice-translator-app",
    description: "Real-time voice translation app using Whisper API",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/martin-sack/voice-translator-app"
  }
];

const languageColors: { [key: string]: string } = {
  Python: "#3776ab",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  React: "#61dafb"
};

export default function GitHubStats() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="w-8 h-8 text-ring" />
            <h2 className="text-4xl font-bold">Open Source Contributions</h2>
          </div>
          <p className="text-muted-foreground text-xl">
            Building in public and sharing knowledge with the developer community
          </p>
        </div>

        {/* GitHub Stats Overview */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-ring/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ring mb-2">{githubStats.totalRepos}</div>
              <div className="text-sm text-muted-foreground">Public Repos</div>
            </CardContent>
          </Card>
          <Card className="border-ring/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ring mb-2">{githubStats.totalStars}</div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </CardContent>
          </Card>
          <Card className="border-ring/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ring mb-2">{githubStats.totalCommits}</div>
              <div className="text-sm text-muted-foreground">Contributions</div>
            </CardContent>
          </Card>
          <Card className="border-ring/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ring mb-2">{githubStats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Repositories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-ring/20 group hover:shadow-lg hover:shadow-ring/10 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg group-hover:text-ring transition-colors">
                        {repo.name}
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(repo.url, '_blank')}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: languageColors[repo.language] || '#gray' }}
                          ></div>
                          {repo.language}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {repo.forks}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.open(`https://github.com/${githubStats.username}`, '_blank')}
            className="border-ring/50 text-ring hover:bg-ring/10"
          >
            <Github className="w-5 h-5 mr-2" />
            View Full GitHub Profile
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}