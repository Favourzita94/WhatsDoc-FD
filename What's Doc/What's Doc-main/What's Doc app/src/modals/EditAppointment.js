import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const EditAppointment= ({modal, toggle, updateTask, taskObj}) => {
    const [appointmentName, setAppointmentName] = useState('');
    const [description, setDescription] = useState('');
      const [selectedDate, setSelectedDate] = useState(new Date());
        


// const handleDate = (date) => {
//   if (selectedDates.includes(date)) {
//     setSelectedDates(selectedDates.filter((d) => d !== date));
//   } else {
//     setSelectedDates([...selectedDates, date]);
//     localStorage.setItem("allDates", selectedDates);

//     // console.log(date.toISOString());
//   }
// };

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setAppointmentName(value)
        }else if (name === "description") {
          setDescription(value);
        } else {
          setSelectedDate(value);
          // handleDate(value)
        }


    }

    useEffect(() => {
        setAppointmentName(taskObj.Name)
        setDescription(taskObj.Description)        
        setSelectedDate(taskObj.Date)        

    },[taskObj])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] =  appointmentName
        tempObj['Description'] = description
        tempObj['Date'] = selectedDate
        updateTask(tempObj)
    }

    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Appointment</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Doctor's Name</label>
            <input
              type="text"
              className="form-control"
              value={appointmentName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
          {/* <div className="form-group">
            <label>Pick Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDate}
              name="date"
              required
            />
          </div> */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
};

export default EditAppointment;