import React from "react"
import Navbar from "../header/Navbar"
import Footer from "../footer/Footer"
import "./layout.scss"

const Layout = props => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
