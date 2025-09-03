import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import img from "../assets/smallertest4.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Course images
import webDevImage from "@/assets/web-development.jpg";
import uiuxImage from "@/assets/uiux-design.jpg";
import graphicsImage from "@/assets/graphics-design.jpg";

const featuredCourses = [
  {
    title: "Web Development",
    description:
      "Master HTML, CSS, JavaScript and modern web technologies to build responsive websites and web applications.",
    duration: "12 weeks",
    level: "Beginner",
    projects: 8,
    image: webDevImage,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "UI/UX Design",
    description:
      "Learn user interface and user experience design principles, wireframing, prototyping, and design tools.",
    duration: "10 weeks",
    level: "Intermediate",
    projects: 6,
    image: uiuxImage,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    title: "Graphics Design",
    description:
      "Create stunning visual designs, logos, and brand identities using industry-standard design software.",
    duration: "8 weeks",
    level: "Beginner",
    projects: 10,
    image: graphicsImage,
    skills: ["Photoshop", "Illustrator", "InDesign", "Branding"],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Bootcamp Programs Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[radial-gradient(circle_at_top_left,_#ffffff,_#f0f9ff,_#dbeafe,_#bae6fd)]">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#136B7D] mb-4 leading-snug">
                AFFORDABLE <br /> AND TOP CODING <br /> BOOTCAMPS AND <br /> CLASSES
              </h2>

              <p className="font-semibold mb-4">
                FIND THE SPECIFIC TRAINING YOU NEED, <br /> TAUGHT BY LEADING INDUSTRY EXPERTS.
              </p>

              <p className="text-[#136B7D] mb-8 leading-relaxed">
                Our coding classes are designed to support people who have jobs, kids, and busy lives,
                which is why most of our classes are offered on weekends and are 1–2 hours long.
                Whether you’re just starting or have experience, we’ve got something for you.
                Plus, we offer affordable bootcamps.
              </p>

              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-gradient-primary text-white hover:shadow-lg transition w-full sm:w-auto"
                >
                  VIEW ALL COURSES <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <div className="mt-10 flex justify-center lg:justify-start">
                <img
                  src={img}
                  alt="Hero showcase"
                  className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl md:translate-y-20 translate-y-0 z-10 rounded-2xl shadow-xl object-contain"
                />
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 divide-y divide-border rounded-lg overflow-hidden shadow-md bg-white">
              {[
                {
                  title: "1. Bootcamp Programs",
                  desc: "No programming knowledge required.",
                  body:
                    "Our hands-on, affordable, and intensive bootcamp programs will prepare you for a software/web/data engineer role in just 16 weekends.",
                  link: "/bootcamps",
                  programs: "4 Programs",
                },
                {
                  title: "2. Introduction to Programming Courses",
                  desc: "No programming knowledge is required.",
                  body:
                    "This course is for anyone new to programming. It starts from scratch and walks you through the fundamentals.",
                  link: "/intro-programming",
                  programs: "2 Programs",
                },
                {
                  title: "3. Data Analysis Courses",
                  desc: "No prior knowledge is required.",
                  body:
                    "Data science opportunities are growing. Get real-world knowledge and hands-on experience to succeed in this field.",
                  link: "/data-analysis",
                  programs: "3 Programs",
                },
                {
                  title: "4. Web and Mobile Programming Courses",
                  desc: "Basic programming knowledge is required.",
                  body:
                    "Learn to build full-stack web apps with React and mobile apps with React Native for Android and iOS.",
                  link: "/web-mobile",
                  programs: "5 Programs",
                },
                {
                  title: "5. Advanced Programming Courses",
                  desc: "Programming knowledge required.",
                  body:
                    "Take your skills to the next level with courses designed to teach advanced programming concepts practically.",
                  link: "/advanced",
                  programs: "4 Programs",
                },
                {
                  title: "6. Interview Preparation Courses",
                  desc: "Programming knowledge required.",
                  body:
                    "Master technical interviews with confidence and land tech roles with our focused interview prep courses.",
                  link: "/interview-prep",
                  programs: "2 Programs",
                },
              ].map((item, idx) => (
                <Card className="rounded-none bg-[#098ba5] border-0" key={idx}>
                  <CardHeader>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <CardDescription className="text-white">{item.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-white">
                    {item.body}
                    <br />
                    <Link to={item.link} className="text-black font-medium">
                      <br />
                      <button className="bg-border rounded-md px-3 py-1 hover:bg-blue-100 hover:text-[#098ba5] transition">
                        {item.programs}
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 bg-[#098ba5] px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Featured Courses
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Start your coding journey with our most popular courses designed by industry experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {featuredCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-gradient-primary text-white hover:shadow-lg transition w-full sm:w-auto"
                >
                  View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-[radial-gradient(circle_at_top_left,_#ffffff,_#f0f9ff,_#dbeafe,_#bae6fd)]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Angle Institute?
              </h2>
              <p className="text-muted-foreground text-lg">
                We provide comprehensive coding education with real-world experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Industry-Relevant Curriculum",
                  text: "Courses built with input from tech companies to ensure you learn in-demand skills.",
                },
                {
                  icon: Users,
                  title: "Expert Instructors",
                  text: "Learn from developers who’ve worked at companies like Google, Meta, and Microsoft.",
                },
                {
                  icon: Star,
                  title: "Job Placement Support",
                  text: "Get portfolio reviews, career guidance, and job search support.",
                },
              ].map(({ icon: Icon, title, text }, idx) => (
                <Card key={idx} className="border-0 shadow-md bg-white">
                  <CardHeader className="text-center">
                    <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{text}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[radial-gradient(circle_at_top_left,_#ffffff,_#f0f9ff,_#dbeafe,_#bae6fd)] text-black">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of students who have transformed their careers with our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="shadow-md w-full sm:w-auto">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-black hover:bg-white/10 w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
