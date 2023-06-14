import React from 'react'
import styles from './Hero/hero3.module.css';
import hero5 from "../components/images/hero5.jpg";



const Services = () => {
  return (
    <div className={styles.herosect} style={{ padding: "30px" }} id='services'>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img src={hero5} alt="LandingHero" />
        </div>
        <div className={styles.heroText}>
          <h1>Our Services</h1>
          <p>
            What's Doc goal is to enable those who cannot afford expensive medical 
            bills gain access to good healthcare professionals and for quick response to emergency health cases.
          </p>
          <ul>
            <li>
              Consultancy: Users can schedule appointments or consult with doctors or specialists without having to visit the hospital.
            </li>
            <li>
              File/Image Upload: Users can upload their laboratory test results online for immediate 
              attention rather than visiting the hospital first.
            </li>
            <li>
              Prescription Management: Users can also receive prescription from the comfort of their homes after 
              meeting with the consultant or doctor online. 
            </li>
            <li>
              Health Record Integration: Users can keep track of their health records without
              having to explain their health issues anytime they consult the doctor as their 
              records can be stored.
            </li>
          </ul>
          <p>What makes us unique?</p>
          <ul>
            <li>User-friendly interface</li>
            <li>Personalization</li>
            <li>Cross-platform compatibility</li>
            <li>24/7 customer services</li>
          </ul>

          
        </div>
      </div>
    </div>
  );
}

export default Services