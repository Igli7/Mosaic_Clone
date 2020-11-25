import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Layout from "../../components/layout/Layout"
import newsStyles from "./news.module.scss"
import { useEffect } from "react"

const News = () => {
  const [state, setState] = useState({
    data: null,
    type: null,
    filtered: null,
  })

  const data = useStaticQuery(graphql`
    query($type: String!){
      allContentfulNews(
        sort: { fields: publishedDate, order: DESC }
        filter: { category: { eq: $type } }
      ) {
        edges {
          node {
            publishedDate(formatString: "MMMM Do, YYYY")
            category
            author
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={newsStyles.newsContainer}>
        <h5>News</h5>

        <h1>Updates from Mosaic</h1>

        <ul className={newsStyles.categories}>
          <li>
            <button className={newsStyles.categoriesBtn}>All</button>
          </li>
          <li>
            <button className={newsStyles.categoriesBtn}>Type1</button>
          </li>
          <li>
            <button className={newsStyles.categoriesBtn}>Type2</button>
          </li>
          <li>
            <button className={newsStyles.categoriesBtn}>Type3</button>
          </li>
        </ul>
        <div className={newsStyles.masonryContainer}>
          <Masonry>
            <div className={newsStyles.card}>
              <div className={newsStyles.emailCard}>
                <h2 className={newsStyles.title}>
                  Sign up for updates from Mosaic.
                </h2>
                <form action="">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />

                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>
            {data.allContentfulNews.edges.map(edge => {
              return (
                <div className={newsStyles.card}>
                  <div className={newsStyles.cardContent}>
                    <p className={newsStyles.category}>Category</p>
                    <h2 className={newsStyles.title}>{edge.node.title}</h2>
                    <ul>
                      <li>{edge.node.publishedDate}</li>
                      <li>Author</li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </Masonry>
        </div>
      </div>
    </Layout>
  )
}

export default News
