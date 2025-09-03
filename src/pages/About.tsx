import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 sm:text-5xl">About Angle Institute</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Empowering the next generation of developers with world-class coding education and industry expertise.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Angle Institute, we believe that coding education should be accessible, practical, and transformative. 
                  Our mission is to bridge the gap between academic learning and industry requirements by providing 
                  comprehensive, hands-on training that prepares students for successful careers in technology.
                </p>
                <p className="text-lg text-muted-foreground">
                  We focus on creating an environment where creativity meets technical excellence, ensuring our graduates 
                  are not just coders, but problem solvers who can adapt to the ever-evolving tech landscape.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="border-0 shadow-elegant">
                  <CardHeader className="pb-2">
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      To be the leading coding institute that transforms aspiring developers into industry-ready professionals 
                      through innovative curriculum and personalized learning experiences.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Students Graduated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-elegant">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Community-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    We foster a collaborative learning environment where students support each other's growth and success.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-elegant">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    We maintain the highest standards in education, ensuring our curriculum meets industry demands.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-elegant">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    We continuously update our teaching methods and curriculum to stay ahead of technology trends.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Students Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-semibold">Industry-Connected Learning</h3>
                <p className="text-muted-foreground">
                  Our instructors are active professionals from top tech companies, bringing real-world experience directly to the classroom.
                </p>
              </div>
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-semibold">Personalized Attention</h3>
                <p className="text-muted-foreground">
                  Small class sizes ensure every student receives individual guidance and mentorship throughout their learning journey.
                </p>
              </div>
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-semibold">Project-Based Learning</h3>
                <p className="text-muted-foreground">
                  Build a professional portfolio with real projects that demonstrate your skills to potential employers.
                </p>
              </div>
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-semibold">Career Support</h3>
                <p className="text-muted-foreground">
                  From resume building to interview preparation, we support your entire career transition journey.
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

export default About;