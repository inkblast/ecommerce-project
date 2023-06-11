import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminBoard from '../containers/Dashboard/AdminBoard';
import Product from "../containers/Product/"
import Addproduct from '../containers/Product/Addproduct'


function Routs() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AdminBoard /> } />
        <Route path="/product" element={<Product /> } />
        <Route path="/product/addproduct" element={<Addproduct /> } />
      </Routes>
    </Router>
    </>
  );
}

export default Routs;