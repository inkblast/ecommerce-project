import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ProductCatelog from './components/ProductCatelog';
import MenClothingCatelog from './components/MenClothingCatelog';
import TshirtPage from './components/TshirtPage';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCatelog />} />
          <Route path="/men-clothing" element={<MenClothingCatelog />} />
          <Route path="/T-shirt" element={<TshirtPage/>} />
          <Route path="/T-shirt/view" element={<ViewProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
