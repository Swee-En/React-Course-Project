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

                    <div className="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto text-center" id="nav">
                            <li className="nav-item active">
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to='/favorites' className='nav-link'>My Favorites</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    )
}

export default Header