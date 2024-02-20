import { Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./theme.context";

function App() {
  return (
    <>
      <ThemeProvider>
        {/* navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
