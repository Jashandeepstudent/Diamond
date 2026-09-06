import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import CTABanner from "./components/CTABanner";
import ContactLocation from "./components/ContactLocation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <WhyUs />
        <Reviews />
        <CTABanner />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
