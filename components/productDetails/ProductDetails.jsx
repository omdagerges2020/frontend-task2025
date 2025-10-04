"use client";

import { useState } from "react";
import Image from "next/image";
import mainImg from "../../public/mainimage.png";
import thumImg1 from "../../public/thum1.png";
import thumImg2 from "../../public/thum2.png";
import thumImg3 from "../../public/thum3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productdetailscartImg from "../../public/productdetailsCart.svg";
import productdetailsfavImg from "../../public/productdetailsFavourit.svg";
import Link from "next/link";
import { Select, Option } from "@material-tailwind/react";

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
  const [selectedSize, setSelectedSize] = useState("2XL");
  const [selectedType, setSelectedType] = useState("Cotton");
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
              <div key={index} className="bg-[#F4F7F9] rounded-full p-4 w-[60px] h-[60px] flex justify-center items-center">
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
              Quantity{" "}
              <span className="text-[#8A8A8A] font-normal text-[16px]">
                (${productData.price.toFixed(2)} for Piece)
              </span>
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-lg border border-gray-300">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-12 w-12 items-center justify-center text-gray-600 hover:bg-gray-50"
                  aria-label="Decrease quantity"
                >
                  <span className="material-icons">remove</span>
                </button>
                <input
                  type="text"
                  value={quantity.toString().padStart(2, "0")}
                  readOnly
                  className="h-12 w-16 border-x border-gray-300 text-center text-gray-900 focus:outline-none"
                />
                <button
                  onClick={increaseQuantity}
                  className="flex h-12 w-12 items-center justify-center text-gray-600 hover:bg-gray-50"
                  aria-label="Increase quantity"
                >
                  <span className="material-icons">add</span>
                </button>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                ${(productData.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full rounded-lg bg-rose-300 px-6 py-3.5 text-base font-medium text-white transition hover:bg-rose-400 flex items-center justify-center gap-2">
          Add To Cart
          <span className="material-icons text-xl">shopping_bag</span>
        </button>
      </div>
    </div>
  );
}
