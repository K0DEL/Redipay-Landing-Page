import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faYoutube, faCodepen } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";


const Navbar = () => {
    return(
    <nav>
        <div id="nav-logo-section" class="nav-section">
            <a href="#">
                <FontAwesomeIcon icon={faDumpsterFire} className="logo-icon" />
            </a>
        </div>
        <div id="nav-link-section" class="nav-section">
            <a href="#">ABOUT</a>
            <a href="#">WORK</a>
        </div>
        <div id="nav-social-section" class="nav-section">
            <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faYoutube} />   
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faCodepen} />   
            </a>
        </div>
        <div id="nav-id-section" class="nav-section">
        <a href="#">GET IN TOUCH</a>
        </div>
    </nav>
    );
};

export default Navbar;