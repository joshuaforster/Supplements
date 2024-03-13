import React from 'react';


import {  NavLink, Outlet, Link, useLocation } from 'react-router-dom';

export default function SupplementLayout() {
  const location = useLocation()

    return(
        <div>
            <NavLink to=".">Overview</NavLink>
            <NavLink to="uses">Uses</NavLink>
            <NavLink to="sideeffects">Side Effects</NavLink>
            <Link to="/supplements">Back to all supplements</Link>
            <br></br>
            <br></br>
            <Outlet />
      </div>
    )
  }