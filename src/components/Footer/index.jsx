/**
 * @fileoverview File that provides a footer element to the application. The "id" param is just to activate the "a" element.
 */

/** Components */
import Img from "../Img";

/** Styles */
import styles from "./index.module.scss";

export default function Footer({ id }) {
  return (
    <>
      <footer className={styles.footer} id={id}>
        <div>
          <a href="#">
            <Img
              className={styles.logoFooter}
              src={"src/styles/images/Japan-Transparent-PNG.png"}
              alt="Logo"
            />
          </a>
        </div>

        <div>
          <h1>Sobre nossa academia</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            facilis, obcaecati quaerat delectus possimus laudantium dolorum
            aliquam! Qui harum fugiat ex, dicta quae unde.
          </p>
        </div>
        <nav className={styles.navbar}>
          <div>
            <h1>Siga-nos!</h1>
            <a href="">
              <Img
                src="src/styles/images/footerIcons/facebook.png"
                className={styles.facebookIcon}
              />
            </a>
            <a href="">
              <Img
                src="src/styles/images/footerIcons/instagram.png"
                className={styles.instagramIcon}
              />
            </a>
            <a href="">
              <Img
                src="src/styles/images/footerIcons/twitter.png"
                className={styles.twitterIcon}
              />
            </a>
          </div>
        </nav>
      </footer>
      <div className={styles.contacts}>
        <div>
          <Img
            className={styles.telephoneIcon}
            src={"src/styles/images/footerIcons/telefone.png"}
            alt="Logo"
          />
          <h2>+81 98-886-2020</h2>
        </div>
        <div>
          <Img
            className={styles.emailIcon}
            src={"src/styles/images/footerIcons/e-mail.png"}
            alt="Logo"
          />
          <h2>okinawakarate@email.com</h2>
        </div>
        <div>
          <Img
            className={styles.locationIcon}
            src={"src/styles/images/footerIcons/sinal-de-localizacao.png"}
            alt="Logo"
          />
          <a
            target="_blank"
            href="https://www.google.com.br/maps/place/%E9%A6%96%E9%87%8C%E5%9F%8E/@26.2170497,127.7169084,17z/data=!3m1!4b1!4m6!3m5!1s0x34e56bfe6cf4db67:0xc0899fbab29e4f8b!8m2!3d26.2170449!4d127.7194833!16zL20vMDNiZ2Qy?entry=ttu"
          >
            <h2>21-2 Shurikinjocho, Naha, Okinawa 903-0815, Japão</h2>
          </a>
        </div>
      </div>
    </>
  );
}
