import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

function Button({button, filter}) {
  return (
    <div className={styles.buttonsfull}>
      <button className={styles.button} type="button" onClick={() => filter('All')}>All</button>
      <button className={styles.button} type="button" onClick={() => filter('PFP')}>PFP</button>
      <button className={styles.button}  type="button" onClick={() => filter('Fashion')}>Fashion</button>
      <button className={styles.button}  type="button" onClick={() => filter('Music')}>Music</button>
      <button className={styles.button}  type="button" onClick={() => filter('Art')}>Art</button>
      <button className={styles.button}  type="button" onClick={() => filter('Modeling')}>Modeling</button>
      <button className={styles.button}  type="button" onClick={() => filter('Publishing')}>Publishing</button>
      <button className={styles.button}  type="button" onClick={() => filter('Gaming')}>Gaming</button>




    </div>


  )
}


export default Button;