 import Header from "../components/Header";
 import Hero from "../components/Hero";
import DualGallery from "../components/DualGallery";
 import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
       <main className="flex-grow">
         <Hero />
        {/* Showcase блок из 2 колонок с изображениями (1,2 слева; 3 справа) */}
       <DualGallery />
         <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
