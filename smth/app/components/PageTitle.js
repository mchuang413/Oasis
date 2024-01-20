import React from "react";

const PageTitle = ({ title, size }) => {
  return (
    <div>
      <div>
        <div className="hero mt-20">
          <div className="hero-content text-center">
            <h1 className={`text-${size}xl font-bold`}>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
