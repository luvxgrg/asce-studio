import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import WhyAsce from "@/components/WhyAsce";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-black text-white">
        <Hero />
        <Work />
        <Services />
        <WhyAsce />
        <Process />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
