import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminBoard from '../containers/Dashboard/AdminBoard';
import Product from "../containers/Product"


function Routs() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AdminBoard /> } />
        <Route path="/product" element={<Product /> } />
      </Routes>
    </Router>
    </>
  );
}

export default Routs;