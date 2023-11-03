import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminBoard from '../containers/Dashboard/AdminBoard';
import Product from "../containers/Product/"
import Addproduct from '../containers/Product/Addproduct'
import Addcategory from '../containers/Product/Addcategory'
import Category from '../containers/Product/Category'
import Promotion from '../containers/Product/Promotion'
import AddPromotion from '../containers/Product/AddPromotion'
import Stock from '../containers/StockManagement/index'
import Profile from '../containers/userProfile/index'
import Notes from '../containers/CNotes/index'
import Analysis from '../containers/Analysis/index'



function Routs() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<AdminBoard /> } />
        <Route path="/product" element={<Product /> } />
        <Route path="/product/addproduct" element={<Addproduct /> } />
        <Route path="/category/addcategory" element={<Addcategory /> } />
        <Route path="/promotion/addpromotion" element={<AddPromotion /> } />
        <Route path="/category" element={<Category /> } />
        <Route path="/promotion" element={<Promotion /> } />
        <Route path="/stock" element={<Stock /> } />
        <Route path="/user" element={<Profile /> } />
        <Route path="/notes" element={<Notes /> } />
        <Route path="/analysis" element={<Analysis /> } />
      </Routes>
    </Router>
    </div>
  );
}

export default Routs;