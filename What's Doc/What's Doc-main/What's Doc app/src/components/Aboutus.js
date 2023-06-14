import React from 'react'
import styles from "./Hero/hero3.module.css";
import hero1 from "../components/images/hero1.jpg";


const Aboutus = () => {
  return (
    <div className={styles.herosect} style={{ padding: "30px" }} id='aboutus'>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>About Us</h1>
          <p>
            What's Doc is a web application inspired by the need to help users
            receive treatment at reduced cost, who need emergency medical attention, and reduce
            hospital distance gap. Our app offers a clean and user-friendly features that allow
            users to register and authenticate, keep track record of their health progress
            upload their laboratory result with ease and receive prescription at the comfort of their homes.
          </p>
        </div>
        <div className={styles.heroImg}>
          <img src={hero1} alt="LandingHero" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus