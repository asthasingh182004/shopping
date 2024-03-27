
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopCategory from "./Pages/ShopCategory"; // Corrected the import name
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Popular from "./Popular/Popular";
//import Footer from "./Footer/Footer";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";



function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        
        </Routes>
      {/*<Footer/>*/}
      </Router>
    </div>
  );
}

export default App;
