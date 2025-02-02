import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const TutoringPage: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Left side - Text content */}
                <div className="w-full lg:w-5/12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue2 mb-4 text-center lg:text-left">
                        Free online tutoring,
                        <br />
                        for students in need.
                    </h1>
                    <p className="text-blue3 mb-6 text-center lg:text-left text-xl">
                        MET Excellence offers a variety of free classes in subjects such as math, 
                        science, reading, writing, computer programming, and ACT prep.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-blue2 text-white px-6 py-2 rounded transition-colors w-full sm:w-auto">
                            Start Learning
                        </button>
                        <button className="bg-grey text-blue2 px-6 py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto">
                            Become a Tutor
                            <FaAngleRight className='ml-2'/> 
                        </button>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-full lg:w-7/12 mt-8 lg:mt-0">
                    <div className="w-full h-64 sm:h-96 bg-gray-200 rounded-lg shadow-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default TutoringPage;
