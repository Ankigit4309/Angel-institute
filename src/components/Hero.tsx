// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code, Users, Trophy } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-gradient-hero py-24 px-4">
//       <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
//       <div className="container relative mx-auto text-center">
//         <div className="mx-auto max-w-4xl">
//           <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
//             Master Coding at{" "}
//             <span className="bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
//               Angle Institute
//             </span>
//           </h1>
//           <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
//             Transform your career with industry-leading coding courses. From web development to full-stack engineering,
//             we provide hands-on learning with real-world projects.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <Link to="/courses">
//               <Button size="lg" variant="secondary" className="shadow-elegant hover:shadow-glow transition-smooth">
//                 Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//             <Link to="/register">
//               <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
//                 Start Free Trial
//               </Button>
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80">
//             <div className="flex flex-col items-center space-y-2">
//               <Code className="h-8 w-8" />
//               <div className="text-2xl font-bold">1000+</div>
//               <div className="text-sm">Students Trained</div>
//             </div>
//             <div className="flex flex-col items-center space-y-2">
//               <Users className="h-8 w-8" />
//               <div className="text-2xl font-bold">50+</div>
//               <div className="text-sm">Expert Instructors</div>
//             </div>
//             <div className="flex flex-col items-center space-y-2">
//               <Trophy className="h-8 w-8" />
//               <div className="text-2xl font-bold">95%</div>
//               <div className="text-sm">Job Placement</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import studentImg from "@/assets/student.png";
import studentBg from "@/assets/student2.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 py-24 px-6">
      
      <div className="absolute top-0 left-0 w-full h-[140%]">
     
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />

        
        <img
          src={studentBg}
          alt="Background students"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20">
       
        <div className="space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Angel Institute empowers learners with practical coding skills{" "}
            <br />
            and real-world projects, helping them build strong foundations in
            technology <br />
            and achieve their career goals with confidence.
          </h1>

          <Link to="/courses">
            <Button
              size="lg"
              className="mt-8 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth0 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              VIEW COURSES →
            </Button>
          </Link>
        </div>

        
        <div className="flex justify-center md:justify-end relative">
          <img
            src={studentImg}
            alt="Woman Coding Illustration"
            className="max-w-sm md:max-w-md lg:max-w-lg relative z-20"
          />
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full rotate-180 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#098ba5"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;