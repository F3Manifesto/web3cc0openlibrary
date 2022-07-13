import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ProjectData from "../../pages/api/projects.json"


const Item = ({ ProjectData }) => {


        // All: 'All',
        // NFTs: 'NFTs',
        // Protocol: 'Protocol',
        // PFP: 'PFP',
        // DeFi: 'DeFi',
        // Gaming: 'Gaming',
        // Metaverse: 'Metaverse',
        // Fashion: 'Fashion',
        // Modeling: 'Modeling',
        // Publishing: 'Publishing',
        // Recreational: 'Recreational',
        // Dev: 'Dev',
        // Music: 'Misc',
     


  return (
    <>
      <section className={styles.section4}>
        <div className={styles.container}>


          <div className={styles.gallery}>
          {
          ProjectData.map( (project) => {
                return(
                  <div className={styles.galleryItem} key={project.id}>
                  <span className={styles.category}>{ project.category }</span>
                  <a href={ project.url } target="_blank" rel="noreferrer"><img className={styles.galleryImage} src={ project.image }/></a>
                  <div className={styles.title2}>{project.title}</div>
                  <div className={styles.description}>{project.description}</div>
                  </div>
                  
                )
              })} 
    
           </div>
          </div>
        </section>
    </>
  );
};

export default Item
  ;

        
    {/*
        <div id="myBtnContainer">
          <button class="btn active" onclick="filterSelection('All')">All</button>
          <button class="btn" onclick="filterSelection('NFTs')">NFTs</button>
          <button class="btn" onclick="filterSelection('Protocol')">Protocol/Ecosystem</button>
          <button class="btn" onclick="filterSelection('PFP')">PFP</button>
          <button class="btn" onclick="filterSelection('DeFi')">DeFi</button>
          <button class="btn" onclick="filterSelection('Gaming')">Gaming</button>
          <button class="btn" onclick="filterSelection('Metaverse')">Metaverse</button>
          <button class="btn" onclick="filterSelection('Music')">Music</button>
          <button class="btn" onclick="filterSelection('Fashion')">Fashion</button>
          <button class="btn" onclick="filterSelection('Modeling')">Modeling</button>
          <button class="btn" onclick="filterSelection('Publishing')">Publishing</button>
          <button class="btn" onclick="filterSelection('Recreational')">Recreational</button>
          <button class="btn" onclick="filterSelection('Dev')">Dev</button>
          <button class="btn" onclick="filterSelection('Misc')">Misc</button>
        </div> */}