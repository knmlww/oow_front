import React, {useEffect, useState} from 'react';
import './calendar.css'; // CSS 파일을 별도로 생성하여 스타일을 적용할 수 있습니다.
import logo from './logo.png';
import Calendar from './Fragment/calender';

const CalendarPage = () => {
  return (
    <>
    <div className="container">
    <Calendar/>
    </div>
    </>
  );
};

export default CalendarPage;