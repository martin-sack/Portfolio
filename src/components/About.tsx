import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Coffee, Award, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground text-xl">
            Creating simple AI solutions that actually help people every day
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-ring/20">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    I'm a young tech enthusiast from Accra who loves building simple AI tools that make life easier. I believe technology should be helpful, not complicated - so I focus on creating apps and services that anyone can understand and use.
                  </p>
                  <p>
                    My work includes building voice apps that help with language translation, fun animation projects, and smart tools for businesses. I keep things simple - if my grandmother can't figure it out, I need to make it better!
                  </p>
                  <p>
                    What I love most is solving real problems that people face every day. Whether it's helping someone communicate better, making work easier, or just adding a bit of fun to daily life - that's what gets me excited about technology.
                  </p>
                  <p>
                    Based in Accra, I'm always learning new things, meeting other tech people, and working on projects that can grow from small ideas into something that helps lots of people. Every day is a chance to build something better.
                  </p>
                </div>

                {/* Mission & Vision */}
                <div className="mt-8 pt-8 border-t border-ring/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-ring" />
                        <h4 className="font-semibold text-foreground">Mission</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Make AI accessible and useful for African businesses and communities through simple, practical solutions.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-ring" />
                        <h4 className="font-semibold text-foreground">Vision</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Bridge the technology gap in Ghana by creating AI tools that solve real, everyday problems for local people.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Facts */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-ring/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <MapPin className="w-4 h-4 text-ring mr-2" />
                  Quick Facts
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 text-ring mr-3 flex-shrink-0" />
                    <span>Learning something new about AI every single day</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 text-ring mr-3 flex-shrink-0" />
                    <span>Accra, Ghana</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Coffee className="w-4 h-4 text-ring mr-3 flex-shrink-0" />
                    <span>Love Banku, Jollof rice, and coding late into the night</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Award className="w-4 h-4 text-ring mr-3 flex-shrink-0" />
                    <span>Dream: Use tech to solve problems in African communities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-ring/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Core Values</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Innovation</Badge>
                  <Badge variant="secondary" className="text-xs">Ethics</Badge>
                  <Badge variant="secondary" className="text-xs">User-Centric</Badge>
                  <Badge variant="secondary" className="text-xs">Open Source</Badge>
                  <Badge variant="secondary" className="text-xs">Continuous Learning</Badge>
                  <Badge variant="secondary" className="text-xs">Collaboration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-ring/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Fun Facts</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Learned Python by building a simple Ludo game</li>
                  <li>• Best coding happens during harmattan season</li>
                  <li>• Passionate about animating workflows to make tasks fun and easy</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}