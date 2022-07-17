import React, { useState } from "react";
import { useDispatch, useSelector } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import cn from "classnames";


const Header = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <Link href="/">
        <img src="/images/logoBig.png" className={styles.logo} />
      </Link>

      <div className={cn(styles.links, isCollapse ? styles.expandedMenu : "")}>
        <button
          className={styles.mobileBtn}
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <div></div>
          <div></div>
          <div></div>
          <img src="/images/icons/close-button.svg"/>
        </button>

        <div className={styles.menuBar}>
        <a href="https://f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Home Port
          </a>
        <a href="https://market.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Digital Fashion Market
          </a>
          <a href="https://popup.f3manifesto.xyz" className={styles.link} target="_blank" rel="noreferrer">
            IRL Fashion & Collectibles
          </a>
          <a href="https://web3fashionmanifesto.f3manifesto.xyz/manifesto/1" className={styles.link} target="_blank" rel="noreferrer">
            Web3 Fashion Manifesto
          </a>
          <a href="https://themanifest.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            The Manifest Gallery
          </a>

        </div>
      </div>
    </div>
  );
};

export default Header;
