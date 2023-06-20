import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Signup = ({ modal, toggle, save }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "first_name") {
      setFirstName(value)
    } else if (name === "last_name") {
      setLastName(value)
    } else if (name === 'email') {
      setEmail(value);
    } 
    else {
        setPassword(value)
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let userData = {};
    userData["username"] = username;
    userData["first_name"] = firstName;
    userData["last_name"] = lastName;
    userData["password"] = password;
    userData["email"] = email;
    userData["is_staff"] = false;
    userData["is_patient"] = true;
    userData["is_doctor"] = false;

    save(userData);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
      <ModalBody>
              <form action="">

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={handleChange}
            name="username"
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={handleChange}
            name="first_name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={handleChange}
            name="last_name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>
       </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Sign Up
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Signup;

