//import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularProducts from "./PopularProducts";
import InfoCard from "./InfoCard";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import React, { useRef } from "react";

function Home() {
  const heroSectionRef = useRef(null);
  const howItWorksRef = useRef(null);
  const aboutUsRef = useRef(null);
  const popularProductsRef = useRef(null);
  const infoCardRef = useRef(null);

  // ...

  return (
    <Box>
      <header>
        <NavBar
          scrollToHowItWorks={() =>
            howItWorksRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToPopularProducts={() =>
            popularProductsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToInfoCard={() =>
            infoCardRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </header>
      <section id="">
        <HeroSection />
      </section>
      <section ref={howItWorksRef}>
        <HowItWorks />
      </section>
      <section>
        <AboutUs />
      </section>
      <section ref={popularProductsRef}>
        <PopularProducts />
      </section>
      <section ref={infoCardRef}>
        <InfoCard />
      </section>
      <Footer />
    </Box>
  );
}

export default Home;
