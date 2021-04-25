import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const AllRecipes = () => {
    const { allContentfulRecipe: { nodes: recipes }} = useStaticQuery(query);
    return (
        <section className="recipes-container">
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    )
}

export const query = graphql`
    {
        allContentfulRecipe(sort: {fields: title, order: ASC}) {
            nodes {
                id
                title
                cookTime
                prepTime
                content {
                    tags
                }
                image {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                }
            }
        }
    }
`

export default AllRecipes