import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateComponent = ({ getValue }: any) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    getValue(date);
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
};
