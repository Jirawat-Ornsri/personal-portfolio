import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="nav-con">
            <div className="nav-margin">
                <div className="nav-items">
                    <div className="logo">BELOXDEV</div>

                    <ul className="menu">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Tech Stack</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
