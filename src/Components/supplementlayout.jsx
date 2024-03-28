import React from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import SupplementDetailHeader from './supplementDetailHeader';

export default function SupplementLayout() {
  const location = useLocation();

  // Classes for normal and active states of tabs
  const tabBaseClasses = "text-gray-600 py-2 px-4 block hover:text-blue-500 focus:outline-none";
  const tabActiveClasses = "border-b-2 border-blue-500 text-blue-500";

  return (
    <section className='px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto my-8'>
      {/* Tabs Container */}
      <div className="mb-4 border-b border-gray-200">
        <nav className='flex flex-wrap -mb-px'>
          <NavLink
            to="."
            className={({ isActive }) =>
              `${tabBaseClasses} ${isActive ? tabActiveClasses : 'border-b-2 border-transparent'}`
            }
            end
          >
            Overview
          </NavLink>
          <NavLink
            to="uses"
            className={({ isActive }) =>
              `${tabBaseClasses} ${isActive ? tabActiveClasses : 'border-b-2 border-transparent'}`
            }
          >
            Uses
          </NavLink>
          <NavLink
            to="sideeffects"
            className={({ isActive }) =>
              `${tabBaseClasses} ${isActive ? tabActiveClasses : 'border-b-2 border-transparent'}`
            }
          >
            Side Effects
          </NavLink>
          {/* More NavLink components as needed for other tabs */}
        </nav>
      </div>
      <SupplementDetailHeader />
      {/* Content rendered by Outlet based on the route */}
      <Outlet />
      
      {/* Back to all supplements link */}
      <div className='mt-4'>
        <Link to="/" className='text-sm text-blue-500 hover:text-blue-600 transition duration-300'>
          ← Back to all supplements
        </Link>
      </div>
    </section>
  );
}
