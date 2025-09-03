import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/CourseCard"; 


const featuredCourses = [
  
];

const FeatureSection = () => {
  return (
    <div>
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start your coding journey with our most popular courses designed
              by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-gradient-primary text-white hover:shadow-lg transition"
              >
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

           
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
