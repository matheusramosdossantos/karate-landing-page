/**
 * @fileoverview File that provides a header element to the application. This component has
 a function to show, when the screen is small, an appropriate header. 
 */

/** Hooks */
import { useState } from "react";

/** Styles */
import styles from "./index.module.scss";

export default function Header() {
  /**
   * A state to set the smaller header when the screen is minor than 650px.
   * @type {boolean}
   */
  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.menuToggle}
          onClick={() => {
            setMenuVisibility(!isMenuVisible);
          }}
        >
          <img
            className={styles.minHeaderLogo}
            src="src\styles\images\Japan-Transparent-PNG.png"
            alt="Japan Logo"
          />
        </div>
        <nav className={styles.nav + (isMenuVisible ? "show" : "")}>
          <a href="#">
            {!isMenuVisible ? (
              <img
                className={styles.homeLogo}
                src="src\styles\images\Japan-Transparent-PNG.png"
                alt="Japan Logo"
              />
            ) : null}
          </a>
          <a href="#karate">
            <h4 className={styles.headerOptions}>
              O KARATÊ <br /> 空手
            </h4>
          </a>
          <a href="#whoWeAre">
            <h4 className={styles.headerOptions}>
              QUEM SOMOS <br /> 私たちは誰ですか
            </h4>
          </a>
          <a href="#questions">
            <h4 className={styles.headerOptions}>
              FAQ <br />
              疑問
            </h4>
          </a>
          <a href="#gallery">
            <h4 className={styles.headerOptions}>
              GALERIA <br />
              ギャラリー
            </h4>
          </a>
          <a href="#contacts">
            <h4 className={styles.headerOptions}>
              CONTATO <br />
              接触
            </h4>
          </a>
        </nav>
      </header>
    </>
  );
}
