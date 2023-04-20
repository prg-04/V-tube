import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, debounce, } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery"
import Product from "./components/Product";
import Services from "./components/Services";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const isLargeScreen = useMediaQuery("(min-width:600px)");
 
  return (
    <BrowserRouter sx={{ backgroundColor: "#0a2640" }}>
      <Navbar isLargeScreen={isLargeScreen} />
      <div
        style={{
          width: "350px",
          height: "350px",
          border: "1px solid #1c3d5b",
          borderRadius: "0 0 0 100%",
          position: "absolute",
          top: "0px",
          right: "0px",
          backgroundColor: "#1c3d5b",
          opacity: "0.2",
          zIndex: "10",
        }}
      />

      <Routes>
        <Route path="/" element={<Home isLargeScreen={isLargeScreen} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
