import React from 'react';
import styles from "./BoxCard.module.css"

const BoxCard1 = ({title,description,img}) => {
  return (
    <div>
      <div className={styles.container}>
       <div className={styles.box}>
          <img src={img} alt='chart'/>
        </div>
        <div className={styles.box}>
          <h1>{title}</h1>
          <p>{description}</p>
          <br/>
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default BoxCard1
