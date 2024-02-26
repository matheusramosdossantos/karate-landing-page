/**
 * @fileoverview File that provides the donate container in the "Who We Are".
 */

/** Animations */
import { JackInTheBox } from "react-awesome-reveal";

/** React Router imports */
import { Link } from "react-router-dom";

export default function Donate({
  className,
  title,
  srcImage,
  paragraph,
  subtitle,
}) {
  return (
    <>
      <section className={className}>
        <JackInTheBox delay={200} triggerOnce>
          <img src={srcImage} />
        </JackInTheBox>
        <h2>
          {title} <br />
          寄付 <br />
          <Link to="/DonationSection">
            <button>Clique aqui</button>
          </Link>
        </h2>
        <h3>{subtitle}</h3>
        <p>{paragraph}</p>
      </section>
    </>
  );
}
