import React from "react";
import image1 from "../../ImagesFolder/1.PNG";
import image2 from "../../ImagesFolder/2.PNG";
import image3 from "../../ImagesFolder/3.PNG";
import image4 from "../../ImagesFolder/4.PNG";
import image5 from "../../ImagesFolder/5.PNG";
import "./Banner.css";
import BannerItem from "./BannerItem";
const Banner = () => {
  const bannerData = [
    {
      image: image2,
      prev: 6,
      id: 1,
      next: 2
    },
    {
      image: image3,
      prev: 1,
      id: 2,
      next: 3
    },
    {
      image: image4,
      prev: 2,
      id: 3,
      next: 4
    },
    {
      image: image5,
      prev: 3,
      id: 4,
      next: 5
    },
    {
      image: image1,
      prev: 4,
      id: 5,
      next: 6
    },
    {
      image: image5,
      prev: 5,
      id: 6,
      next: 1
    }
  ];

  return (
    <div>
      <div className="carousel w-full">
        {bannerData.map((banner) => (
          <BannerItem banner={banner}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
