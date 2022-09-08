import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './navBar.css';
import Slider from '../slider/slider';

export default function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Tayyaba Naseem
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick} style={{ textDecoration: 'none' }}>
                                <Link to="aboutId" spy={true} smooth={true} style={{ textDecoration: 'none' }}>
                                    ABOUT
                                </Link>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick} style={{ textDecoration: 'none' }}>
                                <Link to="contactId" spy={true} smooth={true} style={{ textDecoration: 'none' }}>
                                    CONTACT
                                </Link>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                        <ion-icon name={click ? "close-outline" : "menu-outline"}></ion-icon>
                    </div>


                </div>
            </nav>
            <Slider />
        </div>
    );
}