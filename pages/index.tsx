import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    function resize() {
      setSize(window.innerWidth);
    }
    function scrollEffect() {
      let sun = document.getElementById("sun");
      let bird = document.getElementById("bird");
      let welcomeText = document.getElementById("welcome-text");
      let sectionBtn = document.getElementById("section-btn");
      let value = window.scrollY;
      sun && (sun.style.top = 13 + value * -0.1 + "%");
      if (bird) {
        bird.style.left = 10 + value * 0.2 + "%";
        bird.style.top = 2 + value * -0.1 + "%";
      }
      if (welcomeText) {
        welcomeText.style.left = 50 + value * 0.1 + "%";
        welcomeText.style.top = 30 + value * -0.1 + "%";
      }
      sectionBtn && (sectionBtn.style.top = value / 25 + "%");
      if (window.innerWidth <= 750) {
        sectionBtn && (sectionBtn.style.top = value / 10 + "%");
        sun && (sun.style.top = 13 + value * 0.06 + "%");
      }
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.parallax_img}>
        <div className={styles.background}>
          {size > 750 && <Image src="/background.jpg" layout="fill" alt=" " />}
          {size <= 750 && (
            <Image src="/background-1.jpg" layout="fill" alt=" " />
          )}
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
          <Link href="/portfolio">
            <a className={styles.link_btn}>My Portfolio</a>
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
