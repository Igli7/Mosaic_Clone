import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/Button"
import ctaBlockStyles from "./ctaBlock.module.scss"

const CtaBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCtaBlock {
        title
      }
    }
  `)

  return (
    <section className={ctaBlockStyles.ctaSection}>
      <div className={ctaBlockStyles.ctaBlock}>
        <h2>{data.contentfulCtaBlock.title}</h2>

        <Button to="/" text="Our Process" />
      </div>
    </section>
  )
}

export default CtaBlock
