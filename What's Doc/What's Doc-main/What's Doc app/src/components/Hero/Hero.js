import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./hero3.module.css";
import logo from "../images/logo.jpg";
import Signup from "../Signup";
import Login from "../Login";
import FileUpload from "../FileUpload";


const Hero = () => {
  const navigate = useNavigate();

  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [userList, setUserList] = useState([]);

  const toggleSignup = () => {
    setSignupModal(!signupModal);
  };
  const toggleLogin = () => {
    setLoginModal(!loginModal);
  };

  const saveUser = (userObj) => {
    let tempList = userList;
    tempList.push(userObj);
    localStorage.setItem("userList", JSON.stringify(tempList));
    setUserList(userList);
    setSignupModal(false);
  };

  const loginUser = (userObj) => {
    const storedUsers = JSON.parse(localStorage.getItem("userList"));
    if (storedUsers) {
      const storedUser = storedUsers.find(
        (user) =>
          user.email === userObj.email && user.password === userObj.password
      );
      if (storedUser) {
        console.log("Login successful!");
        setLoginModal(false);
        navigate('/appointmentlist');
      }
      else {
        alert("Invalid credentials");
      }
    } else {
      alert("No user data found. Please sign up to continue.");
    }};

  return (
    <div className={styles.herosect} style={{ padding: "30px" }} id='hero'>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>What's Doc</h1>
          <p>
             Here, we are dedicated to providing exceptional clinical 
              care that prioritizes your well-being and we offer a comprehensive range 
              of services designed to promote your health and enhance your quality of life.
          </p>
          <p>New to the platform?</p>
          <button
            style={{ cursor: "pointer" }}
            type="button"
            onClick={() => setSignupModal(true)}
          >
            Get Started
          </button>
          <br />
          <br />
          <p>Already has an account? </p>
          <button
            style={{ cursor: "pointer" }}
            type="button"
            onClick={() => setLoginModal(true)}
          >
            Login
          </button>
          <br />
          <br />
          <p>To Upload Your lab test results</p>
          <button
            style={{ cursor: "pointer" }}
            type="button"
            onClick={FileUpload}
          >
            Click here
          </button>
        </div>
        <div className={styles.heroImg}>
          <img src={logo} alt="LandingHero" />
        </div>
      </div>
      <Signup toggle={toggleSignup} modal={signupModal} save={saveUser} />
      <Login toggle={toggleLogin} modal={loginModal} login={loginUser} />
    </div>
  );
}

export default Hero;
