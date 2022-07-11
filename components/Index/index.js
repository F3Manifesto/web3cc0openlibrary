import React, { useState, Component } from "react";
import styles from "./styles.module.scss";
import ProjectData from "../../pages/api/projects.json"


const Index = () => {
  return (
    <>
      <section className={styles.section4}>
        <div className={styles.container}>

        <h1 className={styles.title}>Web3 CC0 Index</h1>

          <div className={styles.gallery}>
    
            { ProjectData.map( (project) => {
                return(
                  <div className={styles.galleryItem}>
                  <a href={ project.url } target="_blank" rel="noreferrer"><img className={styles.galleryImage} src={ project.image }/></a>
                  <div className={styles.title2}>{project.title}</div>
                  <div className={styles.description}>{project.description}</div>
                  </div>
                  
                )
              })
            }
           </div>
          </div>
        </section>
    </>
  );
};

export default Index
  ;
