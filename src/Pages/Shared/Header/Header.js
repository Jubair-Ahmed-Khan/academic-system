import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    // const useLogin = () => {
    //     const history = useHistory();
    //     history.push("./login");
    // }
    return (
        <div className="header-bg show">
            <div className="container py-1">
                <span className="float-start">
                    <i className="fas fa-envelope me-1" />
                    <span className="me-1">cse@mbstu.ac.bd</span>
                    <span className="ms-1 me-2">|</span>
                    <i className="fab fa-facebook-square" /> Facebook
                </span>
                <span className="float-end">
                    <i className="fas fa-lock me-1"></i>

                    <span as={Link} className="me-1" to="/login">Login</span>

                    <span className="ms-1 me-2">|</span>
                    <i className="fas fa-lock me-1"></i>
                    <span className="me-3">Register</span>
                </span>

            </div>
        </div>

    );
};

export default Header;