import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMidNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    
  };
  window.addEventListener("resize",()=>{
    if (window.innerWidth > 800){
      setIsOpen(false);
    }
  })
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.navLogo}>
          <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" alt="logo" />
          <div></div>
        </div>
        
        <div className={style.midNavSection}>
          <Link to="#" className={style.navLink}>
            Home
          </Link>
          <Link to="#" className={style.navLink}>
            Industries
          </Link>
          <Link to="#" className={style.navLink}>
            AI Software
          </Link>
          <Link to="#" className={style.navLink}>
            Blog
          </Link>
          <Link to="#" className={style.navLink}>
            Contact Us
          </Link>
        </div>

         
          <div className={style.burgerMenu} onClick={toggleMidNav}>
            <GiHamburgerMenu className={style.burgerIcon} />
          </div>
      </nav>
      {isOpen && (
        <div className={style.dropdownNavMenu}>
          <Link to="#" className={style.navLink}>
            Home
          </Link>
          <Link to="#" className={style.navLink}>
            About
          </Link>
          <Link to="#" className={style.navLink}>
            Blog
          </Link>
          <Link to="#" className={style.navLink}>
            Contact
          </Link>
        </div>
      )}
    </div>

  );
};

export default Navbar;
