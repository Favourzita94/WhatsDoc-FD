import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Test() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Select a date:</h1>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      <h1>Calendar:</h1>
      <Calendar value={selectedDate} />
    </div>
  );
}

export default Test;
