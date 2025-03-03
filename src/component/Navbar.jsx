import React from 'react'
import { CiMenuBurger, CiUser } from "react-icons/ci";
import logo from '../assets/logo.png'

const NavMenu = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Contact', link: '/contact' },

]

const Navbar = () => {
    return (
        <div className='h-20 w-full items-center justify-evenly flex pt-20'>
            <img src={logo} alt="" className='max-w-[150px] space-x-10' />
            <ul className='flex-row flex hidden md:flex'>  {NavMenu.map((item) => (
                <li className='list-none mr-5 font-merienda text-2xl text-white font-bold'>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
                <button className='text-white text-3xl pl-5'>
                    <CiUser />
                </button>
            </ul>
            <div className='md:hidden'>
                <CiMenuBurger className='text-3xl' />
            </div>

        </div>
    )
}

export default Navbar
