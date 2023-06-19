import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";


const Login = ({ modal, toggle, login, userData }) => {
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let userData = {};
    userData["username"] = username;
    userData["password"] = password;

    axios
    .post("http://localhost:8000/api/login/", {username, password})
    .then((res) => {
      const auth_token = res.data["token"]
      console.log(auth_token)
      localStorage.setItem('auth_token', auth_token)
    })
    .catch((err) => console.log(JSON.stringify(err)));
    
    login(userData);
  };
//  const onFinish = (values) => {
//    const templateParams = {
//      to_email: userData.email,
//      subject: values.subject,
//      message: values.message,
//      attachment: values.attachment ? values.attachment[0].originFileObj : null,
//    };

//    emailjs
//      .send(
//        process.env.REACT_APP_EMAILJS_SERVICE_ID,
//        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//        templateParams,
//        process.env.REACT_APP_EMAILJS_USER_ID
//      )
//      .then(
//        (response) => {
//          console.log("SUCCESS!", response.status, response.text);
//         //  message.success("Email sent successfully!");
//        },
//        (error) => {
//          console.log("FAILED...", error);
//         //  message.error("Failed to send email.");
//        }
//      );
//  };

//  const onFinishFailed = (errorInfo) => {
//    console.log("Failed:", errorInfo);
//   //  message.error("Failed to send email. Please fill in all required fields.");
//  };


  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Login</ModalHeader>
      <ModalBody>
        <form action="POST">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              // value={username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              // value={password}
              onChange={handleChange}
              name="password"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Login;
