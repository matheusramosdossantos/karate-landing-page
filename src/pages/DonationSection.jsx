/**
 * @fileoverview Donation section page where the user can simulate a donation to the karate academy.
 */

/** Reactstrap Components */
import { FormGroup } from "reactstrap";

/** Styles */
import styles from "../styles/scss/globals.module.scss";

/** Components */
import Btn from "../components/Authentication/Btn";
import Form from "../components/Authentication/Form";
import Input from "../components/Authentication/Input";
import Label from "../components/Authentication/Label";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subtitle from "../components/Subtitle";

/** Hooks */
import { useState } from "react";

/** React Router imports */
import { Link } from "react-router-dom";

export default function DonationSection() {
  /**
   * @type {object}
   * A state that sets the giver's name, email and donation value.
   */
  const [giver, setGiver] = useState({
    fullname: "",
    email: "",
    donationValue: "",
  });
  /**
   * @type {string}
   * A state that sets the user payment option. Could be also a boolean value.
   */
  const [paymentOption, setPaymentOption] = useState("");
  /**
   * @type {object}
   * A state that defines the credit card informations.
   */
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  /**
   * @type {string}
   * This state toggles the user section to the payment option section. Could also be a boolean value.
   */
  const [section, setSection] = useState("donationData");

  return (
    <>
      <Header />
      <Container className={styles.containerDonationSection}>
        <div className={styles.containerDonationSectionItem}>
          <Form
            className={styles.donationSectionForm}
            onSubmit={(ev) => {
              ev.preventDefault();
              setSection("payment");
            }}
          >
            <>
              {section === "payment" ? (
                /**
                 * Here is a ternary operator to change the section through an onClick event. If "payment" shows the payment section.
                 * If "donationData" shows the user informations to the donation.
                 */
                <>
                  <Btn
                    className={styles.backButton2}
                    text="Voltar"
                    type="button"
                    onClick={() => setSection("donationData")}
                  />
                  <Label
                    text="FORMA DE PAGAMENTO:"
                    className={styles.donationLabel}
                  />
                  <FormGroup>
                    <Input
                      name="radio1"
                      type="radio"
                      id="cardPaymentInput"
                      className={styles.paymentRadioInput}
                      value="creditCard"
                      checked={paymentOption === "creditCard"}
                      onChange={(ev) => setPaymentOption(ev.target.value)}
                    />
                    <Label
                      htmlFor="cardPaymentInput"
                      text="Cartão de Crédito"
                      className={styles.labelPayment}
                    />
                  </FormGroup>

                  {paymentOption === "creditCard" && (
                    /**
                     * If the paymentOption equals "creditCard" it shows this form.
                     */
                    <Form className={styles.creditCardForm}>
                      <Label
                        htmlFor="cardNumber"
                        text="Número do cartão de crédito:"
                        className={styles.creditCardLabel}
                      />
                      <Input
                        maxLength="16"
                        className={styles.cardInfoInput}
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardInfo.cardNumber}
                        onChange={(ev) => {
                          /**
                           * @function
                           * This function is responsible to allow only numbers on this input.
                           */
                          const rawValue = ev.target.value;
                          const numericValue = rawValue.replace(/[^\d]/g, "");
                          setCardInfo({
                            ...cardInfo,
                            [ev.target.name]: numericValue,
                          });
                        }}
                      />

                      <Label
                        htmlFor="expirationDate"
                        text="Data de Expiração:"
                        className={styles.creditCardLabel}
                      />
                      <Input
                        className={styles.cardInfoInput}
                        type="month"
                        id="expirationDate"
                        name="expirationDate"
                        value={cardInfo.expirationDate}
                        onChange={(ev) => {
                          setCardInfo({
                            ...cardInfo,
                            [ev.target.name]: ev.target.value,
                          });
                        }}
                      />

                      <Label
                        htmlFor="cvv"
                        text="CVV:"
                        className={styles.creditCardLabel}
                      />
                      <Input
                        maxLength="3"
                        className={styles.cardInfoInput}
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cardInfo.cvv}
                        onChange={(ev) => {
                          /**
                           * @function
                           * This function is responsible to allow only numbers on this input.
                           */
                          const rawValue = ev.target.value;
                          const numericValue = rawValue.replace(/[^\d]/g, "");
                          setCardInfo({
                            ...cardInfo,
                            [ev.target.name]: numericValue,
                          });
                        }}
                      />
                    </Form>
                  )}
                  <FormGroup>
                    <Input
                      name="radio1"
                      type="radio"
                      id="pixPaymentInput"
                      className={styles.paymentRadioInput}
                      value="pix"
                      checked={paymentOption === "pix"}
                      onChange={(ev) => setPaymentOption(ev.target.value)}
                    />
                    <Label
                      htmlFor="pixPaymentInput"
                      text="Pix"
                      className={styles.labelPayment}
                    />
                    {paymentOption === "pix" && (
                      /**
                       *  If paymentOption equals "pix" it shows a little text below.
                       */
                      <Subtitle
                        className={styles.donationPaymentSubtitle}
                        subtitle="Aparecerá a chave pix de nossa academia assim que você clicar no botão. Obrigado!"
                      />
                    )}
                  </FormGroup>
                  <Link to="/">
                    <Btn
                      className={styles.donationSectionBtn}
                      type="submit"
                      text="Doar"
                      onClick={() => {
                        /**
                         * @function
                         * Here we have a function to the response after the submit button is clicked.
                         */
                        if (paymentOption === "creditCard") {
                          alert(
                            `Muito obrigado pela doação, ${giver.fullname}!`
                          );
                        } else {
                          alert("eef5dCDEefe5WFS525dg77UVWZYZ4257abcmopq@%&");
                        }
                      }}
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/">
                    <Btn
                      className={styles.backButton1}
                      text="Voltar"
                      type="button"
                    />
                  </Link>
                  <Label
                    className={styles.donationLabel}
                    id="nameLabelDonation"
                    htmlFor="nameInputDonation"
                    text="NOME COMPLETO:"
                  />
                  <Input
                    className={styles.donationInput}
                    id="nameInputDonation"
                    type="text"
                    placeholder="Digite seu nome..."
                    value={giver.fullname}
                    onChange={(ev) =>
                      setGiver({ ...giver, fullname: ev.target.value })
                    }
                  />
                  <Label
                    className={styles.donationLabel}
                    id="emailLabelDonation"
                    htmlFor="emailInputDonation"
                    text="EMAIL:"
                  />
                  <Input
                    className={styles.donationInput}
                    id="emailInputDonation"
                    type="email"
                    placeholder="Digite seu email..."
                    value={giver.email}
                    onChange={(ev) =>
                      setGiver({ ...giver, email: ev.target.value })
                    }
                  />
                  <Label
                    className={styles.donationLabel}
                    id="valueLabelDonation"
                    htmlFor="valueInputDonation"
                    text="VALOR:"
                  />
                  <Input
                    className={styles.donationInput}
                    id="valueInputDonation"
                    type="text"
                    placeholder="Digite um valor..."
                    value={`R$${giver.donationValue}`}
                    onChange={(ev) => {
                      /**
                       * @function
                       * This function is responsible to allow only numbers on this input.
                       */
                      const rawValue = ev.target.value;
                      const numericValue = rawValue.replace(/[^\d.]/g, "");
                      setGiver({ ...giver, donationValue: numericValue });
                    }}
                  />
                  <Btn
                    className={styles.donationSectionBtn}
                    type="submit"
                    text="Continuar"
                  />
                </>
              )}
            </>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
