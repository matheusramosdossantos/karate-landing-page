/**
 * @fileoverview File that provides the teachers container in the "Who We Are".
 */

/** Animations */
import { Fade, Slide } from "react-awesome-reveal";

export default function Teachers({
  className,
  title,
  subtitle,
  srcImage,
  paragraph,
}) {
  return (
    <>
      <section className={className}>
        <Slide delay={300} duration={2000} triggerOnce>
          <img src={srcImage} />
        </Slide>
        <Slide delay={300} duration={2000} direction="right" triggerOnce>
          <h2>
            {title} <br />
            先生たち
          </h2>
        </Slide>
        <h3>
          {subtitle}
          <Fade
            delay={300}
            duration={1000}
            direction="left"
            cascade
            triggerOnce
          >
            <ul>
              <li>Professores acima do grau Chudan (中段)</li>
              <li>Ambiente propício para a prática</li>
              <li>Treinos intensos</li>
            </ul>
          </Fade>
        </h3>

        <p>{paragraph}</p>
      </section>
    </>
  );
}
