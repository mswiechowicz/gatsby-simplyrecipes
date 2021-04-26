import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../layout/Layout"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/all"

const RecipeTemplate = ({ data }) => {
    console.log(data)
    const { title, cookTime, content, prepTime, servings, description: { description }, image } = data.contentfulRecipe
    const pathToImage = getImage(image)
    const { tags, instructions, ingredients, tools } = content
    return (
        <Layout>
            <main className="page">
                <div className="recipe-page">
                    {/* hero */}
                    <section className="recipe-hero">
                        <GatsbyImage alt={title} image={pathToImage} className="about-img" />
                        <article className="recipe-info">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {/* icons */}
                            <div className="recipe-icons">
                                <article>
                                    <BsClock />
                                    <h5>prep time</h5>
                                    <p>{prepTime} min.</p>
                                </article>
                                <article>
                                    <BsClockHistory />
                                    <h5>cook time</h5>
                                    <p>{cookTime} min.</p>
                                </article>
                                <article>
                                    <BsPeople />
                                    <h5>serving</h5>
                                    <p>{servings}</p>
                                </article>
                            </div>
                            {/* tags */}
                            <p className="recipe-tags">
                                Tags: {tags.map((tag, index) => <Link to={`/tags/${tag}`} key={index}> {tag} </Link>)}
                            </p>
                        </article>
                    </section>
                    {/* rest of the content*/}
                    <section className="recipe-content">
                        <article>
                            <h4>Instructions</h4>
                            {instructions.map((instr, index) => {
                                return (
                                    <div key={index} className="single-instruction">
                                        <div className="single-instruction-header">
                                            <p>step {index + 1}</p>
                                            <div></div>
                                        </div>
                                        <div>{instr}</div>
                                    </div>
                                )
                            })}
                        </article>
                        <article className="second-column">
                            <div>
                                <h4>Ingrediens</h4>
                                {ingredients.map((item,index)=> <p key={index} className="single-ingredient"> {item}</p>)}
                            </div>
                            <div>
                                <h4>Tools</h4>
                                {tools.map((item,index)=> <p key={index} className="single-tool"> {item}</p>)}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export const query2 = graphql`
    query getSingleRecipe($title: String) {
        contentfulRecipe(title: {eq: $title}) {
            title
            cookTime
            prepTime
            content {
             ingredients
             instructions
              tags
              tools
            }
        description {
          description
        }
        servings
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
  }
}`

export default RecipeTemplate