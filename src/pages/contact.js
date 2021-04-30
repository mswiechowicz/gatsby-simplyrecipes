import React from "react"
import Layout from "../layout/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "./SEO"

const Contact = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
    return (
        <Layout>
            <Seo title="Contact" description="This is contact page"/>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get in Touch?</h3>
                        <p>
                            I'm baby drinking vinegar cliche scenester wolf live-edge. Gastropub polaroid keytar, viral
                            shoreditch
                            next level live-edge glossier chicharrones. Pok pok sustainable deep v mustache, butcher
                            celiac trust
                            fund.
                        </p>
                        <p>
                            Enamel pin farm-to-table photo booth irony. Bicycle rights copper mug 8-bit chartreuse
                            polaroid.
                        </p>
                        <p>
                            Snackwave green juice hashtag bespoke gastropub cliche kombucha twee post-ironic lo-fi
                            jianbing echo park
                            locavore cold-pressed. Truffaut kickstarter stumptown hoodie mlkshk celiac live-edge shaman
                            bespoke tofu
                            farm-to-table.
                        </p>
                    </article>
                    <form className="form contact-form"
                          action="https://formspree.io/f/xpzkqpzg"
                          method="POST">
                        <div className="form-row">
                            <label htmlFor="name">your name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">your email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message" />
                        </div>
                        <button type="submit" className="btn block">
                            submit
                        </button>
                    </form>
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

export default Contact