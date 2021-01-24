import React, { useState } from "react";
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

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
    user: {
      _id: "123",
      name: "John",
    },
  },
];

export const CalendarScreen = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  // event to show modal
  const onDoubleClick = (e) => {
    console.log(e);
  };

  // select event
  const onSelectEvent = (e) => {
    console.log(e);
  };

  //
  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem("lastView", e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367cf7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
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
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
    </div>
  );
};
