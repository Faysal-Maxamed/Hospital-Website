import React from 'react'
import { FiClock, FiMap, FiPhoneCall, FiSearch } from 'react-icons/fi'
function Navbar() {
    return (
        <div >
            <div className='flex justify-between px-20 pt-4'>
                {/* name */}
                <h1 className='text-3xl font-bold text-blue-900'>MED<span className='text-blue-400'>DICAL</span></h1>
                {/* contact  */}
                <div className='flex gap-8'>
                    {/* one contact  */}
                    <div className='flex items-center gap-2 text-sm'>
                        <h1><FiPhoneCall size={20} color='blue'/></h1>
                        <div>
                            <h1 className='text-blue-900'>Emergency</h1>
                            <h1 className='text-xs text-blue-400 font-bold'>+252 614 388 477</h1>
                        </div>
                    </div>
                     {/* one contact  */}
                     <div className='flex items-center gap-2 text-sm'>
                        <h1><FiClock size={20} color='blue'/></h1>
                        <div>
                            <h1 className='text-blue-900'>Work Hour</h1>
                            <h1 className='text-xs text-blue-400 font-bold'>09:00 - 20:00 Everyday</h1>
                        </div>
                    </div>
                     {/* one contact  */}
                     <div className='flex items-center gap-2 text-sm'>
                        <h1><FiMap size={20} color='blue'/></h1>
                        <div>
                            <h1 className='text-blue-900'>Location</h1>
                            <h1 className='text-xs text-blue-400 font-bold'>Taleh hodan</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header section  */}

            <div className='w-full bg-blue-900 text-white flex justify-between items-center px-20 py-2 mt-2'>
                <ul className='flex gap-4 '>
                    <li><a className='hover:text-black' href="/">Home</a></li>
                    <li><a className='hover:text-black' href="/about">About us</a></li>
                    <li><a className='hover:text-black' href="/service">Services</a></li>
                    <li><a className='hover:text-black' href="/doctors">Doctors</a></li>
                    <li><a className='hover:text-black' href="/news">News</a></li>
                    <li><a className='hover:text-black' href="/contact">Contact</a></li>
                </ul>
                <div className='flex gap-4 items-center '>
                    <FiSearch size={20}/>
                    <button className='bg-blue-50 text-blue-800 rounded-full px-4 py-2'>Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar