import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cards from './components/Home/Cards';
import Main from './components/Home/Main';
import CartItem from './components/Home/CartItem';
import Cart from './components/Home/Cart';

function App() {


  return(
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
  
        </Routes>
      </BrowserRouter>

    </div>
  )
} 

export default App;
