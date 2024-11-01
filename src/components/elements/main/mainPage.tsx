import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

import react, {useState} from "react";

import './style.css'

import Calendar from "../Calendar/Fragment/calender";
import CalendarPage from "../Calendar/calenderPage";
import BottomNav from "./Fragment/bottomNav";
import Login from "../../../Login";

import { Route, Routes, useNavigate } from 'react-router-dom';
const MainPage = () => {
    const nav = useNavigate();
    const [path, setPath] = useState("");

    const pathHandler= (param: string) => {
        setPath(param);
        nav(param);
    }


  return (
    <div className="main">
    <div className="container">
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Calendar />} />
    </Routes>
    <div className="bottom">
            <BottomNav pathHandler={pathHandler}/>
      </div>
    </div>
    </div>
  );
}

export default MainPage;