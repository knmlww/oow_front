import React from 'react';
import FullCalendar  from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
    return (
        <div className="App">
          <FullCalendar 
            initialView="dayGridMonth" 
            plugins={[ dayGridPlugin ]}
            contentHeight="auto"
          />
        </div>
      );
}

export default Calendar;