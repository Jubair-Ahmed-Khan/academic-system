import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className='header-bg'>
            <div className="container py-1">
                <span className="float-start">
                    <i className="fas fa-envelope me-1" />
                    <span className="me-3"> cse@mbstu.ac.bd |</span>
                    <i className="fab fa-facebook-square" /> Facebook
                </span>
                <span className="float-end">
                    <i className="fas fa-lock me-1"></i>
                    <span className="me-3"> Login |</span>
                    <i className="fas fa-lock me-1"></i>
                    <span className="me-3"> Register</span>
                </span>

            </div>
        </div>

    );
};

export default Header;