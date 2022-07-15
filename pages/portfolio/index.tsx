import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Portfolio.module.scss";

export default function MyPortfolio() {
  const classTxtFolio = styles.txt_folio + ' ' + styles.skills;
  const txtProgrammingSkill = styles.txt_folio + ' ' + styles.txt_progr;
  return (
    <Container fluid className={styles.container}>
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
              <div className={styles.center_div}>
                <div className={styles.sub_description_1}>
                  Let´s make a something great!
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles.section_skills}>
            <div className={styles.txt_header}>SKILLS</div>
            <div className={styles.header}>
              <div>Design </div>
              <div className={classTxtFolio}>
                skills
              </div>
              <div className={styles.row_logo}>
                <div className={styles.skill_logo}>
                  <Image src="/pts.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/figma.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/Lightroom.svg" layout="fill" alt="icon git" />
                </div>
              </div>
            </div>
            <div className={styles.header}>
              <div>Programming </div>
              <div className={txtProgrammingSkill}>
                skills
              </div>
              <div className={styles.row_logo}>
                <div className={styles.skill_nodejs}>
                  <Image src="/nodejs.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/ic-angular.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/ic-react.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/ic-html.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/ic-css.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/ic-js.svg" layout="fill" alt="icon git" />
                </div>
                <div className={styles.skill_logo}>
                  <Image src="/ic-bs.svg" layout="fill" alt="icon git" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Container>
  );
}
