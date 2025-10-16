import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mensah",
    role: "Small Business Owner",
    company: "Accra Fashion Hub",
    content: "Martin's AI chatbot transformed our customer service. We now handle 3x more inquiries with faster response times. His simple approach made implementation seamless.",
    rating: 5,
    image: "https://via.placeholder.com/60x60/3b82f6/ffffff?text=SM"
  },
  {
    name: "Dr. Kwame Asante",
    role: "Tech Startup Founder",
    company: "GhanaAI Solutions",
    content: "Working with Martin was refreshing. He doesn't overcomplicate things - just delivers practical AI solutions that actually work. Highly recommend for any AI project.",
    rating: 5,
    image: "https://via.placeholder.com/60x60/3b82f6/ffffff?text=KA"
  },
  {
    name: "Jennifer Osei",
    role: "Project Manager",
    company: "Local NGO",
    content: "Martin helped us automate our data collection process. What used to take hours now takes minutes. His documentation was clear and training was excellent.",
    rating: 5,
    image: "https://via.placeholder.com/60x60/3b82f6/ffffff?text=JO"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What Clients Say</h2>
          <p className="text-muted-foreground text-xl">
            Real feedback from businesses and individuals I've helped with AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-ring/20 group hover:shadow-lg hover:shadow-ring/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-ring/50 mb-4" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-ring text-ring" />
                  ))}
                </div>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
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