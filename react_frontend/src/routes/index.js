import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminBoard from '../containers/Dashboard/AdminBoard';
import Product from "../containers/Product/"
import Addproduct from '../containers/Product/Addproduct'
import Addcategory from '../containers/Product/Addcategory'
import Category from '../containers/Product/Category'


function Routs() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AdminBoard /> } />
        <Route path="/product" element={<Product /> } />
        <Route path="/product/addproduct" element={<Addproduct /> } />
        <Route path="/category/addcategory" element={<Addcategory /> } />
        <Route path="/category" element={<Category /> } />
      </Routes>
    </Router>
    </>
  );
}

export default Routs;