import React from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Search, AccountCircle } from '@material-ui/icons';
import '../style.css'
const BottomNav : React.FC<propHandler>= ({pathHandler}) => {

    const handleChange = (param:string) => {
        pathHandler(param)
    }
    return (
      <BottomNavigation className="BottomNav">
          <BottomNavigationAction onClick={() => { pathHandler("") }} label="Home" icon={<Home />} />
          <BottomNavigationAction onClick={() => { pathHandler("about") }} label="Search" icon={<Search />} />
          <BottomNavigationAction onClick={() => { pathHandler("pwd3") }} label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
      );
}

export interface propHandler {
    pathHandler : (_text:string) => void;
}
export default BottomNav;