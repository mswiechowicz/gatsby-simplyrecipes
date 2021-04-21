import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>&copy; {new Date().getFullYear()}
        <span> SimplyRecipes </span>
        Build by <a href="https://github.com/mswiechowicz">Maciej Świechowicz </a>
        with <a href="https://www.gatsbyjs.com/">Gatsy</a>
      </p>
    </footer>
  )
}
export default Footer