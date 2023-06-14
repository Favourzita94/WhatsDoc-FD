import React from 'react'
import styles from './Hero/hero3.module.css';
import LandingHero from "./Hero/LandingHero.webp";

const Contactus = () => {
  return (
    <div className={styles.herosect} style={{ padding: "30px" }}>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img src={LandingHero} alt="LandingHero" />
        </div>
        <div className={styles.heroText}>
          <h1>Contact Us</h1>
          {/* <p>
            SchedulePro goal is to create a seamless tracking experience of the
            daily tasks for both individuals and teams
          </p>
          <ul>
            <li>
              Task tracking: Users can create and organize tasks, set
              priorities, and deadlines.
            </li>
            <li>
              Mobile accessibility: Users can access their tasks and projects
              from their mobile devices, allowing them to manage their tasks on
              the go.
            </li>
            <li>
              Reminder notifications: Users can set reminders for upcoming tasks
              or deadlines.
            </li>
            <li>
              Calendar integration: Users can integrate their app with their
              calendar to view their schedule and deadlines.
            </li>
          </ul>
          <p>What makes us unique?</p>
          <ul>
            <li>User-friendly interface</li>
            <li>Personalization</li>
            <li>Cross-platform compatibility</li>
            <li>24/7 customer services</li>
          </ul>

          <br />
          <br />
          <p>Already has an account? </p> */}
        </div>
      </div>
    </div>
  );
}


export default Contactus