import React from 'react';
import { FaHandHoldingHeart, FaGraduationCap, FaUsers } from 'react-icons/fa';

const OurMissionPage: React.FC = () => {
    return (
        <div className='bg-grey'>
            <div className="p-4 sm:p-8 max-w-6xl mx-auto">
                {/* Mission Statement Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue2 mb-6 mt-8">Our Mission</h1>
                    <p className="text-blue3 text-xl max-w-3xl mx-auto">
                        To provide <strong>accessible</strong>, <strong>high-quality</strong> education to all students through 
                        free online tutoring and mentorship.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <FaHandHoldingHeart className="text-blue2 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue2 mb-3">Accessibility</h3>
                        <p className="text-blue3">
                            Breaking down barriers to education by providing free tutoring services to students in need.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <FaGraduationCap className="text-blue2 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue2 mb-3">Excellence</h3>
                        <p className="text-blue3">
                            Delivering high-quality education through dedicated tutors and comprehensive learning resources.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <FaUsers className="text-blue2 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue2 mb-3">Community</h3>
                        <p className="text-blue3">
                            Building a supportive learning environment where students and tutors thrive together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMissionPage;
