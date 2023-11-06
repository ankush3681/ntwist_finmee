import React from 'react'
import styles from "../style/Footer.module.css";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="Logo" />
      <div className={styles.navlink}>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
      </div>
      <p className={styles.add}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      <div>
        <Link to="#"><BsTwitter className={styles.socialMedia}/></Link>
        <Link to="#"><FaLinkedin className={styles.socialMedia}/></Link>
     
      
      </div>
      <p  className={styles.add}>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  )
}

export default Footer