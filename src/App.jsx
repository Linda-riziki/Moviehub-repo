import { useState } from "react";
// import HelloWorld from "./components/Hello";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Apipage from "./components/Apipage";

import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Apipage/>
      </div>

      <Footer />
    </>
  );
}

export default App;
