import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonal from "@/components/Testimonial";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Testimonal/>
      <FAQ/>
      <Footer/>
    </>
  );
}
