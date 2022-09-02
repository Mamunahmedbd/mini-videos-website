import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/ui/Footer";
import Video from "./page/Video";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Video />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
