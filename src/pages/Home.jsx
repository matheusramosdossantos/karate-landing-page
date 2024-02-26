/**
 * @fileoverview Home page of the application where are the majority of the React components
 and the main functions.
 */

/** Hooks */
import { useState } from "react";

/** Components */
import Header from "../components/Header/index.jsx";
import Container from "../components/Container/index.jsx";
import Title from "../components/Title/index.jsx";
import Input from "../components/Authentication/Input/index.jsx";
import Form from "../components/Authentication/Form/index.jsx";
import Label from "../components/Authentication/Label/index.jsx";
import Btn from "../components/Authentication/Btn/index.jsx";
import Img from "../components/Img/index.jsx";
import Subtitle from "../components/Subtitle/index.jsx";
import CardFounder from "../components/CardFounder/index.jsx";
import Teachers from "../components/ContainerSection/Teachers/index.jsx";
import Donate from "../components/ContainerSection/Donate/index.jsx";
import Students from "../components/ContainerSection/Students/index.jsx";
import Ul from "../components/Ul/index.jsx";
import CarouselContainer from "../components/Carousel/index.jsx";
import Footer from "../components/Footer/index.jsx";
import ModalContainer1 from "../components/Modal/index.jsx";
import FAQItem from "../components/FAQItem/index.jsx";

/** Animations */
import { Fade, Zoom } from "react-awesome-reveal";

/** Style */
import styles from "../styles/scss/globals.module.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

/** Contexts */
import UserContext from "../contexts/UserContext.jsx";
import SetUsersContext from "../contexts/SetUsersContext.jsx";

export default function Home() {
  /**
   * @type {string}
   * These three following states are to define the user informations on the first form.
   */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  /**
   * @type {array}
   * This state is an empty array that receives questions with the desired word provided by the user.
   */
  const [discoveredQuestions, setDiscoveredQuestions] = useState([]);

  /**
   * @type {string}
   * This state is the keyword desired by the user provided on FAQ container.
   */
  const [keyword, setKeyword] = useState("");

  /**
   * @type {boolean}
   * This state is just a form to ensure that the user informations will not disappear
  until the modal is closed.
   */
  const [newUser, setNewUser] = useState(false);
  /**
   * @type {boolean}
   * This state is to show the form button with a "Enviar" text or with a "Já inscrito!" text.
   */
  const [formButton, setFormButton] = useState(false);
  /**
   * @type {boolean}
   * This state is to change the inputs to disabled as soon as the form is confirmed.
   */
  const [disableInput, setDisableInput] = useState(false);

  /**
   * @function
   * This is a state that set new users registered.
   */
  const [allUsers, setAllUsers] = useState(() => {
    const registeredPeople = localStorage.getItem("registered");
    if (!registeredPeople) return [];
    return JSON.parse(registeredPeople);
  });
  /**
   * @type {array}
   * This is a questions array that can be discovered on the FAQ container.
   */
  const questions = [
    "Qual será o local dos treinos?",

    "Qual será o local da hospedagem?",

    "Que estilo de karatê foi o primeiro a existir?",

    "Qual é o preço da viagem?",

    "Quais são os preços da viagem?",

    "Qual é o valor da viagem?",

    "Quais são os valores da viagem?",

    "Qual estilo de karatê será ensinado?",

    "Quanto tempo durará o aprendizado?",

    "Qual é a idade mínima para participar?",

    "Teremos tempo livre para passear?",

    "Qual é a história do karatê?",

    "Quem foi o fundador do primeiro tipo de karatê?",
  ];
  /**
   * @type {object}
   * An user object.
   */
  const user = { name, email, age };

  /**
   * @function
   * This function is responsible to find the keyword inserted on the FAQ container and bring the questions with it.
   * If the question doesn't exist it brings an alert informing that.
   */

  const findQuestion = () => {
    const regex = new RegExp("\\b" + keyword + "\\b", "gi");
    const questionWithKeywords = questions.filter((question) =>
      regex.test(question)
    );

    if (questionWithKeywords.length > 0) {
      setDiscoveredQuestions(questionWithKeywords);
    } else {
      alert(`Pergunta não encontrada. Tente novamente, por favor.`);
    }
  };

  /**
   * @function
   * A simple function to save the user inserted on the main form.
   */
  const saveUser = ({ name, email, age }) => {
    {
      name, email, age;
    }
  };

  return (
    <div className={styles.app}>
      <SetUsersContext.Provider
        value={{
          setNewUser,
          setAllUsers,
          setAge,
          setEmail,
          setName,
          setFormButton,
          formButton,
          setDisableInput,
          disableInput,
        }}
      >
        <UserContext.Provider value={user}>
          <Header />
          <Container className={styles.container1}>
            <div className={styles.containerItem1}>
              <Fade
                delay={200}
                duration={1000}
                direction="left"
                cascade
                triggerOnce
              >
                <Title
                  className={styles.titleContainer1}
                  title="APRENDA KARATÊ EM "
                >
                  <h1 className={styles.strongLetter}>OKINAWA!</h1>
                </Title>
                <Subtitle
                  className={styles.subtitleContainer1}
                  subtitle="Inscreva-se e faça uma viagem para o berço do Karatê!"
                />
                <Form
                  className={styles.form1}
                  onSubmit={async (ev) => {
                    /**
                     * @function
                     * A function to submit the form, save the user informed and clean the inputs.
                     */

                    ev.preventDefault();

                    if (newUser) {
                      saveUser({ name, email, age });
                      setNewUser(false);
                      setName("");
                      setEmail("");
                      setAge("");
                    }
                  }}
                >
                  <Label
                    className={styles.label1}
                    htmlFor="nameInput"
                    id="nameLabel"
                    text="NOME COMPLETO:"
                  />
                  <Input
                    className={styles.input1}
                    type="text"
                    id="nameInput"
                    name="nameInput"
                    placeholder="Digite seu nome..."
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    disabled={disableInput}
                  />
                  <Label
                    className={styles.label1}
                    htmlFor="emailInput"
                    id="emailLabel"
                    text="EMAIL:"
                  />
                  <Input
                    className={styles.input1}
                    type="email"
                    id="emailInput"
                    name="emailInput"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    disabled={disableInput}
                  />
                  <Label
                    className={styles.label1}
                    htmlFor="ageInput"
                    id="ageLabel"
                    text="IDADE:"
                  />
                  <Input
                    className={styles.input1}
                    type="number"
                    id="ageInput"
                    name="ageInput"
                    placeholder="Digite sua idade..."
                    value={age}
                    onChange={(ev) => setAge(ev.target.value)}
                    disabled={disableInput}
                  />
                  <ModalContainer1 />
                </Form>
              </Fade>
            </div>
            <Zoom delay={200} duration={2000} triggerOnce>
              <div className={styles.containerItem1}>
                <Img
                  className={styles.img1}
                  src="../images/castelo-shuri-mod.png"
                  alt="Castelo Shuri, Okinawa"
                  imgText="Castelo Shuri, datado do século XV, em Okinawa."
                >
                  <h3 className={styles.imgText1}>
                    Castelo Shuri, datado do século XV, em Okinawa.
                  </h3>
                </Img>
              </div>
            </Zoom>
          </Container>
          <Container className={styles.container2}>
            <Fade delay={200} duration={2000} direction="down" triggerOnce>
              <Title
                className={styles.titleContainer2}
                id="karate"
                title="Uma árvore com diversos ramos..."
              />
            </Fade>
            <Fade delay={200} duration={2000} direction="up" triggerOnce>
              <Subtitle
                className={styles.subtitleContainer2}
                subtitle="Mas plantada e cultivada em Okinawa."
              />
            </Fade>
            <Img
              className={styles.oldOkinawaKarateImg}
              src="../../public/castelo-shuri-oldkarate.jpg"
              alt={"Foto antiga do karatê de Okinawa"}
            >
              <Title className={styles.oldOkinawaKarateTitle}>
                <Fade delay={200} duration={2000} direction="left" triggerOnce>
                  <p className={styles.oldOkinawaKarateParagraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum accusantium veniam veritatis id ipsa aut architecto,
                    vitae a iste eligendi porro cupiditate nulla nihil itaque
                    ad! Molestiae qui ullam doloribus quisquam eius reiciendis
                    ipsa laudantium amet, illo autem tempore veniam iste
                    consequuntur eligendi quis voluptatem quidem incidunt nisi
                    soluta necessitatibus rerum nihil ea impedit? Deleniti non
                    rerum ab possimus, nisi reiciendis quo iste assumenda fugiat
                    fugit tempore placeat officiis. Nemo cum, sunt adipisci
                    quisquam est dolorum asperiores labore quis aperiam
                    praesentium aliquid, numquam, eum illum laborum dicta
                    blanditiis error ullam. Ad porro amet vitae ratione,
                    quisquam hic facilis, itaque molestias asperiores eligendi
                    perspiciatis incidunt repudiandae reiciendis vel tempore
                    dicta. Repellendus consequuntur ducimus ut quam explicabo,
                    officia quos recusandae omnis eius quaerat sapiente! Modi
                    eveniet nobis, non sequi error quos laboriosam natus alias
                    asperiores laborum beatae voluptatibus? Repellendus labore
                    ut atque doloribus voluptatibus aspernatur fugiat pariatur.
                    Vero, sed similique! Eaque quo, ad iste qui ratione eos
                    quisquam. Nostrum expedita ipsa enim vero temporibus
                    consequatur nobis, incidunt a porro sint maxime voluptatem
                    beatae quas fuga debitis aut ullam eum? Necessitatibus sequi
                    quod provident rem vitae molestias dignissimos commodi
                    tempora cumque, blanditiis error perferendis quaerat
                    consequuntur adipisci animi mollitia unde. Aut, accusantium
                    nesciunt.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum accusantium veniam veritatis id ipsa aut architecto,
                    vitae a iste eligendi porro cupiditate nulla nihil itaque
                    ad! Molestiae qui ullam doloribus quisquam eius reiciendis
                    ipsa laudantium amet, illo autem tempore veniam iste
                    consequuntur eligendi quis voluptatem quidem incidunt nisi
                    soluta necessitatibus rerum nihil ea impedit? Deleniti non
                    rerum ab possimus, nisi reiciendis quo iste assumenda fugiat
                    fugit tempore placeat officiis. Nemo cum, sunt adipisci
                    quisquam est dolorum asperiores labore quis aperiam
                    praesentium aliquid, numquam, eum illum laborum dicta
                    blanditiis error ullam. Ad porro amet vitae ratione,
                    quisquam hic facilis, itaque molestias asperiores eligendi
                    perspiciatis incidunt repudiandae reiciendis vel tempore
                    dicta. Repellendus consequuntur ducimus ut quam explicabo,
                    officia quos recusandae omnis eius quaerat sapiente! Modi
                    eveniet nobis, non sequi error quos laboriosam natus alias
                    asperiores laborum beatae voluptatibus? Repellendus labore
                    ut atque doloribus voluptatibus aspernatur
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum accusantium veniam veritatis id ipsa aut architecto,
                    vitae a iste eligendi porro cupiditate nulla nihil itaque
                    ad! Molestiae qui ullam doloribus quisquam eius reiciendis
                    ipsa laudantium amet, illo autem tempore veniam iste
                    consequuntur eligendi quis voluptatem quidem incidunt nisi
                    soluta necessitatibus rerum nihil ea impedit? Deleniti non
                    rerum ab possimus, nisi reiciendis quo iste assumenda fugiat
                    fugit tempore placet.
                  </p>
                </Fade>
              </Title>
            </Img>
          </Container>
          <Title className={styles.titleContainer3} title="ESTILOS DE KARATÊ" />
          <Container className={styles.container3}>
            <CardFounder
              className={styles.cardFounder}
              founderName="Chosin Chibana"
              imgSrc={"src/styles/images/chibana.jpg"}
              karateName="SHORIN-RYU"
              karateDescription="Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Sed arcu nisi, efficitur non laoreet id, porta nec lectus.
          Nam dapibus consequat urna. Proin fermentum erat in justo cursus finibus.
          Mauris dignissim sapien in arcu placerat, at placerat purus rhoncus.
          Donec hendrerit, nibh suscipit ultricies tincidunt, tortor enim finibus neque, vitae molestie purus orci non velit.
          Vestibulum at mi vitae eros dictum aliquam. Vivamus luctus sem massa, et tincidunt tellus varius ut.
          Nunc nec nunc ultricies dui placerat malesuada ut sed erat. Ut eu sagittis ipsum. Nullam vitae lobortis velit, maximus semper turpis.
          Aenean scelerisque elit quis dui fringilla lacinia."
            />

            <CardFounder
              className={styles.cardFounder}
              founderName={"Masutatsu Oyama"}
              imgSrc={"src/styles/images/masoyama.jpg"}
              karateName="KYOKUSHIN"
              karateDescription="Curabitur cursus purus eu sollicitudin molestie.
           In tortor magna, hendrerit vitae ex at, tempor elementum eros.
           Sed euismod mauris ut magna finibus, sit amet faucibus dolor accumsan.
           Integer molestie, lorem non semper lobortis, mauris sapien accumsan urna, eu lobortis ligula ipsum vitae augue.           Sed mollis sed odio non mattis. Curabitur nec augue ipsum. Sed finibus nulla lorem, sed iaculis urna commodo ut.
           Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in arcu tempor, luctus libero ut, fringilla purus.
           Morbi vel feugiat metus, sed vulputate dolor. Aliquam diam nulla, suscipit eu pharetra vitae, ultricies sit amet arcu.
           Suspendisse potenti. Aliquam feugiat vel ante at posuere. Mauris condimentum ultrices venenatis."
            />

            <CardFounder
              className={styles.cardFounder}
              founderName="Gichin Funakoshi"
              imgSrc={"../..public/images/gichin-funakoshi.jpg"}
              karateName="SHOTOKAN"
              karateDescription="Etiam convallis suscipit sem, id rhoncus sem molestie eget.
           Ut bibendum urna eu augue euismod, a fermentum lorem imperdiet. Donec sem sem, sollicitudin in est in, placerat consectetur sapien.
           Nullam libero lacus, sagittis rhoncus gravida ac, interdum non nibh. Sed tempor elit erat, ut scelerisque metus sollicitudin nec.
           Quisque porttitor mollis placerat. Morbi porta ultrices nisi, a ornare dolor malesuada ut. Cras varius feugiat lacus eu pretium.
           Fusce placerat, quam vel finibus luctus, tortor magna tincidunt lacus, eget viverra elit turpis et ante. Integer non feugiat justo, feugiat malesuada nisi. Donec facilisis, nulla volutpat rutrum suscipit, metus velit sodales mi, ut facilisis velit erat et mi.
           Praesent sed dictum tortor. Phasellus porttitor, risus in eleifend vulputate, tellus massa pretium dolor, nec ultricies diam mi non nisl. 
           Pellentesque placerat, magna nec porta vestibulum, magna diam rutrum odio, sit amet facilisis quam quam ut ligula.            
           Mauris aliquet tempor massa, eget fermentum eros ultricies dapibus."
            />
          </Container>

          <Container className={styles.container4}>
            <Fade direction="up" delay={200} duration={2000} triggerOnce>
              <Title
                className={styles.titleContainer4}
                title="QUEM SOMOS?"
                id="whoWeAre"
              />
            </Fade>
            <Teachers
              className={styles.teachersSection}
              srcImage="../../public/yagi-sensei-for-web.jpg"
              title="PROFESSORES"
              subtitle="Preservando a tradição do karatê"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna risus, pharetra ut cursus sit amet, tincidunt ut erat. Sed cursus est quis nisl varius, id aliquet nisi dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pretium iaculis nibh, et luctus tortor aliquam at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc volutpat magna non risus porta eleifend. Nullam bibendum eros nisl, quis tincidunt mi suscipit non. Fusce eu quam ac lorem dapibus viverra sit amet sed ligula. Proin velit lacus, elementum eu maximus ut, suscipit in nibh. Sed dictum porta nulla, at bibendum augue rutrum a. Morbi elementum enim quis fringilla tristique. Aliquam erat volutpat.
           "
            />
            <Students
              className={styles.studentsSection}
              srcImage="../../public/karate-students.jpg"
              title="ALUNOS"
              subtitle="Da faixa branca à preta!"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna risus, pharetra ut cursus sit amet, tincidunt ut erat. Sed cursus est quis nisl varius, id aliquet nisi dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pretium iaculis nibh, et luctus tortor aliquam at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc volutpat magna non risus porta eleifend. Nullam bibendum eros nisl, quis tincidunt mi suscipit non. Fusce eu quam ac lorem dapibus viverra sit amet sed ligula. Proin velit lacus, elementum eu maximus ut, suscipit in nibh. Sed dictum porta nulla, at bibendum augue rutrum a. Morbi elementum enim quis fringilla tristique. Aliquam erat volutpat.
        "
            />
            <Donate
              className={styles.donateSection}
              srcImage="../../public/the-world-of-okinawa-karate_img08.jpg"
              title="FAÇA SUA DOAÇÃO"
              subtitle="Ajude-nos a fazer crescer a fortaleza, a beleza e o amor do karatê!"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna risus, pharetra ut cursus sit amet, tincidunt ut erat. Sed cursus est quis nisl varius, id aliquet nisi dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pretium iaculis nibh, et luctus tortor aliquam at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc volutpat magna non risus porta eleifend. Nullam bibendum eros nisl, quis tincidunt mi suscipit non. Fusce eu quam ac lorem dapibus viverra sit amet sed ligula. Proin velit lacus, elementum eu maximus ut, suscipit in nibh. Sed dictum porta nulla, at bibendum augue rutrum a. Morbi elementum enim quis fringilla tristique. Aliquam erat volutpat.
    "
            />
          </Container>
          <Container className={styles.container5}>
            <Zoom delay={300} triggerOnce>
              <Img
                className={styles.logoImageFAQ}
                src={"src/styles/images/Japan-Transparent-PNG.png"}
                alt="Logo"
              />
            </Zoom>
            <div className={styles.containerItem5}>
              <Title
                className={styles.titleContainer5}
                title="Dúvidas? Podemos te ajudar!"
                id="questions"
              />
              <Form
                className={styles.FAQForm}
                onSubmit={(ev) => {
                  /**
                   * @function
                   * Another function to submit a form. But that one is to the FAQ container.
                   * Here the findQuestion() is executed when submitted the form.
                   */
                  ev.preventDefault();
                  findQuestion();
                }}
              >
                <Label
                  className={styles.questionLabel}
                  htmlFor="questionInput"
                  id="questionLabel"
                />
                <Input
                  className={styles.questionInput}
                  id="questionInput"
                  name="questionInput"
                  placeholder="Digite uma palavra-chave para encontrar respostas"
                  type="search"
                  value={keyword}
                  onChange={(ev) => setKeyword(ev.target.value)}
                />
                <Btn
                  type="submit"
                  className={styles.FAQButton}
                  text={
                    <Img
                      src="src/styles/images/lupa.png"
                      className={styles.buttonSearchIcon}
                    />
                  }
                />
              </Form>
            </div>
            <div className={styles.containerItem5}>
              <Ul className={styles.ul}>
                {discoveredQuestions.map((result, index) => (
                  /**
                   * @function
                   * Here is showed the questions with the keyword inserted by the user.
                   */
                  <Fade direction="up">
                    <FAQItem key={index} question={result} index={index} />
                  </Fade>
                ))}
              </Ul>
            </div>
          </Container>
          <Container className={styles.container6}>
            <Title
              className={styles.titleContainer6}
              title="GALERIA"
              id="gallery"
            />
            <CarouselContainer className={styles.carouselItem} />
          </Container>
          <Footer id="contacts" />
        </UserContext.Provider>
      </SetUsersContext.Provider>
    </div>
  );
}
