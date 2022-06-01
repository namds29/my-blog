import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../../components/header";
import styles from "../../styles/Portfolio.module.scss";

export default function MyPortfolio() {
  return (
    <Container fluid className={styles.container}>
      <Header />
      <div className={styles.introduce}>
        <div className={styles.background_intro}>
          <Image src="/moutain1.png" layout="fill" />
          <div className={styles.darker}></div>
          <div className={styles.inner_content}>
            <div className={styles.text_intro}>
              <span>PORT</span>
              <span className={styles.txt_folio}>FOLIO</span>
            </div>
            <div className={styles.intro_content}>
              <Row className={styles.intro_detail}>
                <Col xs={5} className={styles.img_intro}>
                  <Image src="/img-intro.png" layout="fill" alt="img intro" />
                </Col>
                <Col xs={7} className={styles.rightside}>
                  <div>Hi!</div>
                  <div>
                    I&apos;m <span className={styles.txt_folio}>Nam Doan</span>
                  </div>
                  <div className={styles.txt_role}>Web Developer</div>
                  <div className={styles.txt_info}>
                    You guys can find me on:
                  </div>
                  <div className={styles.row_icon}>
                    <div className={styles.icon}>
                      <Image src="/ic-git.svg" layout="fill" alt="icon git" />
                    </div>
                    <div className={styles.icon}>
                      <Image src="/ic-fb.svg" layout="fill" alt="icon fb" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles.section_about_me}>
          <div className={styles.txt_header}>WEB DEVELOPER</div>
          <Row className={styles.content_about_me}>
            <Col lg={6} className={styles.color_background}>
              <div className={styles.img_about_me}>
                <Image src="/img-human.png" layout="fill" alt="icon git" />
              </div>
            </Col>
            <Col lg={6} className={styles.description}>
              <div className={styles.title}>
                A little bit <br />
                <span className={styles.txt_folio}>about me ...</span>
              </div>
              <div className={styles.sub_description}>
                I recently started in the world of front-end web development,
                inspired by the desire to bring those ideas to life, give wings
                to that creativity and provide solutions to those problems that
                usually surround us.
              </div>
              <div className={styles.sub_description_1}>
                Let´s make a something great!
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
