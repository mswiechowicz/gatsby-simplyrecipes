import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title, description }) => {
    const { site: { siteMetadata } } = useStaticQuery(query)
    const metaDescription = description || siteMetadata.description;
    return (
        <Helmet
            title={`${title} | ${siteMetadata.title}`}
            meta={[{ name: `description`, content: metaDescription }]}
            htmlAttributes={{ lang: "en" }}
        >
        </Helmet>)
}

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

export default Seo