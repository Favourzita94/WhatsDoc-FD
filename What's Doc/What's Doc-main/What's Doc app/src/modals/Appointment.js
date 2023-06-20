import React, { useEffect, useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import "../App.css";
import axios from "axios";


const Appointment = ({ modal, toggle, save, userData }) => {
  const [appointmentName, setappointmentName] = useState("");
  const [description, setDescription] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDates, setSelectedDates] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
// const savedDates= []


useEffect(() => {
  const auth_token = localStorage.getItem('auth_token');

  axios
    .get('http://localhost:8000/users/doctors/', {
      headers: {
        Authorization: `Token ${auth_token}`,
      },
    })
    .then((res) => {
      const doctorsData = res.data;
      console.log(doctorsData)
      setDoctors(doctorsData);
    })
    .catch((err) => console.log(JSON.stringify(err)))

}, []);



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

    if (name === "name") {
      setappointmentName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "doctor") {
      setSelectedDoctor(value);
    } else if (name === "meeting_link") {
      setMeetingLink(value);
    } else {
      setSelectedDate(value);
      // handleDate(value)
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    // let savedDates = [];
    taskObj["name"] = appointmentName;
    taskObj["description"] = description;
    taskObj["time_choice"] = "3 PM";
    taskObj["meeting_link"] = meetingLink;
    taskObj["doctor"] = selectedDoctor;

    const auth_token = localStorage.getItem('auth_token');

    axios
    .post('http://localhost:8000/users/appointments/', taskObj, {
      headers: {
        Authorization: `Token ${auth_token}`,
      },
    })
    .then((res) => {
      console.log("Meeting created ", res.data['id'])
    })
    .catch((err) => console.log(JSON.stringify(err)))
    // savedDates = selectedDates;
    // save(taskObj);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Schedule Appointment</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={appointmentName}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label>Doctor's Name</label>
            <select
              className="form-control"
              // value={selectedDoctor}
              onChange={handleChange}
              name="doctor"
              required
            >
              <option value={null}>Select a doctor</option>
              {doctors && doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.username}
                </option>
              ))}
            </select>
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
            <label>Meeting Link</label>
            <input
              type="text"
              className="form-control"
              value={meetingLink}
              onChange={handleChange}
              name="meeting_link"
              required
            />
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
