import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFooter {
        allRightsReserved
        logo {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      allContentfulLicenses {
        edges {
          node {
            licenseName
            licenseValue
          }
        }
      }
      allContentfulContact {
        edges {
          node {
            email
          }
        }
      }
      allContentfulOffices {
        edges {
          node {
            placeName
            address
            cityState
            href
          }
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <header className={footerStyles.header}>
        <div className={footerStyles.imgContainer}>
          <Link to="/">
            <Img fluid={data.contentfulFooter.logo.fluid}></Img>
          </Link>
        </div>
        <div className={footerStyles.allRights}>
          ® {data.contentfulFooter.allRightsReserved}
        </div>
      </header>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.pages}>
          <h4>Pages</h4>
          <ul>
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
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={footerStyles.licenses}>
          <h4>Licenses</h4>
          <dl>
            <dt>Mosaic Construction of Arizona LLC:</dt>
            <dd></dd>
            {data.allContentfulLicenses.edges.map(edge => {
              return (
                <div className={footerStyles.licenseContainer}>
                  <dt>{edge.node.licenseName}:</dt>
                  <dd>{edge.node.licenseValue}</dd>
                </div>
              )
            })}
          </dl>
        </div>

        <div className={footerStyles.contacts}>
          <h4>Contact</h4>
          <ul>
            {data.allContentfulContact.edges.map(edge => {
              return <li>{edge.node.email}</li>
            })}
          </ul>
        </div>

        <div className={footerStyles.offices}>
          <h4>Offices</h4>
          <div className={footerStyles.officesContainer}>
            {data.allContentfulOffices.edges.map(edge => {
              return (
                <address>
                  <a href={edge.node.href} target="_blank" rel="noreferrer">
                    <div>{edge.node.placeName}</div>
                    <div>{edge.node.address}</div>
                    <div>{edge.node.cityState}</div>
                  </a>
                </address>
              )
            })}
          </div>
        </div>
      </div>
      <span className={footerStyles.allRightsSpan}>
        ® {data.contentfulFooter.allRightsReserved}
      </span>
    </footer>
  )
}

export default Footer
