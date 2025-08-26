import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to welcome you to Bella Vista. Make a reservation or get in touch with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        123 Culinary Boulevard<br />
                        Downtown District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        Reservations: (555) 123-4567<br />
                        General Inquiries: (555) 123-4568
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                        <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                        <p>Sunday: 4:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        reservations@bellavista.com<br />
                        info@bellavista.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Quick Reservation
                </h3>
                <form className="space-y-5">
                  {/* Contact Info Group */}
                  <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm uppercase tracking-wide">Contact</h4>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input placeholder="Your full name" className="bg-background/50 h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" className="bg-background/50 h-12" />
                    </div>
                  </div>

                  {/* Reservation Details Group */}
                  <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm uppercase tracking-wide">Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Date
                        </label>
                        <Input type="date" className="bg-background/50 h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Guests
                        </label>
                        <Input type="number" min="1" max="8" placeholder="2" className="bg-background/50 h-12" />
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="xl"
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 min-h-[56px] text-lg font-semibold"
                  >
                    Reserve Your Table
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    We'll call you within 30 minutes to confirm your reservation
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;