import React from "react";
import Pagination from "./components/Pagination";
import Cart from "./components/Cart";
import { MenuBar } from './components/MenuBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <MenuBar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route element={<Pagination />} path={"products"}></Route>
          <Route element={<Cart />} path={"cart"}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
