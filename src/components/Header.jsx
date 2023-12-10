import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../public/Netflix-avatar.png"
import { useState, useEffect } from 'react'

const Header = () => {
    const [headerBg, setHeaderBg] = useState(false);

    const headerScorll = () => {
        if (window.scrollY > 140) {
            setHeaderBg(true);
        } else {
            setHeaderBg(false);
        }
    };

    useEffect(() => {
        // Attach the event listener when the component mounts
        window.addEventListener("scroll", headerScorll);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", headerScorll);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <header className={`${headerBg ? 'header__bg' : ''}`}>
            <Link to="/home" style={{ textDecoration: "none" }}>
                <h2>Netflix</h2>
            </Link>
            <div className="image_loader_header">
                <img src={img1} alt="img_user" />
            </div>
        </header>
    )
}

export default Header
