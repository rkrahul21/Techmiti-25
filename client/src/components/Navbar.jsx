
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { navbarData } from '../constant/navbarData'
import { FaUserCircle } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import MobileNav from './MobileNav';

function Navbar() {

    const [mobileMenu, setMobileMenu] = useState(false) ;

  return (
    <>
    <nav className='w-full flex items-center justify-between bg-amber-400 shadow-md gap-4 px-4 z-10'>
        <div className=' bg-amber-400 py-2'>
            <Link to ="/" className='  flex items-center justify-center'>
            <div className='w-[30px] h-[35px] ml-4 pb-2 text-black font-bold text-2xl'> 
            <img src="/images/mit-logo.png" alt="logo" />

            </div>
            </Link> 
        </div>

        {/* navbar menu */}
        <div className=' hidden md:block'>
            <p className='flex items-center gap-4 text-primary'>
        {navbarData.map((item) => (
            <Link key={item.id} to={item.link} className='text-black  hover:text-blue-600 p-1'>
                {item.title}
            </Link>
        ))}

            </p>

        </div>
       {/* profile icon */}
        <div className='items-center justify-center mr-4 hidden md:block'>
            <FaUserCircle className='text-black text-2xl cursor-pointer' />
        </div>


        {/*  mobile hamberburg */}
        <div className='md:hidden' onClick={() => setMobileMenu(!mobileMenu)}>
        <TfiMenuAlt className='text-2xl'/>
        </div>
    </nav>

    {/* mobile menu */}

    {/* <MobileNav mobileMenu={mobileMenu}  /> */}
        {
            mobileMenu && (
           
                <div className='absolute top-0 left-0 w-full h-full  bg-black z-50'>
                    <div className='relative bg-amber-400 w-[70%] h-full flex flex-col'>
                        <button className='text-2xl text-black items-end absolute right-0  p-4' onClick={() => setMobileMenu(!mobileMenu)}>X</button>
                         
                        <p className='flex gap-4 text-primary text-xl py-4 m-2 flex-col items-center'>
                            {navbarData.map((item) => (
                                <Link key={item.id} to={item.link} className='text-black  hover:text-blue-600 p-1'>
                                    {item.title}
                                </Link>
                            ))}

                        </p>

                    </div>
                </div>

            )
        }

    </>
  )
}

export default Navbar