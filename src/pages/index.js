import React from "react"
import Layout from "../components/layout/Layout"
import MainHero from "../components/main-hero/MainHero"
import CalloutBar from "../components/callout-bar/CalloutBar"
import CtaBlock from "../components/cta-block/CtaBlock"
import CarouselDiv from "../components/carousel/CarouselDiv"

export default function Home() {
  console.log()
  return (
    <Layout>
      <MainHero />
      <CalloutBar />
      <CtaBlock />
      <CarouselDiv />
    </Layout>
  )
}
