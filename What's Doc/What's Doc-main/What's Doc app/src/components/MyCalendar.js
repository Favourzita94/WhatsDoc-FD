import React, {useState} from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = ({selectedDate}) => {

console.log(selectedDate)

  return (
    <div>
      <h1>My Calendar</h1>
      <br />
      <Calendar 
      value={(selectedDate)} 

      />
    </div>
    
  );
}

export default MyCalendar;