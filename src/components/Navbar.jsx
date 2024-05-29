import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="nav-con">
                <div className="nav-margin">
                    <div className="nav-items">
                        <div className="logo">BELOXDEV</div>
                        <div className="menu-icon" onClick={handleMenuToggle}>
                            &#9776;
                        </div>
                        <ul ref={menuRef} className={`menu ${menuOpen ? 'open' : ''}`}>
                            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                            <li><a href="#techskill" onClick={() => setMenuOpen(false)}>Tech Stack</a></li>
                            <li><a href="#project" onClick={() => setMenuOpen(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}></div>
        </>
    );
}
