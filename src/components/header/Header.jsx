import React, {useState} from "react";
import './Header.css';
import { HiOutlineHome, HiOutlineUser,HiOutlineClipboardList, HiOutlineBadgeCheck, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";


const Header = () => {

    // const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        // let current = "";
        // sections.forEach((section) => {
          
        //     const sectionTop = section.offsetTop;
        //     const sectionHeight = section.clientHeight;
        //     if (pageYOffset >= sectionTop - sectionHeight / 2.5) {
        //       current = section.getAttribute("id");
        //     }
        //   });
        //   setActiveNav("#" + current)
          
        const header = document.querySelector(".header");
        if(scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
   
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Portfolio</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon"/>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon"/>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon"/>Skills
                            </a>
                        </li>
                       
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} 
                            className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon"/>Projects
                            </a>
                        </li>
                         <li className="nav__item">
                            <a href="#publications" onClick={() => setActiveNav("#publications")} 
                            className={activeNav === "#publications" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineClipboardList className="nav__icon"/>Publications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon"/>Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header