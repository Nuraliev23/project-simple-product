import React from 'react'
import logo from "../assets/YOUR LOGO.png"
import shop from "../assets/Group 2609203.png"
import user from "../assets/Ellipse 67.png"
import "./header.css"

const Forheader = () => {
  return (
    <div>
        <header>
            <nav>
            <img src={logo} alt="" />
                <ul>
                    <li>Market Place</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="headIcon">
                    <img src={shop} alt="" />
                    <img src={user} alt="" />
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Forheader