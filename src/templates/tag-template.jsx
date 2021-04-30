import React from "react"
import Layout from "../layout/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../pages/SEO"

const TagTemplate = ({ data, pageContext: {tag: tagName} }) => {
    const recipes = data.allContentfulRecipe.nodes;
    return (
        <Layout>
            <Seo title={tagName} description={`This is page with content tagged as ${tagName}`}/>
            <main className="page">
                <h1>{tagName}</h1>
                <RecipesList recipes={recipes}/>
            </main>
        </Layout>
    )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      id
      title
      prepTime
      cookTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
}
`

export default TagTemplate