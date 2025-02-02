import React from 'react';
import { FaCheckCircle, FaAngleRight } from 'react-icons/fa';

interface TutorCardProps {
    name: string;
    country: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ name, country }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
        <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
        <div className="flex items-center">
            <span className="font-semibold">{name}</span>
            <FaCheckCircle className="text-blue-500 ml-2" />
        </div>
        <p className="text-gray-600 text-sm">Tutor from {country}</p>
    </div>
);

const TutorSection: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 max-w-6xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-blue2 mb-12 mt-8 text-center">
                Meet our volunteer tutors
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side - Stats and Text */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-row items-center justify-start gap-24 mb-8">
                        <div>
                            <div className="text-3xl font-bold text-blue2">200+</div>
                            <div className="text-blue3">online classes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue2">20+</div>
                            <div className="text-blue3">tutors</div>
                        </div>
                    </div>
                    
                    <p className="text-blue3 mb-6 text-xl">
                        MET Excellence is powered by a community of certified, trained tutors
                        who are truly passionate about giving.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue2 text-white px-6 py-2 rounded transition-colors">
                            Become a Tutor
                        </button>
                        <button className="bg-grey text-blue2 px-6 py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center">
                            Meet the team
                            <FaAngleRight className="ml-2" />
                        </button>
                    </div>
                </div>

                {/* Right side - Tutor Cards */}
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1, 2].map((index) => (
                            <TutorCard key={index} name="Karen" country="USA" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorSection;
