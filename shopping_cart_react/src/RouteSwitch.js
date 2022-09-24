import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Nav from "./components/nav";
import React, { useEffect, useState } from "react";

const RouteSwitch = () => {
  const [total, setTotal] = useState(0);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Shop" element={<Shop setTotal={setTotal} totals={total} />} />
        <Route path="/Shop/Cart" element={<Cart totals={total}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
