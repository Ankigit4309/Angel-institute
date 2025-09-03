import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import HeroSection from "./HeroSection";

// Course images
import webDevImage from "@/assets/web-development.jpg";
import uiuxImage from "@/assets/uiux-design.jpg";
import graphicsImage from "@/assets/graphics-design.jpg";
import frontendImage from "@/assets/frontend-development.jpg";
import backendImage from "@/assets/backend-development.jpg";
import fullstackImage from "@/assets/fullstack-development.jpg";

const allCourses = [
  {
    title: "Web Development",
    description:
      "Master HTML, CSS, JavaScript and modern web technologies to build responsive websites and web applications from scratch.",
    duration: "12 weeks",
    level: "Beginner",
    projects: 8,
    image: webDevImage,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Git"],
  },
  {
    title: "UI/UX Design",
    description:
      "Learn user interface and user experience design principles, wireframing, prototyping, and design tools to create intuitive digital experiences.",
    duration: "10 weeks",
    level: "Intermediate",
    projects: 6,
    image: uiuxImage,
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping",
      "User Research",
      "Design Systems",
    ],
  },
  {
    title: "Graphics Design",
    description:
      "Create stunning visual designs, logos, and brand identities using industry-standard design software and creative techniques.",
    duration: "8 weeks",
    level: "Beginner",
    projects: 10,
    image: graphicsImage,
    skills: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Branding",
      "Typography",
      "Color Theory",
    ],
  },
  {
    title: "Front End Development",
    description:
      "Build modern, interactive user interfaces using React, Vue, and other cutting-edge frontend frameworks and libraries.",
    duration: "14 weeks",
    level: "Intermediate",
    projects: 7,
    image: frontendImage,
    skills: ["React", "Vue.js", "TypeScript", "Sass", "Webpack", "Redux"],
  },
  {
    title: "Back End Development",
    description:
      "Master server-side programming, databases, APIs, and cloud services to build robust and scalable web applications.",
    duration: "16 weeks",
    level: "Advanced",
    projects: 5,
    image: backendImage,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "AWS"],
  },
  {
    title: "FullStack Development",
    description:
      "Become a complete developer by mastering both frontend and backend technologies to build end-to-end web applications.",
    duration: "20 weeks",
    level: "Advanced",
    projects: 12,
    image: fullstackImage,
    skills: [
      "MERN Stack",
      "Next.js",
      "Express.js",
      "GraphQL",
      "Docker",
      "Microservices",
    ],
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="relative">
        <HeroSection />
      </div>

      <main className="flex-1">
        {/* Courses Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Explore Our Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">
              What's Included in Every Course
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Live Sessions",
                  description:
                    "Interactive live classes with expert instructors",
                },
                {
                  title: "Hands-on Projects",
                  description: "Real-world projects for your portfolio",
                },
                {
                  title: "Career Support",
                  description:
                    "Job placement assistance and career guidance",
                },
                {
                  title: "Certificate",
                  description:
                    "Industry-recognized completion certificate",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl font-bold text-primary">✓</div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
