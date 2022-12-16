import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import { Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
import Monitor from "./Components/Monitor";
import Headphone from "./Components/Mobile/Headphone";
import Cart from "./Components/Cart";
import Mouse from "./Components/Laptop-apge/Lap-mouse";
import Keyborad from "./Components/Laptop-apge/Lap-Keyborad";
import LaptopHeadset from "./Components/Laptop-apge/Lap-Headset";
import Lap from "./Components/Laptop-apge/Lap";
import Mobile from "./Components/Mobile/Mobile";
import Tablet from "./Components/Mobile/Tablet";
import Contact from "./Components/Contact";
function App() {
  window.onscroll = () => {
    if (window.scrollY > 2000) {
      document.querySelector(".to-top").classList.add("show");
    } else {
      document.querySelector(".to-top").classList.remove("show");
    }
  };
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="to-top" onClick={() => goUp()}>
        <span>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </span>
      </div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Product />
              <Contact />
            </>
          }
        />
        <Route path="laptop" element={<Lap />} />
        <Route path="mouse" element={<Mouse />} />
        <Route path="headset" element={<LaptopHeadset />} />
        <Route path="keyborad" element={<Keyborad />} />
        <Route path="cart" element={<Cart />} />
        <Route path="monitor" element={<Monitor />} />
        <Route path="headphone" element={<Headphone />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="tablet" element={<Tablet />} />
      </Routes>
    </>
  );
}

export default App;
