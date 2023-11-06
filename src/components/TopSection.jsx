import React from 'react';
import styles from "../style/TopSection.module.css";

const TopSection = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png")',
    backgroundSize: 'cover', 
  };

  return (
    <div style={backgroundImageStyle} className={styles.backImg}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Data-powered solutions<br/>for Industrial Excellance</h1>
          <br/>
          <button>Read More</button>
        </div>
        <div className={styles.box}>
          <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt='chart'/>
        </div>
      </div>
    </div>
    
  );
};

export default TopSection;

