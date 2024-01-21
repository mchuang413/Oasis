"use client"
import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import PageTitle from "../components/PageTitle";

const Page = () => {
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2024-04-01' },
    { title: 'event 2', date: '2024-04-02' }
  ]);

  const [newEventDate, setNewEventDate] = useState("");
  const [newEventTitle, setNewEventTitle] = useState("");

  const setNewEvent = () => {
    if (newEventDate && newEventTitle) {
      const newEvent = {
        title: newEventTitle,
        date: newEventDate,
      };

      setEvents((prevEvents) => [...prevEvents, newEvent]);
      // Clear the form fields after adding the new event
      setNewEventDate("");
      setNewEventTitle("");
    }
  };

  return (
    <>
      <PageTitle title="Calendar" size="4"/>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-3/5 min-h-3/5 mx-auto">
        <div className="w-4/5 mx-auto">
          <h1>New Event: </h1>
          <div className="flex items-center space-x-2 mb-5">
            <input
              className="flex-1 input input-primary mr-2"
              type="date"
              value={newEventDate}
              onChange={(e) => setNewEventDate(e.target.value)}
            />
            <input
              className="flex-1 input input-primary mr-2"
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
            />
            <button className="btn btn-accent ml-3" onClick={setNewEvent}>
              Add Event
            </button>
          </div>
          
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
