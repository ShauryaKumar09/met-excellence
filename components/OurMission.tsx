"use client";
import { useInView } from 'react-intersection-observer';
import { FaHandHoldingHeart, FaHandHolding, FaLightbulb, FaRegLightbulb, FaUsers, FaUser } from 'react-icons/fa';

const OurMissionPage: React.FC = () => {
    const [ref1, inView1] = useInView({ threshold: 0.7 });
    const [ref2, inView2] = useInView({ threshold: 0.7 });
    const [ref3, inView3] = useInView({ threshold: 0.7 });

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
                    <div ref={ref1} className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-16">
                            <FaHandHolding className="text-blue2 text-4xl mx-auto mb-4 absolute top-0 left-0 right-0" />
                            <FaHandHoldingHeart 
                                className="text-blue2 text-4xl mx-auto mb-4 absolute top-0 left-0 right-0 transition-opacity duration-500" 
                                style={{ opacity: inView1 ? 1 : 0 }}
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-blue2 mb-3 -mt-3">Motivate</h3>
                        <p className="text-blue3">
                            Inspire kids to dream big and believe in their potential by breaking down barriers to education.
                        </p>
                    </div>

                    <div ref={ref2} className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-16">
                            <FaLightbulb
                                className="text-blue2 text-4xl mx-auto mb-4 absolute top-0 left-0 right-0 transition-opacity duration-500"
                                style={{ opacity: inView2 ? 0 : 1 }}  
                            />
                            <FaRegLightbulb 
                                className="text-blue2 text-4xl mx-auto mb-4 absolute top-0 left-0 right-0 transition-opacity duration-500" 
                                style={{ opacity: inView2 ? 1 : 0 }}
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-blue2 mb-3 -mt-3">Enrich</h3>
                        <p className="text-blue3">
                            Provide access to extracurricular programs that nurture their passions and talents.
                        </p>
                    </div>

                    <div ref={ref3} className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-16">
                            <FaUser className="text-blue2 text-4xl mx-auto mb-4 absolute top-1.5 left-0 right-0 h-6" />
                            <FaUsers 
                                className="text-blue2 text-4xl mx-auto mb-4 absolute top-0 left-0 right-0 transition-opacity duration-500" 
                                style={{ opacity: inView3 ? 1 : 0 }}
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-blue2 mb-3 -mt-3">Transform</h3>
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
