import React from "react"
import Layout from "../layout/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import Seo from "./SEO"

const Home = () => {
  return (
    <Layout>
        <Seo title="Home"/>
        <main className="page">
            <header className="hero">
                <StaticImage  src="../assets/images/main.jpeg" alt="eggs on table" className="hero-img" placeholder="tracedSVG" layout="fullWidth" />
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>simply recipes</h1>
                        <h4>no fluff, only recipes</h4>
                    </div>
                </div>
            </header>
            <AllRecipes />
        </main>
    </Layout>
  )
}

export default Home