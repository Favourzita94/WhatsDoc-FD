import React, { useEffect, useState } from "react";
import Appointment from "../modals/Appointment";
import HealthRecord from "./HealthRecord";
import Sidebar from "./Sidebar";
import "../App.css";


const AppointmentList = ({ selectedDate }) => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  // const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    } 
  }, []);
  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };


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
            {taskList &&
              taskList.map((obj, index) => (
                <HealthRecord
                  taskObj={obj}
                  index={index}
                  key={index}
                  // isdone={isDone}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}
                />
              ))}
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
