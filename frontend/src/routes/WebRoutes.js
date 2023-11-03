import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from '../components/Home'
import ProductCatelog from '../components/ProductCatelog';
import MenClothingCatelog from '../components/MenClothingCatelog';
import TshirtPage from '../components/TshirtPage';
import ViewProduct from '../components/ViewProduct';
import DesignArea from '../components/DesignArea';
import EditArea from '../components/EditArea';

function WebRoutes(){

    return(

        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCatelog />} />
          <Route path="/men-clothing" element={<MenClothingCatelog />} />
          <Route path="/T-shirt" element={<TshirtPage/>} />
          <Route path="/T-shirt/view" element={<ViewProduct/>} />
          <Route path="/t-shirt/design" element={<DesignArea />} />
          <Route path="/test/edit-area" element={<EditArea />} />
          
        </Routes>
      </Router>
    )
}


export default WebRoutes;