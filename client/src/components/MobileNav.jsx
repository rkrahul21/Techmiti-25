
import React from 'react'
import { motion , AnimatePresence } from 'framer-motion'

import { navbarData } from '../constant/navbarData'

import { Link } from 'react-router-dom'


function MobileNav({ mobileMenu }) {
    return (
        <AnimatePresence>
            {
                mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='absolute top-0 left-0 w-full h-screen bg-black/60 z-10'>

                        <div className=' bg-amber-400 w-[70%]'>
                            <p className='text-2xl text-black items-end'>X</p>
                            
                            <p className='flex gap-4 text-primary text-xl py-4 m-2 rounded-md shadow-md flex-col items-center'>
                                {navbarData.map((item) => (
                                    <Link key={item.id} to={item.link} className='text-black  hover:text-blue-600 p-1'>
                                        {item.title}
                                    </Link>
                                ))}

                            </p>

                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default MobileNav