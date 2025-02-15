import React from 'react';
import { FaCheckCircle, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface TutorCardProps {
    name: string;
    topic: string;
    image: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ name, topic, image }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
        <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 relative">
            <Image src={image} alt={`${name}'s picture`} fill className="rounded-lg object-cover" loading="lazy" />
        </div>
        <div className="flex items-center">
            <span className="font-semibold">{name}</span>
            <FaCheckCircle className="text-blue2 ml-2" />
        </div>
        <p className="text-gray-600 text-sm">{topic}</p>
    </div>
);

const TutorSection: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 lg:max-w-6xl max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-blue2 mb-12 mt-8 text-center">
                Meet our volunteer tutors
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side - Stats and Text */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-row items-center justify-center lg:justify-start gap-12 sm:gap-24 mb-8">
                        <div>
                            <div className="text-3xl font-bold text-blue2">8+</div>
                            <div className="text-blue3">classes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue2">15+</div>
                            <div className="text-blue3">tutors</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue2">50+</div>
                            <div className="text-blue3">hours</div>
                        </div>
                    </div>
                    
                    <p className="text-blue3 mb-6 text-xl lg:text-left text-center">
                        MET Excellence is powered by a community of certified, trained tutors
                        who are truly passionate about giving.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                        <Link target="_blank" rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform'>
                            <button className="bg-blue-gradient text-white px-6 py-2 rounded transition-colors">
                                Become a Tutor
                            </button>
                        </Link>
                        <Link href="/team">
                            <button className="bg-grey text-blue2 px-6 py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center">
                                Meet the team
                                <FaAngleRight className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right side - Tutor Cards */}
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-2 xs:grid-cols-3 gap-4">
                        <TutorCard name="Shubham Panchal" topic="Engineering" image="/team/shubham_panchal.png" />
                        <div className="hidden xs:block">
                            <TutorCard name="Felix Cheng" topic="Geometry" image="/team/felix_cheng.png" />
                        </div>
                        <TutorCard name="Eric Yang" topic="UMTYMP" image="/team/eric_yang.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorSection;
