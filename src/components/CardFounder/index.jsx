/**
 * @fileoverview File that provides the cards of the founders at the Karate container.
 */

/** Hooks */
import { useState } from "react";

/** Animations */
import { Bounce, Zoom } from "react-awesome-reveal";

export default function CardFounder({
  className,
  founderName,
  imgSrc,
  karateName,
  karateDescription,
}) {
  /**
   * @type {boolean}
   * A simple state to set if the description is showed or not.
   */
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={className}>
      <h3>
        <strong>{karateName}</strong>
      </h3>
      <Bounce triggerOnce delay={100} duration={2000}>
        <img src={imgSrc} alt={founderName} />
      </Bounce>
      <button onClick={toggleDescription}>SOBRE</button>
      <Zoom triggerOnce>
        {" "}
        {showDescription && (
          <div>
            <h2>{founderName}</h2>
            <p>{karateDescription}</p>
          </div>
        )}
      </Zoom>
    </div>
  );
}
