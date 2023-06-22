import React, { useEffect, useState } from "react";
import Appointment from "../modals/Appointment";
import Sidebar from "./Sidebar";
import "../App.css";
import axios from "axios";


const AppointmentList = ({ selectedDate }) => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  // const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const auth_token = localStorage.getItem('auth_token');

    axios
    .get('http://localhost:8000/users/appointments/', {
      headers: {
        Authorization: `Token ${auth_token}`,
      },
    })
    .then((res) => {
      const tasks = res.data;
      setTaskList(tasks)
    })
    .catch((err) => console.log(JSON.stringify(err)))
    // let arr = localStorage.getItem("taskList");

    // if (arr) {
    //   let obj = JSON.parse(arr);
    //   setTaskList(obj);
    // } 
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj, savedDates) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    // setDateList(dateList);
    setModal(false);
  };

  return (
    <>
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainbar">
          <div className="header text-center">
            <h3>Appointment List</h3>
            <button
              className="btn btn-primary mt-2"
              onClick={() => setModal(true)}
            >
              Schedule your Appointment
            </button>
          </div>
          <div className="task-container" id="tasks">
            <ul>
              {taskList &&
                taskList.map((item, index) => (
                  <li
                    // taskObj={obj}
                    // index={index}
                    key={index}
                    // isdone={isDone}
                    // deleteTask={deleteTask}
                    // updateListArray={updateListArray}
                  >
                    <h3>{ item.name } | { item.meeting_link }</h3>
                  </li>
                  
                ))}
              </ul>
          </div>

          <Appointment
            toggle={toggle}
            modal={modal}
            save={saveTask}
            selectedDate={selectedDate}
            // userData={userData}
          />
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
