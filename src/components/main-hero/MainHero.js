import React from "react"
import mainHeroStyles from "./mainHeroStyles.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/Button"

const MainHero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeroMain {
        content {
          content
        }
        title
        video {
          file {
            url
          }
          title
        }
      }
    }
  `)

  return (
    <div className={mainHeroStyles.mainContainer}>
      <main className={mainHeroStyles.main}>
        <div className={mainHeroStyles.mainContent}>
          <h2>{data.contentfulHeroMain.title}</h2>
          <p>{data.contentfulHeroMain.content.content}</p>
          <Button text="Our Services" to="/" width="100%" />
        </div>
        <div className={mainHeroStyles.mainVideo}>
          <video autoPlay muted loop width="100%">
            <source
              src={data.contentfulHeroMain.video.file.url}
              type="video/mp4"
            />
            <track src="" kind="captions"></track>
          </video>
        </div>
      </main>
    </div>
  )
}

export default MainHero
