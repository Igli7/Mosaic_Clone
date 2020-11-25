import React, { useState } from "react"
import Headroom from "react-headroom"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulNavbar {
        logo {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  const [state, setState] = useState({
    active: null,
    click: 1,
  })

  const onClick = () => {
    console.log(state.click % 2 === 0)
    if (state.click % 2 === 0) {
      setState({
        ...state,
        active: null,
        click: state.click + 1,
      })
    } else {
      setState({
        ...state,
        active: "active",
        click: state.click + 1,
      })
    }
  }
  console.log(state)

  return (
    <Headroom style={{ height: "78.40px", zIndex:'10' }}>
      <header className={navbarStyles.header}>
        <div className={navbarStyles.rainbowBar}></div>
        <nav className={navbarStyles.navigation}>
          <div className={navbarStyles.navImgContainer}>
            <Link to="/">
              <Img fluid={data.contentfulNavbar.logo.fluid}></Img>
            </Link>
          </div>
          <div className={navbarStyles.linksContainer}>
            
            <button
              onClick={onClick}
              className={
                state.active
                  ? `${navbarStyles.hamburger} ${navbarStyles.active}`
                  : `${navbarStyles.hamburger}`
              }
            >
              <span></span>
            </button>
            <ul className={
                state.active
                  ? `${navbarStyles.list} ${navbarStyles.active}`
                  : `${navbarStyles.list}`
              }>
              <li>
                <Link to="/">Process</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Headroom>
  )
}

export default Navbar
