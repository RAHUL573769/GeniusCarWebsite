import React from "react";

const BannerItem = ({ banner }) => {
  const { image, id, next, prev } = banner;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      {" "}
      <img src={image} className="w-full" alt="" />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-1/2">
        <h1 className="text-5xl font-bold text-white">
          Affordable Price
          <br />
          for Car Services
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 bottom-1/4">
        <h1 className="text-5xl font-bold text-white">
          <p className="text-white font-semibold">
            There are many variety of parts available
          </p>
        </h1>
      </div>
      <div className=" absolute flex justify-end transform -translate-y-1/2 left-16 bottom-20">
        <button className="btn btn-primary">Click Here to Go</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
