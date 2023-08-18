import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="navigation" className="fixed-top animated-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#body">
                        <img className="img-fluid" src="/assets/images/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto text-center" id="nav">
                            <li className="nav-item active">
                                <Link to='/artist' className='nav-link'>Artist</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/genre' className='nav-link'>Genre</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header