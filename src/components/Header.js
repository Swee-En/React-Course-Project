import React from 'react'

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
                                <a className="nav-link" href="#body">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonials">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#price">Price</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header