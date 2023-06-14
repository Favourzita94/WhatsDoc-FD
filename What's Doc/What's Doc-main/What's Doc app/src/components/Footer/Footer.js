import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.jpg'
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import styles from './footer.module.css';

export default function Footer() {
	// footer component for external pages
	return (
    <div className={styles.footerContainer} id="contactus">
      <div className={styles.socialslogo}>
        <img src={Logo} alt="brand logo" />
      </div>
      <div className={`${styles.footer} lpContainer`}>
        <div className={styles.brandSocials}>
          <div>
            <p>
            
              Our team of highly skilled professionals is committed to delivering personalized treatment 
              plans tailored to your specific needs. Whether you're seeking preventive care, diagnostic 
              services, or specialized treatments.
            </p>
            <p>Follow us on all social media platforms</p>
            <div className={styles.socials}>
              <a href="https://github.com/Favourzita94/WhatsDoc-FD">
                {" "}
                <img src={facebook} alt="facebook logo" />
              </a>
              <a href="https://github.com/Favourzita94/WhatsDoc-FD">
                {" "}
                <img src={twitter} alt="twitter logo" />
              </a>
              <a href="https://github.com/Favourzita94/WhatsDoc-FD">
                {" "}
                <img src={instagram} alt="instagram logo" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.devAsk}>
          <p>More on What's Doc</p>
          <Link to="/coming" className={styles.link}>
            Privacy Policy
          </Link>
          <Link to="/coming" className={styles.link}>
            Terms of Use
          </Link>
          <Link to="/coming" className={styles.link}>
            Cookie Policy
          </Link>
        </div>

        <div className={styles.support}>
          <p>Support</p>
          <Link to="/coming" className={styles.link}>
            How it Works
          </Link>
          <Link to="/coming" className={styles.link}>
            Help Centre
          </Link>
        </div>
      </div>
    </div>
  );
}
