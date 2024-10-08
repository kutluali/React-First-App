import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header_top" style={{ backgroundColor: '#1E1E1E', padding: '10px 2' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-2">
                        <div className="logo">
                            <Link to="/">
                                <img src="/assets/images/logo.png" alt="Buzzed Logo" style={{ maxHeight: '50px' }} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent', padding: 0, marginTop: '10px' }}>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-auto">
                                    <Link className="nav-item nav-link" to="/" style={{ color: 'white' }}>ANASAYFA</Link>
                                    <Link className="nav-item nav-link" to="/about" style={{ color: 'white' }}>HAKKIMIZDA</Link> {/* Değişiklik burada */}
                                    <Link className="nav-item nav-link" to="/reservation" style={{ color: 'white' }}>RANDEVU</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-3">
                        <div className="call_text">
                            <a href="tel:02126151515" style={{ color: 'white' }}>
                                <img src="/assets/images/call-icon.png" alt="Call Icon" />
                                <span className="call_text_left">0212 615 15 15</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
