import React, { useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import "../App.css";


const Appointment = ({ modal, toggle, save, userData }) => {
  const [appointmentDate, setappointmentDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDates, setSelectedDates] = useState([]);
// const savedDates= []

  const handleDate = (date) => {
    // if(selectedDates.includes(date)) {
    //   setSelectedDates(selectedDates.filter((d) => d !== date))
    // }
    //  else {
    setSelectedDates([...selectedDates, date]);
    // localStorage.setItem("allDates", selectedDates);

    // console.log(date.toISOString());
    // }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setappointmentDate(value);
    } else if (name === "description") {
      setDescription(value);
    } else {
      setSelectedDate(value);
      // handleDate(value)
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    // let savedDates = [];
    taskObj["Name"] = appointmentDate;
    taskObj["Description"] = description;
    taskObj["Date"] = selectedDate;
    // savedDates = selectedDates;
    save(taskObj);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Schedule Appointment</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Doctor's Name</label>
            <input
              type="text"
              className="form-control"
              value={appointmentDate}
              onChange={handleChange}
              name="taskName"
              required
            />
          </div>
          <div className="form-group">
            <label>Health Complaints</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Pick Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDate}
              name="date"
              required
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <br />
      <br />
      <div className="calendardiv">
        <Calendar
        onChange={handleChange}
          value={selectedDate}
          style={{
            width: '100%',
          }}
        />
      </div>
    </>
  );
};

export default Appointment;
