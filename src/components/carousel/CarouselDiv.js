import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import carouselStyles from "./carousel.module.scss"

import "./carousel.scss"

const CarouselDiv = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSliderCards {
        edges {
          node {
            image {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            content {
              content
            }
            author
            position
          }
        }
      }
    }
  `)

  return (
    <section className={carouselStyles.CarouselSection}>
      <Carousel arrows infinite >
        {data.allContentfulSliderCards.edges.map(edge => {
          return (
            <div className={carouselStyles.cardContainer}>
              <div
                className={carouselStyles.cardImage}
                style={{ width: "100px", height: "100px" }}
              >
                <Img fluid={edge.node.image.fluid}></Img>
              </div>
              <div className={carouselStyles.cardContent}>
                <p className={carouselStyles.content}>
                  "{edge.node.content.content}"
                </p>
                <p className={carouselStyles.author}>{edge.node.author}</p>
                <p className={carouselStyles.position}>{edge.node.position}</p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}

export default CarouselDiv
