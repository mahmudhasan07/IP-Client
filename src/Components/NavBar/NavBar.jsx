import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const activeRoute = ({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "border-b-2 border-white" : ""


    return (
        <div className='border-b-2 border-gray-500 p-3 flex justify-around bg-blue-700 text-white'>
            <h1 className='text-3xl font-bold'>Rapid DNS Finder</h1>
            <ul className='flex gap-6 my-auto font-semibold text-white'>
                <NavLink className={activeRoute} to={'/'}><li>Home</li></NavLink>
                <NavLink className={activeRoute} to={'/addip'}><li>Add DNS IP</li></NavLink>
                <NavLink className={activeRoute} to={'/contact'}><li>Contact Us</li></NavLink>
            </ul>
        </div>
    );
};

export default NavBar;