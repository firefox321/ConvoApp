import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Navbar />
      <Home />
      <Footer />
    </div>
    
  );
}

export default App;