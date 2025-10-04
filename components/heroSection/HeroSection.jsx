import React from "react";
import Breadcrumbsui from "../Breadcrumbsui";
// import productDetails from "../../public/ProductDetails.png";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="h-[193px] flex justify-center items-center bg-[url('/hero.png')] bg-cover bg-center opacity-100">
        <div className="bg-[url('/ProductDetails.png')] flex justify-center items-center w-[600px] h-[120px] bg-no-repeat bg-contain bg-center">
          <h3 className="text-black capitalize font-semibold !text-[32px]">
            product details
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center pt-4 ">
        <Breadcrumbsui/>
      </div>
    </div>
  );
};

export default HeroSection;
