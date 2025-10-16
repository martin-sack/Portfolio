import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, Video, Music, FileText, Sparkles, Play, Download, ExternalLink } from "lucide-react";
import { useState } from "react";

const aiCreations = [
  {
    id: 1,
    type: "image",
    title: "AI-Generated Concept Art",
    description: "Futuristic cityscape generated using advanced prompt engineering techniques with DALL-E and Midjourney",
    prompt: "A bustling cyberpunk city at night, neon-lit skyscrapers reflecting in rain-soaked streets, flying cars, holographic advertisements, cinematic lighting, hyper-realistic, 8K resolution",
    category: "Visual Art",
    tools: ["DALL-E 3", "Midjourney", "Adobe Photoshop"],
    featured: true
  },
  {
    id: 2,
    type: "video",
    title: "AI-Animated Product Demo",
    description: "Product demonstration video created using AI video generation and custom prompt sequences",
    prompt: "Professional product showcase animation: sleek smartphone rotating on minimalist white background, smooth camera movements, premium lighting, commercial quality",
    category: "Marketing",
    tools: ["RunwayML", "Stable Video Diffusion", "After Effects"],
    featured: false
  }
];

const typeIcons = {
  image: ImageIcon,
  video: Video,
  audio: Music,
  text: FileText
};

const categories = ["All", "Visual Art", "Marketing", "Audio", "Documentation", "Game Design", "Education"];

export default function AIShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCreations = selectedCategory === "All" 
    ? aiCreations 
    : aiCreations.filter(item => item.category === selectedCategory);

  return (
    <section id="ai-showcase" className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-ring" />
            <h2 className="text-4xl font-bold">AI Prompt Engineering Showcase</h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Explore my expertise in prompt engineering across images, videos, audio, and text generation. Each piece demonstrates advanced prompting techniques and AI tool mastery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-ring/20 text-ring border-ring/50" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* AI Creations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreations.map((creation) => {
            const TypeIcon = typeIcons[creation.type as keyof typeof typeIcons];
            return (
              <Card key={creation.id} className={`group transition-all duration-300 hover:shadow-lg hover:shadow-ring/20 ${creation.featured ? 'border-ring/50' : 'border-border'}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-ring/10 flex items-center justify-center">
                        <TypeIcon className="w-5 h-5 text-ring" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs mb-2">
                          {creation.category}
                        </Badge>
                        {creation.featured && (
                          <Badge className="ml-2 bg-ring/20 text-ring text-xs">Featured</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-ring transition-colors">
                    {creation.title}
                  </CardTitle>
                  <CardDescription>{creation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Thumbnail Placeholder */}
                  <div className="w-full h-48 bg-secondary/30 rounded-lg mb-4 flex items-center justify-center group-hover:bg-secondary/50 transition-colors">
                    <div className="text-center">
                      <TypeIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {creation.type === 'image' ? 'AI Generated Image' : 
                         creation.type === 'video' ? 'AI Generated Video' : 'AI Generated Content'}
                      </p>
                    </div>
                  </div>

                  {/* Prompt */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-ring">Prompt Used:</h4>
                    <p className="text-xs text-muted-foreground bg-secondary/20 p-3 rounded border-ring/30 italic">
                      "{creation.prompt}"
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Tools:</h4>
                    <div className="flex flex-wrap gap-1">
                      {creation.tools.map((tool, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-ring/30 text-ring">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-ring/20">
                    <Button variant="outline" size="sm" className="flex-1 group-hover:border-ring/50 group-hover:text-ring">
                      <Play className="w-3 h-3 mr-1" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 group-hover:border-ring/50 group-hover:text-ring">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}