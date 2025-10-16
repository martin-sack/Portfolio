import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function CTA() {
  const handleBookCall = () => {
    console.log("Book consultation clicked");
    // In a real app, this would open a calendar booking system
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-ring/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto">
        <Card className="border-ring/20 overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how AI can transform your business. I offer free 30-minute consultations to explore your needs and potential solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                onClick={handleBookCall}
                className="bg-ring hover:bg-ring/90 text-white px-8 py-6 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleContact}
                className="border-ring/50 text-ring hover:bg-ring/10 px-8 py-6 text-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground mb-1">Quick Response</div>
                <div>Usually reply within 2 hours</div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Free Consultation</div>
                <div>30-minute discovery call at no cost</div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Local Focus</div>
                <div>Supporting Ghanaian businesses</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}