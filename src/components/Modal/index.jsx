/**
 * @fileoverview File that provides a modal element to the header component. This component
is a message that show when the header form is submitted. Besides it provides the button to the first container form.
 */

/** React imports  */
import React, { useContext, useState } from "react";

/** Reactstrap components */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

/** Contexts */
import UserContext from "../../contexts/UserContext";
import SetUsersContext from "../../contexts/SetUsersContext";

/** Components */
import Btn from "../Authentication/Btn";

/** Styles */
import styles from "../Authentication/Btn/index.module.scss";

function ModalContainer1({ className }) {
  /**
   * Function from the useContext with the context that provides the "user" object from the "Home.jsx"
   * @type {function}
   */
  const user = useContext(UserContext);
  /**
   * Function from the useContext with the context that provides the useful states from "Home.jsx".
   * @type {function}
   */

  const {
    setNewUser,
    setAllUsers,
    formButton,
    setFormButton,
    setAge,
    setName,
    setEmail,
    setDisableInput,
  } = useContext(SetUsersContext);

  /**
   * A variable using state that defines if modals are showing their informations or not.
   * @type {boolean}
   */
  const [modal, setModal] = useState(false);

  /**
   * A function that toggles the modals to true or false.
   * @function
   */
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      {
        /**
         * Here is a ternary operator checking if the form button is true. If it's it shows the button with a "Enviar" text.
        If it's not shows the button with a "Já inscrito!" text and disable it.
         * */
        !formButton ? (
          <Btn
            className={styles.submitFormButton}
            type="submit"
            text="Enviar"
            onClick={() => {
              /**
               * Function that doesn't allow to continue if the form inputs aren't completed.
               * @function
               */

              if (user.name === "" || user.email === "" || user.age === "") {
                setModal(modal);
              } else {
                setModal(!modal);
              }
            }}
          />
        ) : (
          <Btn
            className={styles.submitFormButtonRegistered}
            type="submit"
            text="Já inscrito!"
            disabled
          />
        )
      }
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Confira suas informações abaixo:
        </ModalHeader>
        <ModalBody>
          Nome: {user.name} <br />
          Email: {user.email} <br />
          Idade: {user.age}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              /**
               * This function makes the modal closes and saves the user that was informed on local storage.
               * @function
               */
              setModal(!modal);
              setNewUser(true);
              setAllUsers((state) => {
                const newState = [...state, user];
                localStorage.setItem("registered", JSON.stringify(newState));
                return newState;
              });
              alert(
                "Inscrito com sucesso!\nEm breve lhe será enviado um email contendo todas as informações necessárias para o progresso de sua inscrição."
              );
              setAge("");
              setEmail("");
              setName("");
              setFormButton(true);
              setDisableInput(true);
            }}
          >
            Inscrever-se
          </Button>

          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalContainer1;
