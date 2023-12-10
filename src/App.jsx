import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import Product from "./pages/Product";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <Routes>
        {/* <Rotue path="/" > */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
