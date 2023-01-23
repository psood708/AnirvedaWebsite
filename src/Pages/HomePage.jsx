import React from "react"

import Navbar from "../components/Navbar"
import Main from "../components/Home/Main"
import BigText from "../components/Home/BigText"
import About from "../components/Home/About"
import ContactUs from "../components/Home/ContactUs"
import Testimonial from "../components/Home/Testimonial"
import Carousel from "../components/Caraousel"

const HomePage = () => { 
  return (
    <div className="bg-black font-Lato">
      <div className="h-[80vh]flex flex-col">
        <Navbar />
        <Main />
      </div>
      <BigText />
      <About />
      <Testimonial/>
      <ContactUs />
    </div>
  )
}

export default HomePage
