/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { ViewCart } from "./components/ViewCart.jsx"; // Capitalized ViewCart
import "./App.css";
import { Header } from "./components/Header.jsx";
import { useState, createContext } from "react";

// Create Cart Context
export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} /> {/* Pass cart to Header */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ViewCart />} /> {/* Capitalized ViewCart */}
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
