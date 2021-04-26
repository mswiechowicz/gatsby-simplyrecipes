import React from "react"
import Layout from "../layout/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"

const Tags = ({ data: { allContentfulRecipe: { nodes: tags } } }) => {
    const newTags = setupTags(tags)
    return (
        <Layout>
            <main className="page">
                <section className="tags-page">
                    {newTags.map((tag, index) => {
                        const [text, value] = tag
                        return <Link className="tag" to={`/tags/${text}`} key={index}>
                            <h5>{text}</h5>
                            <p>{value} {value > 1 ? "recipes" : "recipe"}</p>
                        </Link>
                    })}
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
    {
        allContentfulRecipe(sort: {fields: title, order: ASC}) {
            nodes {
                content {
                    tags
                }
            }
        }
    }
`

export default Tags