import React from "react";
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import PopularProducts from './PopularProducts';
import InfoCard from './InfoCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Box from "@mui/material/Box";




function Home(){


    return(
        <Box>
            <NavBar />
            <HeroSection />
            <HowItWorks />
            <AboutUs />
            <PopularProducts />
            <InfoCard />
            <Footer />
        </Box>
        
    );
}


export default Home;