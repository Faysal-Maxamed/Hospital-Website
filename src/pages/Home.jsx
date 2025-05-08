import React from 'react'
import Navbar from '../components/Navbar'
import { FiCalendar, FiLifeBuoy, FiMeh, FiUsers } from 'react-icons/fi'

function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <div className="relative w-full h-[468px] bg-[url('/images/bg.png')] bg-cover bg-center">
                    <img
                        src="/images/bg1.png"
                        alt="Overlay"
                        className="absolute h-[468px] top-0 left-0 w-full "
                    />
                    <div className='absolute top-0 left-0 w-1/2 pl-28 flex flex-col h-full justify-center'>
                        <h1 className='text-blue-500 font-bold'>Caring for Life</h1>
                        <h1 className='text-4xl text-blue-900 font-bold italic mt-2 '>Leading the Way in Medical Excellence</h1>
                        <button className='bg-blue-50 text-blue-800 rounded-full px-4 py-2 w-34 mt-8'>Our Service</button>
                    </div>
                </div>
                {/* second section  */}
                <div className='flex items-center flex-col'>
                    <div className='px-20 flex gap-4 items-center -mt-8 relative z-10'>
                        {/* one card  */}
                        <div className='bg-blue-900 text-white flex gap-4 h-20 items-center justify-center w-72'>
                            <h1>Book an Appointment</h1>
                            <FiCalendar size={32} />
                        </div>
                        {/* one card  */}
                        <div className='bg-blue-200 text-white flex gap-4 h-20 items-center justify-center w-72'>
                            <h1>Book an Appointment</h1>
                            <FiUsers size={32} />
                        </div>
                        {/* one card  */}
                        <div className='bg-blue-500 text-white flex gap-4 h-20 items-center justify-center w-72'>
                            <h1>Book an Appointment</h1>
                            <FiCalendar size={32} />
                        </div>
                    </div>
                    {/* sub section second  */}
                    <div className='flex flex-col justify-center items-center px-20 pb-8'>
                        <div className='px-20 flex flex-col justify-center items-center py-8'>
                            <h1 className='text-blue-700'>Welcome to Meddical</h1>
                            <h1 className='text-blue-900 text-xl font-bold'>A Great Place to Receive Care</h1>
                            <p className='text-center text-gray-500 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et</p>
                            <button className='text-blue-400 text-xl'>Learn More</button>
                        </div>
                        <img src="images/ds1.png" className='h-32 w-full' alt="" />
                    </div>
                </div>
                {/* third section  */}

                <div className='flex flex-col items-center px-20'>
                    <h1 className='text-xl text-blue-600'>Care you can believe in</h1>
                    <h1 className='text-2xl font-bold text-blue-900'>Our Services</h1>
                    <div className='flex w-full h-[450px] justify-between gap-20 mt-8'>
                        <div className=''>
                            <div className='h-20 w-32 rounded-md border border-2 border-gray-300  flex flex-col justify-center items-center'>
                                <FiMeh />
                                <h1>Free Checkup</h1>
                            </div>
                            <div className='h-20 w-32 rounded-md border border-2 border-gray-300 bg-blue-900 text-white  flex flex-col justify-center items-center'>
                                <FiMeh />
                                <h1>Cardiogram</h1>
                            </div>
                            <div className='h-20 w-32 rounded-md border border-2 border-gray-300  flex flex-col justify-center items-center'>
                                <FiMeh />
                                <h1>Dna Testing</h1>
                            </div>
                            <div className='h-20 w-32 rounded-md border border-2 border-gray-300 bg-blue-900 text-white  flex flex-col justify-center items-center'>
                                <FiLifeBuoy />
                                <h1>Blood Bank</h1>
                            </div>
                            <div className='h-8 w-32 rounded-md border border-2 border-gray-300 bg-blue-900 text-white  flex flex-col justify-center items-center'>
                                <h1>View all</h1>
                            </div>
                        </div>

                        <div>
                            <h1 className='mb-8'>A passion for putting patients first.</h1>
                            <div className='flex gap-4'>
                                <div>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-blue-600'></div>
                                        <h1>A Passion for Healing</h1>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-blue-600'></div>
                                        <h1>All our best</h1>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-blue-600'></div>
                                        <h1>A Legacy of Excellence</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-blue-600'></div>
                                        <h1>5-Star Care</h1>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-blue-600'></div>
                                        <h1>Believe in Us</h1>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-blue-600'></div>
                                        <h1>Always Caring</h1>
                                    </div>
                                </div>
                            </div>
                            <p className='mb-4 mt-8 italic text-gray-400 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                            <p className='italic text-gray-400 text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                        </div>
                        <div className='flex flex-col gap-8 '>
                            <img src="images/ds3.png" width={600} height={600} className='' alt="" />
                            <img src="images/ds2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div class="bg-white py-4 px-6">
                    <div class="text-center mb-10">
                        <p class="text-blue-600 text-sm font-semibold uppercase">Always Caring</p>
                        <h2 class="text-3xl font-bold text-gray-800">Our Specialties</h2>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Neurology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 bg-blue-900 text-white rounded-lg shadow">
                            <div class="text-3xl mb-2">💙</div>
                            <p class="font-medium">Bones</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Oncology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Otorhinolaryngology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Ophthalmology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Cardiovascular</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Pulmonology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Renal Medicine</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Gastroenterology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Urology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Dermatology</p>
                        </div>

                        <div class="flex flex-col items-center justify-center text-center p-6 border rounded-lg hover:shadow transition">
                            <div class="text-blue-500 text-3xl mb-2">💙</div>
                            <p class="text-gray-700 font-medium">Gynaecology</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between px-20 items-center relative w-full h-[468px] bg-[url('/images/Rectangle33.png')] bg-cover bg-center">
                    <div className="w-1/2 space-y-6">
                        <h1 className="text-blue-600 font-bold text-3xl">Book an Appointment</h1>
                        <p className="text-gray-900 italic text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
                            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 bg-blue-900/90 text-white w-1/2 p-6 rounded-md shadow-lg">
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-4 w-1/2">
                                <input className="p-2 rounded bg-blue-800 placeholder-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Name" type="text" />
                                <input className="p-2 rounded bg-blue-800 placeholder-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email" type="email" />
                                <select className="p-2 rounded bg-blue-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option>Date</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                </select>
                                <select className="p-2 rounded bg-blue-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option>Doctors</option>
                                    <option>Dr. Ahmed</option>
                                    <option>Dr. Pheyzal</option>
                                    <option>Drs. Muno</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-4 w-1/2">
                                <select className="p-2 rounded bg-blue-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option>Department</option>
                                    <option>Campus 1</option>
                                    <option>Campus 2</option>
                                    <option>Campus 3</option>
                                </select>
                                <select className="p-2 rounded bg-blue-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option>Gender</option>
                                    <option>Female</option>
                                    <option>Male</option>
                                </select>
                                <select className="p-2 rounded bg-blue-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option>Time</option>
                                    <option>12 hours</option>
                                    <option>24 hours</option>
                                </select>
                            </div>
                        </div>

                        <textarea
                            placeholder="Write anything..."
                            className="w-full p-3 rounded bg-blue-800 placeholder-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-24"
                        ></textarea>

                        <button className="bg-green-500 hover:bg-green-600 transition-colors font-semibold rounded py-2 px-4 w-fit self-end">
                            Submit
                        </button>
                    </div>
                </div>
               
                <div class="bg-white py-16 px-6">
                    <div class="text-center mb-10">
                        <p class="text-blue-600 text-sm font-semibold uppercase">Get in Touch</p>
                        <h2 class="text-3xl font-bold text-gray-800">Contact</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
                    
                        <div class="bg-blue-100 p-6 rounded-lg shadow">
                            <div class="text-2xl mb-2">📞</div>
                            <h4 class="font-bold mb-2">Emergency</h4>
                            <p>(237) 681-812-255</p>
                            <p>(237) 666-331-894</p>
                        </div>

                       
                        <div class="bg-blue-900 text-white p-6 rounded-lg shadow">
                            <div class="text-2xl mb-2">📍</div>
                            <h4 class="font-bold mb-2">Location</h4>
                            <p>0123 Some place</p>
                            <p>9876 Some country</p>
                        </div>

                        <div class="bg-blue-200 p-6 rounded-lg shadow">
                            <div class="text-2xl mb-2">✉️</div>
                            <h4 class="font-bold mb-2">Email</h4>
                            <p>fildineoseo@gmail.com</p>
                            <p>mybestudios@gmail.com</p>
                        </div>

                        <div class="bg-blue-200 p-6 rounded-lg shadow">
                            <div class="text-2xl mb-2">⏰</div>
                            <h4 class="font-bold mb-2">Working Hours</h4>
                            <p>Mon–Sat: 09:00–20:00</p>
                            <p>Sunday: Emergency only</p>
                        </div>
                    </div>
                </div>


                <footer class="bg-blue-900 text-white py-12 px-6">
                    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                     
                        <div>
                            <h3 class="text-2xl font-bold mb-2">MEDDICAL</h3>
                            <p>Leading the Way in Medical<br />Excellence, Trusted Care.</p>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-2">Important Links</h4>
                            <ul class="space-y-1">
                                <li><a href="#" class="hover:underline">Appointment</a></li>
                                <li><a href="#" class="hover:underline">Doctors</a></li>
                                <li><a href="#" class="hover:underline">Services</a></li>
                                <li><a href="#" class="hover:underline">About Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="font-semibold mb-2">Contact Us</h4>
                            <p>Call: (237) 681-812-255</p>
                            <p>Email: fildineoseo@gmail.com</p>
                            <p>Address: 0123 Some place<br />Some country</p>
                        </div>

                        <div>
                            <h4 class="font-semibold mb-2">Newsletter</h4>
                            <form class="flex items-center bg-white rounded overflow-hidden">
                                <input type="email" placeholder="Enter your email" class="px-3 py-2 text-gray-800 w-full focus:outline-none" />
                                <button class="bg-blue-600 text-white px-3 py-2 hover:bg-blue-700">📨</button>
                            </form>
                        </div>
                    </div>

                    <hr class="my-6 border-blue-700" />

                    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
                        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC–LTD</p>
                        <div class="flex space-x-4 mt-2 md:mt-0">
                            <a href="#">🔗</a>
                            <a href="#">📘</a>
                            <a href="#">📷</a>
                        </div>
                    </div>
                </footer>


            </div>
        </div>
    )
}

export default Home