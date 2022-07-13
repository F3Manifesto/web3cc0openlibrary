import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ProjectData from "../../pages/api/projects.json"

function Button({button, filter}) {
  return (
    <div>
      <button type="button" onClick={() => filter('NFTs')}>NFTs</button>
      <button type="button" onClick={() => filter('PFP')}>PFP</button>

    </div>


  )
}


export default Button;