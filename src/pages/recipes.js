import React from "react"
import Layout from "../layout/Layout"
import AllRecipes from "../components/AllRecipes"

const Recipes = () => {
    return (
        <Layout>
            <main className="page">
                <AllRecipes />
            </main>
        </Layout>
    )
}

export default Recipes