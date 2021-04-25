import React from "react"
import Layout from "../layout/Layout"

const ErrorPage = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default ErrorPage;