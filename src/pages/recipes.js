import React from "react"
import Layout from "../layout/Layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "./SEO"

const Recipes = () => {
    return (
        <Layout>
            <Seo title="Recipes" description="This is recipes list page"/>
            <main className="page">
                <AllRecipes />
            </main>
        </Layout>
    )
}

export default Recipes