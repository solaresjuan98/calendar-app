import React from "react";
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);
const events = [
  {
    title: "My birthday",
    start: moment().toDate(), // is valid new Date() too
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    notes: "Buy a cake :v",
  },
];

export const CalendarScreen = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367cf7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: 'white'
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};
