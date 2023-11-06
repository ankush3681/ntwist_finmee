import React from 'react'
import styles from "../style/Footer.module.css";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="Logo" />
      {/* <br/> */}
      <div className={styles.line}>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
      </div>
      <p className={styles.add}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      <div className={styles.icon}>
      <AiOutlineTwitter className={styles.socialMedia}/>
      <FaLinkedin className={styles.socialMedia}/>
      </div>
      <p  className={styles.add}>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  )
}

export default Footer