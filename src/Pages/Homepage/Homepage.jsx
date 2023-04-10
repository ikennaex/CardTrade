import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import GetStarted from "../../components/GetStarted/GetStarted";
import Intro from "../../components/Intro/Intro";
import Navbar from "../../components/Navbar/Navbar";
import Trade from "../../components/Trade/Trade";


const Homepage = () => {
  return (
    <div>
        <Navbar/>
      <div className="margin">

      <Intro />
      <Features />
      <Trade />
      <GetStarted />
      </div>
      <Footer />

    </div>
  )
}

export default Homepage