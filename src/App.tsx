import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home/Home";
import Navbarr from "./components/Navbar/NavBarr";
import "./components/Navbar/nav.scss";

import { Route, Router, Routes } from "react-router-dom";
import Shop from "./components/Shop/shop";
import Shoppingcart from "./components/ShoppingCart/ShoppinCart";
import Cart from "./components/addcard/Card";
function App() {
  return (
    <>
      <div className="App">
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Shop />} />
          <Route path="/cart" element={<Shoppingcart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
