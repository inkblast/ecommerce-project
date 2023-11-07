import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from '../components/Home'
import ProductCatelog from '../components/ProductCatelog';
import MenClothingCatelog from '../components/MenClothingCatelog';
import TshirtPage from '../components/TshirtPage';
import ViewProduct from '../components/ViewProduct';
import DesignArea from '../components/DesignArea';
import EditArea from '../components/EditArea';
import AboutUs from '../components/AboutUs';
import HeadBar from '../components/HeadBar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import InfoCard from '../components/InfoCard';
import OptionPanel from '../components/OptionPanel';
import PopularProducts from '../components/PopularProducts';
import ProductCategoryCard from '../components/ProductCategoryCard';
import ProductItemCard from '../components/ProductItemCard';
import ProductsDisplay from '../components/ProductsDisplay';
import Index from '../components/Card';

function WebRoutes(){

    return(

        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCatelog />} />
          <Route path="/men-clothing" element={<MenClothingCatelog />} />
          <Route path="/T-shirt" element={<TshirtPage/>} />
          <Route path="/T-shirt/view/:id" element={<ViewProduct/>} />
          <Route path="/t-shirt/design/:id" element={<DesignArea />} />
          <Route path="/test/edit-area" element={<EditArea />} />
          <Route path="/about_us" element={<AboutUs />} /> 
          <Route path="/head_bar" element={<HeadBar />} />//editting area nav bar
          <Route path="/hearo_section" element={<HeroSection />} />//hearo badgeContent
          {/* <Route path="/howtowork" element={<HowItWorks />} />in main */}
          {/* <Route path="/infoCard" element={<InfoCard />} />//info card in main */}
          <Route path="/option" element={<OptionPanel />} />//eddit area right paperContainer
          <Route path="/populerproduct" element={<PopularProducts />} />//main background
          <Route path="/productCategorycard" element={<ProductCategoryCard />} />//only one Box
          <Route path="/productitemcard" element={<ProductItemCard />} />//that one card for item
          <Route path="/productdisplay" element={<ProductsDisplay />} />//total previous card calling
          <Route path="/cart" element={<Index />} />
          
        </Routes>
      </Router>
    )
}


export default WebRoutes;