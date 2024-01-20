import React from "react";
import About from "./components/About";

const HomePage = () => {
  return (
    <>
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-neutral">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    <div className="About">
      <About></About>
    </div>
    </>
  );
};

export default HomePage;
