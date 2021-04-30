import React from "react"
import Layout from "../layout/Layout"
import Seo from "./SEO"

const ErrorPage = () => {
    return (
        <Layout>
            <Seo title="Page not found" description="This is 404 error page"/>
            <main className="error-page">
                <section>
                    <h1>404</h1>
                    <h3>Page not found</h3>
                </section>
            </main>
        </Layout>
    )
}

export default ErrorPage