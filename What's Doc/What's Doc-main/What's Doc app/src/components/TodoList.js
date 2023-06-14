import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import Sidebar from "./Sidebar";
// import MyCalendar from './MyCalendar';
import "../App.css";
// import hero6 from './images/hero6.jpg'
// import Test from './Test';
// import styles from '../components/Todolist.module.css';
// import CreateTask from '../modals/CreateTask';

const TodoList = ({ selectedDate }) => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [dateList, setDateList] = useState([]);
  // const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    // let arr1 = localStorage.getItem("dateList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    } 
    // else if (arr1) {
    //   let obj1 =JSON.stringify(arr1).slice(1,11)
    //   setDateList(arr1)
    // }
    // 
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
    // let tempDates = dateList;
    tempList.push(taskObj);
    // tempDates.push(savedDates);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    // localStorage.setItem("dateList", tempDates);
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
            <h3>Todo List</h3>
            <button
              className="btn btn-primary mt-2"
              onClick={() => setModal(true)}
            >
              Create Task
            </button>
          </div>
          <div className="task-container" id="tasks">
            {taskList &&
              taskList.map((obj, index) => (
                <Card
                  taskObj={obj}
                  index={index}
                  key={index}
                  // isdone={isDone}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}
                />
              ))}
          </div>

          <CreateTask
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

export default TodoList;
