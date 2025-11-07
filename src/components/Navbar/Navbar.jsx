import React from 'react';
import { NavLink } from 'react-router';
import profile from '../../assets/user.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className='flex items-center justify-between flex-row'>
            <div></div>
            <div className='flex items-center gap-8 list-none font-semibold text-accent ml-[170px]'>{links}</div>
            <div className='flex items-center gap-2'>
                <img src={profile} alt="" />
                <button className=' px-10 btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;