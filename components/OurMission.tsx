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
                       Empowering students through <strong>free online tutoring</strong> and mentorship, <strong>unlocking</strong> their potential to make a meaningful <strong>impact</strong> on the world.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8 my-8">
                    <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <FaHandHoldingHeart className="text-blue2 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue2 mb-3">Motivate</h3>
                        <p className="text-blue3">
                            Inspire kids to dream big and believe in their potential by breaking down barriers to education.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <FaGraduationCap className="text-blue2 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue2 mb-3">Enrich</h3>
                        <p className="text-blue3">
                            Provide access to extracurricular programs that nurture their passions and talents.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <FaUsers className="text-blue2 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue2 mb-3">Transform</h3>
                        <p className="text-blue3">
                        Empower kids to become confident, capable changemakers who positively transform the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMissionPage;
