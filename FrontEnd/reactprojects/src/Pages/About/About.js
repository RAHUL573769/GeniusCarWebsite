import React from "react";
import img1 from "../../ImagesFolder/about-1.jpg";
import img2 from "../../ImagesFolder/about-2.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative py-4">
            <img
              src={img1}
              className=" max-w-sm w-4/5 h-full rounded-lg shadow-2xl"
              alt=""
            />
            <img
              src={img2}
              className=" max-w-sm w-3/5 right-5 top-3/4 rounded-lg shadow-2xl absolute"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              We Supply various inventories <br />
              Around the World
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
