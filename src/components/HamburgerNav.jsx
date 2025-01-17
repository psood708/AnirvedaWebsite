import React, {useState} from "react"
import {Icon} from "@iconify/react"
import { Link } from "react-router-dom"

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* Top Bar */}
      <div className="flex items-center px-5 justify-between">
        <div>
          <Link to="/"><img src="./images/logo.webp" alt="Anirveda Logo" className="w-1/4" /></Link>
        </div>
        <div className="cursor-pointer">
          <Icon
            icon="charm:menu-hamburger"
            color={"#B69575"}
            className="text-4xl"
            onClick={handleHamburgerClick}
          />
        </div>
      </div>

      {/* Hamburger bar items */}
      <div className={`text-secondary font-Lato absolute z-10 top-0 w-full h-full bg-secondary-opacity px-5 pt-3 transition-transform duration-300 ease-in  ${isOpen ? "translate-x-0": "translate-x-[-100%]"} `}>
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div>
            <img
              src="./images/logo_white.webp"
              alt="Anirveda Logo"
              className="w-1/4"
            />
          </div>
          <div className="cursor-pointer">
            <Icon
              icon="akar-icons:cross"
              color={"#B69575"}
              className="text-4xl"
              onClick={handleHamburgerClick}
            />
          </div>
        </div>

        <div className="text-2xl mt-4 text-center">
          <Link to="/"><h1 className="cursor-pointer mt-3 hover:text-primary uppercase">Home</h1></Link>
          {/* <h1 className="cursor-pointer">About</h1> */}
          <Link to="/events"><h1 className="cursor-pointer mt-3 hover:text-primary uppercase">Events</h1></Link>
          <Link to="/gallery"><h1 className="cursor-pointer mt-3 hover:text-primary uppercase">Gallery</h1></Link>
          <Link to="/committee"><h1 className="cursor-pointer mt-3 hover:text-primary uppercase">Committee</h1></Link>
          <a href="#contact"><h1 className="cursor-pointer mt-3 hover:text-primary uppercase">Contact</h1></a>
        </div>
      </div>
    </div>
  )
}
