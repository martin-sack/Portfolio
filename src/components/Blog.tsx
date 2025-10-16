import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Future of Prompt Engineering: Advanced Techniques for Better AI Outputs",
    description: "Explore cutting-edge prompt engineering strategies that can dramatically improve your AI-generated content quality and consistency.",
    category: "AI & Machine Learning",
    readTime: "8 min read",
    publishDate: "Dec 15, 2024",
    featured: true,
    tags: ["Prompt Engineering", "AI", "GPT-4", "Best Practices"]
  },
  {
    id: 2,
    title: "Building Scalable React Applications with Modern Architecture Patterns",
    description: "Learn how to architect large-scale React applications using component composition, state management, and performance optimization techniques.",
    category: "Web Development",
    readTime: "12 min read",
    publishDate: "Dec 8, 2024",
    featured: false,
    tags: ["React", "Architecture", "JavaScript", "Performance"]
  }
];

const categories = ["All", "AI & Machine Learning", "Web Development", "API Development", "DevOps & ML", "Database & AI", "AI Ethics"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <section id="blog" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-ring" />
            <h2 className="text-4xl font-bold">Technical Writing & Articles</h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Sharing insights, tutorials, and deep dives into AI, web development, and the latest technology trends.
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className={`group transition-all duration-300 hover:shadow-lg hover:shadow-ring/20 ${article.featured ? 'border-ring/50' : 'border-border'}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  {article.featured && (
                    <Badge className="bg-ring/20 text-ring text-xs">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-ring transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Article Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-ring/30 text-ring">
                      {tag}
                    </Badge>
                  ))}
                  {article.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs border-ring/30 text-ring">
                      +{article.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Read More Button */}
                <Button variant="outline" size="sm" className="w-full group-hover:border-ring/50 group-hover:text-ring">
                  Read Article
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-ring/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want More Technical Content?</h3>
              <p className="text-muted-foreground mb-6">
                I regularly publish in-depth articles about AI, web development, and emerging technologies. Follow my blog to stay updated with the latest insights and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  Subscribe to Newsletter
                </Button>
                <Button className="bg-ring/20 hover:bg-ring/30 text-ring border-ring/50 border">
                  View All Articles
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}