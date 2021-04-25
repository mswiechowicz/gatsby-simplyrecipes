import React from "react"
import { GrGatsbyjs } from "react-icons/all"

const Footer = () => {
    return (
        <footer className="page-footer">
            <p>&copy; {new Date().getFullYear()}
                <span className="page-footer-span"> SimplyRecipes </span>
                <span>
                    Build by <a href="https://github.com/mswiechowicz">Maciej Świechowicz </a>
                </span>
                <span className="page-footer-span-flex">
                     with <a className="page-footer-gatsby-link" href="https://www.gatsbyjs.com/">Gatsby <GrGatsbyjs className="page-footer-gatsby-img" /></a>
                 </span>
            </p>
        </footer>
    )
}
export default Footer