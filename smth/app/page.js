"use client"
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="hero-content text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Welcome to Oasis
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Discover tranquility and mindfulness in every moment. Create a
              peaceful space for your mind and soul.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 py-12">
        <div className="container mx-auto">
          <About />
        </div>
      </div>

      <div>
        <Contact></Contact>
      </div>
    </>
  );
};

export default HomePage;
