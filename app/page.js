import HeroSection from "@/components/heroSection/HeroSection";
import { Navbar } from "@/components/navbar/navbar.jsx"
import { ProductDetails } from "@/components/productDetails/ProductDetails";


export default function Home() {
  return (
    <div className="w-full h-screen">
      < Navbar/>
      <HeroSection/>
      <ProductDetails/>
    </div>
  );
}
