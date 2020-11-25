import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import calloutBarStyles from "./calloutBar.module.scss"

const CalloutBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCalloutBar {
        edges {
          node {
            title
            content {
              content
            }
            calloutBarLogo {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={calloutBarStyles.calloutSection}>
      <div className={calloutBarStyles.calloutBar}>
        {data.allContentfulCalloutBar.edges.map(edge => {
          return (
            <div className={calloutBarStyles.mainContainer}>
              <div className={calloutBarStyles.h1Container}>
                <div className={calloutBarStyles.imgContainer}>
                  <Img fluid={edge.node.calloutBarLogo.fluid}></Img>
                </div>
                <div>
                  <h1>{edge.node.title}</h1>
                </div>
              </div>

              <p>{edge.node.content.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CalloutBar
