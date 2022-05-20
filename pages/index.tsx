import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sun = document.getElementById("sun");
      let bird = document.getElementById("bird");
      let welcomeText = document.getElementById("welcome-text");
      let sectionBtn = document.getElementById("section-btn");
      let value = window.scrollY;
      if (sun) sun.style.top = 13 + value * -0.15 + "%";
      if (bird) {
        bird.style.left = 10 + value * 0.1 + "%";
        bird.style.top = 2 + value * -0.1 + "%";
      }
      if (welcomeText) {
        welcomeText.style.left = 50 + value * 0.2 + "%";
        welcomeText.style.top = 30 + value * -0.2 + "%";
      }
      if (sectionBtn) sectionBtn.style.top = value / 30 + "%";
      console.log(value);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.parallax_img}>
        <div className={styles.background}>
          <Image src="/background.jpg" layout="fill" alt=" " />
        </div>
        <div id="sun" className={styles.sunshine}>
          <Image src="/sun.png" layout="fill" alt=" " />
        </div>
        <div id="bird" className={styles.birds}>
          <Image src="/bird.png" layout="fill" alt=" " />
        </div>
        <div id="welcome-text" className={styles.welcome_text}>
          <h1>Welcome to Nam Doan World&apos;s</h1>
        </div>
      </div>
      <div className={styles.cave}>
        <Image src="/cave.png" layout="fill" alt=" " />

        <div id="section-btn" className={styles.section_button}>
          <div className={styles.title}>What do you find?</div>
          <Link href="/my-cv">
            <a className={styles.link_btn}>My CV ?</a>
          </Link>
          <Link href="/my-cv">
            <a className={styles.link_btn}>My Adventure</a>
          </Link>
        </div>
        <div className={styles.climb}>
          <Image src="/climb.png" layout="fill" alt=" " />
        </div>
      </div>
    </div>
  );
};

export default Home;
