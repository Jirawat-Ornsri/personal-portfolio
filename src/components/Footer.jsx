import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { MdOutlineDesktopMac } from "react-icons/md";

function Footer() {
    return (
        <div className="section-footer-con">
            <div className="footer-margin">
                <div className="footer-info-con">
                    <div className="logo">
                        <h1>PORTFOLIO</h1>
                    </div>
                    <div className="footer-contact">
                        <div className="email">jirawat.ornsri@gmail.com</div>
                        <div className="social">
                            <FaGithub size={28} fill='white' />
                            <MdEmail size={28} fill='white' />
                            <GrInstagram size={28} fill='white' />
                        </div>
                    </div>
                </div>
                <hr color='grey' />
                <div className="menu-con">
                    <ul className="menu">
                        <li><a href="#about">About</a></li>
                        <li><a href="#techskill">Tech Stack</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="menu-icon">
                        <FaCode size={28} fill='white' />
                        <MdOutlineDesktopMac size={28} fill='white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer