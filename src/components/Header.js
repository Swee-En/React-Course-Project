import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="navigation" className="fixed-top animated-header">
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">

                    <Link to='/' className="navbar-brand">
                        <img className="img-fluid" src="assets/images/logo.png" alt="" />
                    </Link>
                </nav>
            </div>
        </header >
    )
}

export default Header