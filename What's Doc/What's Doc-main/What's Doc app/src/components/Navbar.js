import React from 'react'
import styles from './Navbar.module.css'
import Logo1 from '../components/logo1.jpg'
const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-light fixed-top container fw-bolder text-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo1} className={styles.logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav m-auto">
              <a class="nav-link mx-5" href="#hero">
                Home
              </a>
              <a class="nav-link mx-5" href="#services">
                Services
              </a>
              <a class="nav-link mx-5" href="#aboutus">
                About Us
              </a>
              <a class="nav-link mx-5" href="#contactus">
                Contact Us
              </a>
              <a class="nav-link mx-5" href="prescription">Prescription
              </a>
              <a class="nav-link mx-5" href="reviewrating">
                Reviews
              </a>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar