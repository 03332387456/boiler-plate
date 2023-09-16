import React, { useState } from "react";

function Datepicker() {
  const [date, setDate] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  };

  return (
    <div>
      <h1>Date picker component : {date}</h1>
      <input
        className="p-3 m-3 fs-5 shadow rounded "
        type="date"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default Datepicker;