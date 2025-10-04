"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

const Breadcrumbsui = () => {
  return (
    <Breadcrumbs
      separator={
        <ChevronRight className=" text-black" strokeWidth={2.5} />
      }
      className=" w-[1200px]"
    >
      <Link href="/" className="opacity-100">
        Home
      </Link>
      <Link href="#" className="opacity-100">
        Our Category
      </Link>
      <Link href="#" className="opacity-60">
        Product Details
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumbsui;
