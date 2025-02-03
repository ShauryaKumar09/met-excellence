"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import Banner from '@/components/Banner';
import Image from 'next/image';

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
                        <Link href="/" className="text-blue2 flex items-center">
                            <Image src="/logo.svg" alt="MET Excellence Logo" width={32} height={32} className="priority inline-block mr-2 text-blue2" />
                            <h1>MET Excellence</h1>
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-blue2 focus:outline-none">
                            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                    <ul className={`lg:flex items-center space-x-6 ${isOpen ? 'block absolute top-40 left-0 right-0 bg-grey pt-4 pl-10 pb-10 space-y-4' : 'hidden'} lg:relative lg:top-0 lg:space-y-0 font-semibold`}>
                        <li>
                            <Link href="/classes" className="text-blue2 hover:opacity-80 transition duration-300 ml-6">Classes</Link>
                        </li>
                        <li>
                            <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSclQL5aPyuBHfMAenxOEsSdZYKhEXH2P1iQiTTya_dSo3VrgA/viewform" className="text-blue2 hover:opacity-80 transition duration-300">Private Lessons</Link>
                        </li>
                        <li>
                            <Link href="/team" className="text-blue2 hover:opacity-80 transition duration-300">Team</Link>
                        </li>
                        <li>
                            <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform" className="text-blue2 hover:opacity-80 transition duration-300">Join Us</Link>
                        </li>
                        <li>
                            <Link href="/donate" className="bg-blue2 text-white px-4 py-2 rounded-lg hover:bg-blue1 transition duration-300">
                                Donate <FaHeart className="inline-block ml-2" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
