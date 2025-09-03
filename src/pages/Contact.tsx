import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 sm:text-5xl">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Have questions about our courses? Ready to start your coding journey? We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">Course Interest</Label>
                    <select id="course" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select a course</option>
                      <option value="web-development">Web Development</option>
                      <option value="uiux-design">UI/UX Design</option>
                      <option value="graphics-design">Graphics Design</option>
                      <option value="frontend-development">Frontend Development</option>
                      <option value="backend-development">Backend Development</option>
                      <option value="fullstack-development">Fullstack Development</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your goals and how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                    <CardDescription>
                      Reach out to us through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@angleinstitute.com</p>
                        <p className="text-muted-foreground">admissions@angleinstitute.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">+1 (555) 765-4321</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">123 Tech Street</p>
                        <p className="text-muted-foreground">Silicon Valley, CA 94000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Office Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-elegant bg-accent/30">
                  <CardHeader>
                    <CardTitle>Schedule a Campus Tour</CardTitle>
                    <CardDescription>
                      Visit our state-of-the-art facilities and meet our instructors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Book a Tour
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Quick answers to common questions about our programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">How long are the courses?</h3>
                <p className="text-muted-foreground">
                  Course duration varies from 8 to 20 weeks depending on the program complexity and depth of coverage.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Do I need prior experience?</h3>
                <p className="text-muted-foreground">
                  No prior experience is required for beginner courses. We have programs for all skill levels.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What's the class size?</h3>
                <p className="text-muted-foreground">
                  We maintain small class sizes of 15-20 students to ensure personalized attention and better learning outcomes.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Is job placement guaranteed?</h3>
                <p className="text-muted-foreground">
                  While we can't guarantee placement, we have a 95% job placement rate and provide comprehensive career support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;