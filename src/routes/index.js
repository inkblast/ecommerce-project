import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";

export default function Routs() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/header" component={Header} />
      </Routes>
    </BrowserRouter>
  );
}
