import React, { useEffect, useState } from "react";
import '../sheets/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ selected }) {
    const [className, setClassName] = useState('navitem');

    const handleLinkClick = () => {
        setClassName('navitem selected');
    };

    useEffect(() => {
        setClassName('navitem selected');
    }, [selected])

    return (
        <>
            <div className={`navbar ${selected !== null ? selected : ''}`}>
                <div className="navbar textcont">
                    <Link
                        to="/"
                        className={selected === 'home' ? className: 'navitem'}
                        onClick={() => handleLinkClick()}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={selected === 'about' ? className: 'navitem'}
                        onClick={() => handleLinkClick()}
                    >
                        About
                    </Link>
                    <Link
                        to="/portfolio"
                        className={selected === 'portfolio' ? className: 'navitem'}
                        onClick={() => handleLinkClick()}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;