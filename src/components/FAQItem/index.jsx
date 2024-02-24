/**
 * @fileoverview File that provides the FAQ item in the FAQ container. It shows a question, 
 a button to show the answer to the question and the question itself.
 */

/** Components */
import Btn from "../Authentication/Btn";
import Li from "../Li";

/** Styles */
import styles from "../../styles/scss/globals.module.scss";

/** Hooks */
import { useState } from "react";

/** Animations */
import { Slide } from "react-awesome-reveal";

export default function FAQItem({ question, index }) {
  /** A state that shows a answer to the Li component when the Btn component is clicked and hides when clicked again.
   * @type {boolean}
   */
  const [localShowAnswer, setLocalShowAnswer] = useState(false);

  return (
    <div className={styles.questionsItem} key={index}>
      <Li className={styles.li} text={question} />
      <Btn
        className={styles.questionButton}
        type="button"
        text={localShowAnswer ? "▲" : "▼"}
        onClick={() => {
          {
            setLocalShowAnswer(!localShowAnswer);
          }
        }}
      />

      {localShowAnswer && (
        <Slide>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            delectus laudantium officiis non, cupiditate nemo mollitia. Fugit
            quam quaerat distinctio reprehenderit et dicta saepe corrupti eos
            hic? Adipisci, iusto blanditiis.
          </p>
        </Slide>
      )}
    </div>
  );
}
