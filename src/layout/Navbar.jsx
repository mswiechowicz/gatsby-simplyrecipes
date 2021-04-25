import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.svg"
import { FiAlignJustify } from "react-icons/all"

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button onClick={() => setShow(!show)} className="nav-btn">
                        <FiAlignJustify />
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Home</Link>
                    <Link to="/recipes" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Recipes</Link>
                    <Link to="/tags" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Tags</Link>
                    <Link to="/about" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>About</Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn" onClick={() => setShow(false)}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar