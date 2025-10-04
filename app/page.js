import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/heroSection/HeroSection";
import { Navbar } from "@/components/navbar/navbar.jsx"
import { ProductDetails } from "@/components/productDetails/ProductDetails.jsx";
import Rating from "@/components/rating/Rating";
import SimilarItems from "@/components/similarItems/SimilarItems";


export default function Home() {
  return (
    <div className="w-full h-screen">
      < Navbar/>
      <HeroSection/>
      <ProductDetails/>
      <Rating/>
      <SimilarItems/>
      <Footer/>
    </div>
  );
}
