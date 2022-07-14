import { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Audio from "../components/Audio";
import Item from "../components/Item/item"
import { useRouter } from "next/router";
import Link from "next/link";
import projects from "./projects"
import Button from "../components/Button"
import React, { Component }  from 'react';



const allCategories = ['All', ...new Set(projects.map(project => project.category))];

console.log(allCategories);


export default function Home() {


  //other filter
  const [ ProjectData, setMenuProjects ] = useState(projects);
  const [ buttons, setButtons ] = useState(allCategories);

  const filter = (button) =>{

    if(button === 'All'){
      setMenuProjects(projects);
      return;
    }

    const filteredData = projects.filter(project => project.category ===  button);
    setMenuProjects(filteredData)
  }


  var defaultProjects = [
    { name: "All", category: "All" },
    { name: "NFTs", category: "NFTs" },
    { name: "Protocol", category: "Protocol/Ecosystem" },
    { name: "PFP", category: "PFP" },
    { name: "DeFi", category: "DeFi" },
    { name: "Gaming", category: "Gaming" },
    { name: "Metaverse", category: "Metaverse" },
    { name: "Music", category: "Music" },
    { name: "Web3 Fashion", category: "Fashion" },
    { name: "Web3 Models", category: "Modeling" },
    { name: "Publishing", category: "Publishing" },
    { name: "Recreational", category: "Recreational" },
    { name: "Development", category: "Dev" },
    { name: "Misc", category: "Misc" },
];


  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [images4, setImages4] = useState([]);
  const [images5, setImages5] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      fetch(
        "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test1"
      )
        .then((res) => res.json())
        .then((data) => {
          setImages1(data?.data.map((item) => item.data));
        });

      fetch(
        "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test2"
      )
        .then((res) => res.json())
        .then((data) => {
          setImages2(data?.data.map((item) => item.data));
        });

      fetch(
         "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test3"
        )
          .then((res) => res.json())
          .then((data) => {
            setImages3(data?.data.map((item) => item.data));
          });
      
      fetch(
        "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test4"
        )
          .then((res) => res.json())
          .then((data) => {
            setImages4(data?.data.map((item) => item.data));
        });

        fetch(
          "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test5"
          )
            .then((res) => res.json())
            .then((data) => {
              setImages5(data?.data.map((item) => item.data));
          });
    };

    fetchContents();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 CC0 Open Library</title>
        <meta name="description" content="Web3 CC0 Open Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.section1}>
          <h1 className={styles.title}>Web3 CC0 Open Library</h1>
          <h3 className={styles.subText}>
            The Web3 CC0 Open Library is a curated assemblage of content and
            projects within web3 that are entirely CC0. The index provides
            creators with a generative discovery mechanism for CC0 source
            content, featured original CC0 works, and the means to amplify their
            greatest derivatives.
          </h3>
        </section>

        <section className={styles.section2}>
          {images1.map((item) => (
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
              <div className={styles.sliderBody}>
                <p className={styles.sliderTitle}>{item.title}</p>
                <p className={styles.sliderDescription}>{item.description}</p>
                <a
                  className={styles.sliderBuyNow}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View & Collect{" "}
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className={styles.section5} />

        <section className={styles.section3}>
           {images2.map((item) => (
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
              <div className={styles.sliderBody}>
                <p className={styles.sliderTitle}>{item.title}</p>
                <p className={styles.sliderDescription}>{item.description}</p>
                <a
                  className={styles.sliderBuyNow}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View & Collect{" "}
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className={styles.section5} />

        <section className={styles.section6}>
           {images3.map((item) => (
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
              <div className={styles.sliderBody}>
                <p className={styles.sliderTitle}>{item.title}</p>
                <p className={styles.sliderDescription}>{item.description}</p>
                <a
                  className={styles.sliderBuyNow}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View & Collect{" "}
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className={styles.section5} />
        
        <section className={styles.section7}>
           {images4.map((item) => (
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
              <div className={styles.sliderBody}>
                <p className={styles.sliderTitle}>{item.title}</p>
                <p className={styles.sliderDescription}>{item.description}</p>
                <a
                  className={styles.sliderBuyNow}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View & Collect{" "}
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className={styles.section5} />


        <section className={styles.section7}>
           {images5.map((item) => (
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
              <div className={styles.sliderBody}>
                <p className={styles.sliderTitle}>{item.title}</p>
                <p className={styles.sliderDescription}>{item.description}</p>
                <a
                  className={styles.sliderBuyNow}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View & Collect{" "}
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section4}>

        <h1 className={styles.titlecc0}>Web3 CC0 Index</h1>


        <Button button={buttons} filter={filter} />
        
          <Item ProjectData={ProjectData}/>
  
         
          
        </section>
      </main>

      <Footer />
    </div>
  )
}