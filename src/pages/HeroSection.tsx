import React from "react";
import img from "../assets/dev1.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] px-4 text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-5xl font-bold mb-6 sm:text-6xl">Our Courses</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Choose from our comprehensive range of coding courses designed to take you from beginner to professional developer.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
