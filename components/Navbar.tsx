"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Banner from '@/components/Banner';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='sticky top-0 z-50'>
            <Banner />
            <nav className="bg-grey p-4 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <Link href="/" className="text-blue2">MET Excellence</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-blue2 focus:outline-none">
                            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                    <ul className={`md:flex items-center space-x-6 ${isOpen ? 'block absolute top-16 left-0 right-0 bg-white p-4 space-y-4' : 'hidden'} md:relative md:top-0 md:space-y-0 font-semibold`}>
                        <li>
                            <Link href="/learn" className="text-blue2 hover:opacity-80 transition duration-300 ml-6">Learn</Link>
                        </li>
                        <li>
                            <Link href="/how-it-works" className="text-blue2 hover:opacity-80 transition duration-300">How it Works</Link>
                        </li>
                        <li>
                            <Link href="/community" className="text-blue2 hover:opacity-80 transition duration-300">Community</Link>
                        </li>
                        <li>
                            <Link href="/login" className="text-blue2 hover:opacity-80 transition duration-300">Log In</Link>
                        </li>
                        <li>
                            <Link href="/signup" className="bg-blue2 text-white px-6 py-2 rounded-md hover:bg-[#0084d3] transition duration-300">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
