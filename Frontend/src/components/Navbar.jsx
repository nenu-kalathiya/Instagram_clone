import React from 'react'
import logo from "../assets/img/logo_2.png";
import { Link } from 'react-router-dom';

export default function
    () {
    return (
        <div className='flex justify-around shadow-md'>
            <img src={logo} alt="logo" className='w-36 object-contain' />
            <ul className='flex items-center gap-8 text-lg'>
                <Link to='/signup'>
                    <li>SignUp</li>
                </Link>
                <Link to='/signin'>
                    <li>SignIn</li>
                </Link>
                <Link to='/profile'>
                    <li>Profile</li>
                </Link>
            </ul>
        </div>
    )
}
