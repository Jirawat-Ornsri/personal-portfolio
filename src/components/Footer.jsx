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
            <div className="footer-info-con">
                <div className="logo">
                    <h1>BELOXDEV</h1>
                </div>
                <div className="footer-contact">
                    <div className="email">jirawat.ornsri@gmail.com</div>
                    <div className="social">
                        <FaGithub size={28} fill='gray' />
                        <MdEmail size={28} fill='gray' />
                        <GrInstagram size={28} fill='gray' />
                    </div>
                </div>
            </div>
            <hr color='gray'/>
            <div className="menu-con">
                <ul className="menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#techskill">Tech Stack</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="menu-icon">
                    <FaCode size={28} fill='gray'/>
                    <MdOutlineDesktopMac size={28} fill='gray'/>
                </div>
            </div>
        </div>
    )
}

export default Footer