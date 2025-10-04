"use client";

import { useState } from "react";
import Image from "next/image";
import mainImg from "../../public/mainimage.png";
import thumImg1 from "../../public/thum1.png";
import thumImg2 from "../../public/thum2.png";
import thumImg3 from "../../public/thum3.png";
import smalllogoImg from "../../public/smalllogo.png";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import productdetailscartImg from "../../public/productdetailsCart.svg";
import productdetailsfavImg from "../../public/productdetailsFavourit.svg";
import Link from "next/link";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function ProductDetails() {
  const [typeValue, setTypeValue] = useState("Cotton");
  const [sizeValue, setSizeValue] = useState("2xl");

  const defaultProduct = {
    title: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
    price: 300.0,
    originalPrice: 300.0,
    category: "T-Shirt",
    description:
      "Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit, amet id elit",
    images: [thumImg1, thumImg2, thumImg3],
    colors: [
      { name: "Red", value: "#D90202" },
      { name: "Blue", value: "#B8CCDA" },
      { name: "Beige", value: "#988755" },
      { name: "Blue", value: "#7198C8" },
      { name: "Black", value: "#5D5D5B" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    types: ["Cotton", "Polyester", "Blend"],
  };

  const productData = defaultProduct;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(3);
  const [quantity, setQuantity] = useState(1);

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? productData.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === productData.images.length - 1 ? 0 : prev + 1
    );
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-7 px-8">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-[4/5] w-[524px] h-[565px] overflow-hidden rounded-2xl bg-[#F5F5F5]">
          <Image
            src={mainImg}
            alt={productData.title}
            fill
            className="object-contain"
          />
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#C4C4C4] text-white shadow-md transition"
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#BE968E] text-white shadow-md transition"
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Thumbnail Images */}
        <div className="grid grid-cols-4 gap-[11em] w-[523px]">
          {productData.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-[160px] aspect-square overflow-hidden rounded-lg bg-gray-100 transition ${
                selectedImage === index
                  ? "ring-2 ring-blue-500"
                  : "hover:ring-2 hover:ring-gray-300"
              }`}
            >
              <Image
                src={image}
                alt={`Product view ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === 3 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xl font-semibold">
                  +2
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-5">
        {/* Category Badge & Icons */}
        <div className="flex items-center justify-between">
          <span className="inline-block rounded-full bg-transparent px-4 py-1 text-sm text-[#BE968E] border-[#BE968E] border-[.5px]">
            {productData.category}
          </span>
          <div className="flex gap-3">
            <Link href={"/"}>
              <div>
                <Image src={productdetailscartImg} alt={"cart"} />
              </div>
            </Link>
            <Link href={"/"}>
              <div>
                <Image src={productdetailsfavImg} alt={"favourit"} />
              </div>
            </Link>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-medium text-[#020202]">
          {productData.title}
        </h2>
        {/* Price */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-3">
            <span className="text-[20px] font-medium text-[#020202]">
              ${productData.price.toFixed(2)}
            </span>
            {productData.originalPrice && (
              <span className="text-[16px] font-normal text-[#8A8A8A] line-through">
                ${productData.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-[12px] font-normal text-[#333333]">
            This price is exclusive of taxes
          </p>
        </div>

        {/* Description */}
        <p className="text-[#020202] text-[14px] font-normal leading-relaxed">
          {productData.description}
        </p>

        <hr />

        {/* Type Dropdown */}
        <div className="w-72">
          <Select
            label="Type"
            labelProps={{
              className: "text-[#020202] font-normal text-[12px]",
            }}
            className="border-[.5px]"
            value={typeValue}
            onChange={(val) => setTypeValue(val)}
          >
            {productData.types.map((type, index) => (
              <Option key={index} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </div>

        {/* Size Dropdown */}
        <div className="w-72">
          <Select
            label="Size"
            labelProps={{
              className: "text-[#020202] font-normal text-[12px]",
            }}
            className="border-[.5px]"
            value={sizeValue}
            onChange={(val) => setSizeValue(val)}
          >
            {productData.sizes.map((size, index) => (
              <Option key={index} value={size}>
                {size}
              </Option>
            ))}
          </Select>
        </div>

        {/* Colors */}
        <div className="space-y-3">
          <label className="block text-[20px] font-medium text-[#020202]">
            Colors
          </label>
          <div className="flex items-center gap-3">
            {productData.colors.map((color, index) => (
              <div
                key={index}
                className="bg-[#F4F7F9] rounded-full p-4 w-[60px] h-[60px] flex justify-center items-center"
              >
                <button
                  onClick={() => setSelectedColor(index)}
                  className={`h-[30px] w-[30px] rounded-full border-2 transition ${
                    selectedColor === index
                      ? "border-gray-900 scale-110"
                      : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={color.name}
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            {productData.colors[selectedColor].name}
          </p>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-4 mt-5">
          <div className="space-y-2 flex-1">
            <label className="block text-[20px] font-medium text-[#020202]">
              Quantity
              <span className="text-[#8A8A8A] font-normal text-[16px]">
                (${productData.price.toFixed(2)} for Piece)
              </span>
            </label>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center rounded-lg w-[184px] h-[56px] p-2 bg-[#F5F5F5]">
                  <button
                    onClick={decreaseQuantity}
                    className="flex h-[40px] w-[40px] bg-white items-center justify-center text-gray-600 hover:bg-gray-50 rounded-xl"
                    aria-label="Decrease quantity"
                  >
                    <Minus/>
                  </button>
                  <input
                    type="text"
                    value={quantity.toString().padStart(2, "0")}
                    readOnly
                    className="h-12 w-16 bg-transparent text-center text-gray-900 focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="flex h-[40px] w-[40px] bg-white items-center justify-center text-black rounded-xl hover:bg-gray-50"
                    aria-label="Increase quantity"
                  >
                    <Plus/>
                  </button>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  ${(productData.price * quantity).toFixed(2)}
                </span>
              </div>
              {/* add to cart button */}
              <div>
                <Button className="flex items-center gap-3 w-[234px] justify-center rounded-[12px] bg-[#BE968E]">
                  Add To Cart
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M4.38833 9.26285C4.74306 7.37096 6.39496 6 8.31982 6H15.6804C17.6053 6 19.2572 7.37095 19.6119 9.26285L21.1119 17.2628C21.5735 19.7245 19.685 22 17.1804 22H6.81982C4.31527 22 2.42677 19.7245 2.88833 17.2628L4.38833 9.26285Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clip-cliprule="evenodd"
                      d="M8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5V8C9.75 8.41421 9.41421 8.75 9 8.75C8.58579 8.75 8.25 8.41421 8.25 8V5Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[98px] h-[58px]">
        <Image src={smalllogoImg} alt="logo"/>
      </div>
    </div>
  );
}
