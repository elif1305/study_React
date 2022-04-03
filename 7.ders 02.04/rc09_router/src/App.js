import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">  // bu div olmasada olur, classname icin verildi
      <BrowserRouter>  // tum appjs i kaplayacak sekilde olmali
        <Navbar />    // dista olmasinin sebebi butun sayfalarda gorunemsi icin
        <div className="main">  // footeri alta almak icin div icine alip classname verildi. 
          <Routes> // routes icine route ile path gosterilekerek yazilir
            <Route path="/" element={<Home />} />  // routelar yazildiginda otomatik yukarida import ediyor.
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="products/details/:productId" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} /> // kaldirilan kullanilmayan sayfalar icin
          </Routes>
        </div>
        <Footer />   // dista olmasinin sebebi butun sayfalarda gorunemsi icin
      </BrowserRouter>
    </div>
  );
}

export default App;
