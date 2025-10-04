"use client";

import { useState } from "react";
import Image from "next/image";
import clothesImg1 from "../../public/clothes1.png";
import clothesImg2 from "../../public/clothes2.png";
import clothesImg3 from "../../public/clothes3.png";
import clothesImg4 from "../../public/clothes4.png";
import productdetailscartImg from "../../public/productdetailsCart.svg";
import productdetailsfavImg from "../../public/productdetailsFavourit.svg";
import Link from "next/link";

const SimilarItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      image: clothesImg1,
      category: "Dresses",
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...",
      rating: 4.5,
      reviews: 877,
      price: 900,
      originalPrice: 1800,
      discount: "25% OFF",
      colors: ["#000000", "#FFFFFF", "#8B4513"],
      moreColors: 2,
      isLocked: false,
      isFavorite: false,
    },
    {
      id: 2,
      image: clothesImg2,
      category: "Dresses",
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...",
      rating: 4.5,
      reviews: 877,
      price: 900,
      originalPrice: 1800,
      discount: "25% OFF",
      colors: ["#FFFFFF", "#000000"],
      moreColors: 2,
      isLocked: false,
      isFavorite: false,
    },
    {
      id: 3,
      image: clothesImg3,
      category: "Dresses",
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...",
      rating: 4.5,
      reviews: 877,
      price: 900,
      originalPrice: null,
      discount: null,
      colors: ["#8B4513", "#2F4F4F"],
      moreColors: 0,
      isLocked: true,
      isFavorite: true,
    },
    {
      id: 4,
      image: clothesImg4,
      category: "Dresses",
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...",
      rating: 4.5,
      reviews: 877,
      price: 900,
      originalPrice: 1800,
      discount: "25% OFF",
      colors: ["#808080", "#000000", "#1E90FF"],
      moreColors: 2,
      isLocked: false,
      isFavorite: false,
    },
    {
      id: 5,
      image: clothesImg4,
      category: "Dresses",
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...",
      rating: 4.5,
      reviews: 877,
      price: 900,
      originalPrice: null,
      discount: "25% OFF",
      colors: ["#000000", "#FFFFFF"],
      moreColors: 0,
      isLocked: false,
      isFavorite: false,
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Similar Items</h2>
        <div className="w-12 h-1 bg-[#BE968E] mt-2"></div>
      </div>

      <div className="relative">
        {/* Products Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[288px]">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    {/* Top Icons */}
                    <div className="flex items-center justify-between p-2">
                      {product.discount && (
                        <span className="rounded-full bg-transparent px-4 py-1 text-sm text-[#BE968E] shadow-sm border-[#4040401A] border-[1px]">
                          {product.discount}
                        </span>
                      )}
                      <div className="flex gap-3">
                        <Link href={"/"}>
                          <div>
                            <Image src={productdetailscartImg} alt={"cart"} />
                          </div>
                        </Link>
                        <Link href={"/"}>
                          <div>
                            <Image
                              src={productdetailsfavImg}
                              alt={"favourit"}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-2">
                    {/* Category && rating */}
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs mb-1 font-medium text-[#545454]">
                        {product.category}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex">
                          {[...Array(1)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-[#BE968E] fill-current"
                                  : "text-gray-300"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <div className="flex gap-1">
                          <span className="text-xs font-medium text-[#020202]">
                            {product.rating}
                          </span>
                          <span className="text-[10px] font-normal text-[#545454]">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-medium text-[#020202] mb-3 line-clamp-2 min-h-[40px]">
                      {product.title}
                    </h3>

                    <div className="flex  items-center justify-between">
                      {/* Price */}
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          AED {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            AED {product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Colors */}
                      <div className="flex items-center justify-center gap-2">
                        {product.colors.map((color, index) => (
                          <button
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-colors"
                            style={{ backgroundColor: color }}
                            aria-label={`Color ${index + 1}`}
                          />
                        ))}
                        {product.moreColors > 0 && (
                          <span className="text-sm text-gray-600 font-medium">
                            +{product.moreColors}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full bg-[#E8EDF2] border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            aria-label="Previous"
          >
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="w-10 h-10 rounded-full bg-[#BE968E] flex items-center justify-center hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            aria-label="Next"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimilarItems;
