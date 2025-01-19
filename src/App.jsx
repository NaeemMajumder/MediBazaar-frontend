import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar";


function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
