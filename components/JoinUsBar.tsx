import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const JoinUsBar: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-blue2 mb-4">Join Our Team</h2>
                <p className="text-blue3 mb-6">
                    Are you passionate about education and want to make a difference? We&apos;re always looking for dedicated tutors to join our team.
                </p>
                <Link href="/apply">
                    <button className="bg-blue2 text-white px-6 py-2 rounded transition-colors flex items-center">
                        Apply Now
                        <FaAngleRight className='ml-2'/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JoinUsBar;
