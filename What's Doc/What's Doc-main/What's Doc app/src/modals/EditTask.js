import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
      const [selectedDate, setSelectedDate] = useState(new Date());
        const [selectedDates, setSelectedDates] = useState([]);


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
            setTaskName(value)
        }else if (name === "description") {
          setDescription(value);
        } else {
          setSelectedDate(value);
          // handleDate(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)        
        setSelectedDate(taskObj.Date)        

    },[taskObj])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['Date'] = selectedDate
        updateTask(tempObj)
    }

    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
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

export default EditTask;