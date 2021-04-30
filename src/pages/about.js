import React from "react"
import Layout from "../layout/Layout"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import RecipesList from "../components/RecipesList"
import Seo from "./SEO"

const About = ({data: {allContentfulRecipe: { nodes: recipes }} }) => {
    return (
        <Layout>
            <Seo title="About" description="This is about page"/>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>I'm baby coloring book poke taxidermy</h2>
                        <p>
                            Bicycle rights vape viral you probably haven't heard of them crucifix tumeric gastropub
                            celiac. Chambray squid narwhal, mumblecore irony try-hard biodiesel roof party hell of
                            gluten-free lyft.
                        </p>
                        <p>
                            Plaid selfies palo santo, migas umami tumblr crucifix williamsburg
                            cloud bread.
                        </p>
                        <Link to="/contact" className="btn">
                            Contact
                        </Link>
                    </article>
                    <StaticImage src="../assets/images/about.jpeg" alt="aboutImg" as="div" className="about-img" placeholder="blurred" />
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesauce!</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe(
      filter: {featured: {eq: true}}
      sort: {fields: title, order: ASC}
    ) {
      nodes {
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        cookTime
        title
        id
        prepTime
      }
    }
  }
`

export default About