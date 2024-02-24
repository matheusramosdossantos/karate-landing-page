/**
 * @fileoverview File that provides the students container in the "Who We Are".
 */

/** Animations */
import { Rotate } from "react-awesome-reveal";

export default function Students({
  className,
  title,
  srcImage,
  paragraph,
  subtitle,
}) {
  return (
    <>
      <section className={className}>
        <h2>
          +300
          <br />
          {title} <br />
          学生
        </h2>
        <Rotate delay={400} triggerOnce>
          {" "}
          <img src={srcImage} />
        </Rotate>
        <p>{paragraph}</p>
        <h3>
          {subtitle}
          <br />
        </h3>
      </section>
    </>
  );
}
