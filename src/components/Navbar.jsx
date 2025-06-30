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

     // เมื่อ menu เปิด หรือ ปิด ให้ปรับ overflow ของ body
     useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'; // ปิด scroll
        } else {
            document.body.style.overflow = ''; // คืนค่า overflow เป็นปกติ
        }

        // การ cleanup เพื่อให้แน่ใจว่า body กลับมาปกติเมื่อ component unmount
        return () => {
            document.body.style.overflow = ''; // คืนค่า overflow เมื่อเมนูปิด
        };
    }, [menuOpen]); // การทำงานนี้จะเกิดขึ้นเมื่อ `menuOpen` เปลี่ยนค่า

    return (
        <>
            <div className="nav-con">
                <div className="nav-margin">
                    <div className="nav-items">
                        <div className="logo">PORTFOLIO</div>
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
