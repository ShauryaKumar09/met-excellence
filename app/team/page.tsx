import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinUsBar from '@/components/JoinUsBar';
import FAQHeader from '@/components/props/Header';

interface TeamMember {
    name: string;
    role?: string;
    tutorOf?: string;
    imageUrl?: string;
    email?: string;
}

interface TeamSubcategory {
    subcategory: string;
    members: TeamMember[];
}

interface TeamCategory {
    category: string;
    subcategories: TeamSubcategory[];
}

const TeamMemberComponent: React.FC<TeamMember> = ({ name, role, tutorOf, imageUrl, email }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        {imageUrl ? (
            <Image src={imageUrl} alt={name} width={128} height={128} className="w-44 md:h-44 h-32 rounded-2xl mb-4 object-cover" />
        ) : (
            <div className="w-44 md:h-44 h-32 rounded-2xl mb-4 bg-gray-200" />
        )}
        <h3 className="text-xl font-semibold text-blue2 mb-2 text-center">{name}</h3>
        {role && <p className="text-blue3 font-medium mb-2 text-center">{role}</p>}
        {tutorOf && <p className="text-blue3 font-medium mb-2 text-center">{tutorOf}</p>}
        {email && (
            <div className="flex gap-4">
                <Link target="_blank" rel="noopener noreferrer" href={`mailto:${email}`} className="text-blue2 hover:text-blue1 transition-colors">
                    <FaEnvelope size={24} />
                </Link>
            </div>
        )}
    </div>
);

const MeetTheTeamPage: React.FC = () => {
    const teamCategories: TeamCategory[] = [
        {
            category: "Our Team",
            subcategories: [
                {
                    subcategory: "",
                    members: [
                        {
                            name: "Gautam Goyal",
                            role: "Co-President of MET",
                            tutorOf: "Physics Tutor",
                            imageUrl: "/team/gautam_goyal.png"
                        },
                        {
                            name: "Ethan Zou",
                            role: "Co-President of MET",
                            tutorOf: "UMTYMP Prep Tutor",
                            imageUrl: "/team/ethan_zou.png"
                        },
                        {
                            name: "Lucas Ma",
                            role: "MN Chapter Chair",
                            tutorOf: "Physics Tutor",
                            imageUrl: "/team/lucas_ma.jpg"
                        },
                        {
                            name: "Aatman Bhatt",
                            role: "Director of Logistics",
                            tutorOf: "UMTYMP Prep Tutor; Python Programming Tutor"
                        },
                        {
                            name: "Gavin Peng",
                            role: "Director of Volunteers",
                            tutorOf: "Python Programming Tutor",
                            imageUrl: "/team/gavin_peng.jpg"
                        },
                        {
                            name: "Jishnu Satapathy",
                            role: "Director of Outreach",
                            tutorOf: "Python Programming Tutor",
                            imageUrl: "/team/jishnu_satapathy.jpg"
                        },
                        {
                            name: "Arnav Hasti",
                            role: "Director of Content",
                            tutorOf: "UMTYMP Prep Tutor"
                        },
                        {
                            name: "Jatin Takkoli",
                            role: "Director of STEM/Marketing"
                        },
                        {
                            name: "Tony Cheng",
                            role: "Director of Chess"
                        },
                        {
                            name: "Vishnu Chandrashekar",
                            role: "Director of Finance",
                            tutorOf: "UMTYMP Prep Tutor",
                            imageUrl: "/team/vishnu_chandrashekar.jpg"
                        },
                        {
                            name: "Aarav Sandip",
                            role: "Director of Technology",
                            tutorOf: "UMTYMP Prep Tutor"
                        },
                        {
                            name: "Nitin Prabu",
                            tutorOf: "CompTIA Cybersecurity Tutor"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <div className='bg-grey'>
            <Head>
                <title>Meet Our Team | METExcellence</title>
                <meta name="description" content="Meet the dedicated team of passionate educators at METExcellence. Learn more about our tutors, officers, and board of directors." />
                <meta property="og:title" content="Meet Our Team | METExcellence" />
                <meta property="og:description" content="Meet the dedicated team of passionate educators at METExcellence. Learn more about our tutors, officers, and board of directors." />
            </Head>
            <Navbar />
            <FAQHeader title='Meet Our Team' description='Our dedicated team of passionate educators is committed to breaking down educational barriers, empowering students with knowledge, and transforming lives through high-quality, completely free tutoring for those who need it most.'/>
            <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
                {teamCategories.map((category, index) => (
                    <div key={index} className="mb-16">
                        <h1 className="text-3xl font-bold text-blue2 mb-8">{category.category}</h1>
                        {category.subcategories.map((subcategory, subIndex) => (
                            <div key={subIndex} className="mb-8">
                                <h2 className="text-2xl font-semibold text-blue2 mb-4">{subcategory.subcategory}</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {subcategory.members.map((member, memberIndex) => (
                                        <TeamMemberComponent key={memberIndex} {...member} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="mt-16 text-center">
                    <JoinUsBar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MeetTheTeamPage;
