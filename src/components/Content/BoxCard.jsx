import React from 'react';
import styles from "./BoxCard.module.css"
import Button from '../Button';

const BoxCard = ({title,description,img}) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>{title}</h1>
          <p>{description}</p>
          <br/>
          <Button/>
        </div>
        <div className={styles.box}>
          <img src={img} alt='chart'/>
        </div>
      </div>
    </div>
  )
}

export default BoxCard
