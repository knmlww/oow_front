import React from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Search, AccountCircle } from '@material-ui/icons';
import '../style.css'
const BottomNav = () => {
    return (
      <BottomNavigation className="BottomNav">
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Search" icon={<Search />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
      );
}

export default BottomNav;