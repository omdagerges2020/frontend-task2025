"use client";

import React, { useState } from "react";
import footerImg from "../../public/footer.png";
import Image from "next/image";
import facebookImg from "../../public/eva_facebook-fill.png";
import twitterImg from "../../public/mdi_twitter.png";
import instagramImg from "../../public/ri_instagram-fill.png";
import linkedinImg from "../../public/akar-icons_linkedin-v2-fill.png";
import whatsappImg from "../../public/whatsapp.png";
import telegramImg from "../../public/icon-park_telegram.png";
import logofooterImg from "../../public/logofooter.png";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <footer className="relative mt-16 bg-[#4a3428] text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-60">
        <Image src={footerImg} className="object-cover" alt="footer image" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020202]/60"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className=" flex items-center gap-2">
              <Image src={logofooterImg} alt="logoFooter image" />
            </div>
            <p className="text-sm font-medium text-[#FFFFFFB2] mt-2">
              Ipsum in eos qui consequatur ab cum maxime Soluta dolor quae ipsum
              in eos qui consequatur ab. Soluta dolor quae ipsum in eos qui
              consequatur ab cum maxima.Soluta dolor quae
            </p>
          </div>

          {/* Let Us Help */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Let Us Help</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[16px] font-medium text-[#FFFFFFB2]/70 hover:text-white transition-colors"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Send Email */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Send Email</h3>
            <form className="mb-6">
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  type="email"
                  label="Email Address"
                  value={email}
                  onChange={onChange}
                  className="pr-20 border-none"
                  containerProps={{
                    className: "bg-white rounded-xl",
                  }}
                />
                <Button
                  size="sm"
                  className="!absolute right-1 top-1 px-[2em] text-white bg-[#BE968E] rounded-lg"
                >
                  Send
                </Button>
              </div>
            </form>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
              <div className="flex gap-3">
                {/* Facebook */}
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Image src={facebookImg} alt="facebook" />
                </Link>

                {/* Twitter */}
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Image src={twitterImg} alt="twitter" />
                </Link>

                {/* Instagram */}
                <Link
                  href="/postcss.config.js"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Image src={instagramImg} alt="instgram" />
                </Link>

                {/* LinkedIn */}
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Image src={linkedinImg} alt="linked-in" />
                </Link>

                {/* WhatsApp */}
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Image src={whatsappImg} alt="whatsapp" />
                </Link>

                {/* Telegram */}
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Image src={telegramImg} alt="telegram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
