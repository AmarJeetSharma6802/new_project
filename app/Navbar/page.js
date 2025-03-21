"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const[arrow , setArrow] = useState(false)
  const[Pagearrow , setPageArrow] = useState(false)
  const[navbar , setNavbar] = useState(false)
  const refPeroperty = useRef(null)
  const refPage = useRef(null)

  const Pathname = usePathname()
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Jab user fast niche scroll kare to navbar hide ho jaye
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const  handlePeropertyToggle =()=>{
    refPeroperty.current.classList.toggle(styles.show)
    refPage.current.classList.remove(styles.show)

    setArrow(prev => !prev)
    setPageArrow(false); 
  }
  const  handlePageToggle =()=>{
    refPage.current.classList.toggle(styles.show)
    refPeroperty.current.classList.remove(styles.show)
    setPageArrow(prev => !prev)
    setArrow(false);
    
  }
  
  const handleNavbar =()=>{
setNavbar(true)
  }
  const handleClose =()=>{
setNavbar(false)
  }
  


  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        isHidden ? styles.hidden : ""
      }`}
    >
      <label className={styles.label}><img src="https://ebroker.wrteam.me/assets/images/logo/web_logo.png"/> </label>
      <nav className={`${styles.nav} ${navbar ? `${styles.active}` :""}`}>
        <ul className={styles.ul}>
        <div onClick={handleClose} className={styles.close}><i className="fa-solid fa-xmark"></i></div>

        <Link href={"/"} className={Pathname === "/" ? styles.activeLink : ""}><li className={styles.li}>Home</li></Link>
          <li onClick={handlePeropertyToggle} className={styles.li}>Properties  <span className={styles.arrow}>{arrow ? <i className="fa-solid fa-caret-up"></i>  :  <i className="fa-solid fa-caret-down" ></i>}</span>
          <ul className={styles.innerProperty} ref={refPeroperty}>
            <li className={styles.innerPropertyLi}>All Property</li>
            <li className={styles.innerPropertyLi}>Featured Property</li>
            <li className={styles.innerPropertyLi}>Most Viewd Property</li>
            <li className={styles.innerPropertyLi}>Nearby Cities Properties</li>
            <li className={styles.innerPropertyLi}>Most Favorite Properties</li>
          </ul>
          </li>
          <li onClick={handlePageToggle} className={styles.li}>Pages <span className={styles.arrow}>{Pagearrow ?<i className="fa-solid fa-caret-up"></i>:  <i className="fa-solid fa-caret-down" ></i> }</span>
            <ul className={styles.innerPages} ref={refPage}>
              <li className={styles.innerPagesLi}>Subscription Plan</li>
              <li className={styles.innerPagesLi}>Articles</li>
              <li className={styles.innerPagesLi}>FAQs</li>
              <li className={styles.innerPagesLi}>Area Converter</li>
              <li className={styles.innerPagesLi}>Terms & Condition</li>
              <li className={styles.innerPagesLi}>Privacy Policy</li>
            </ul>
          </li>
        
        <Link href="/about" className={Pathname === "/about" ? styles.activeLink : ""}><li className={styles.li}>About Us</li></Link>
          <li className={styles.li}>Contact</li>
        </ul>
      </nav>
      <div className={styles.loginNavbar}>
      <button className={styles.btn}>Login</button>
      <button onClick={handleNavbar} className={styles.Slider}><i className="fa-solid fa-sliders"></i></button>
      </div>
    </header>
  );
}

export default Navbar;
