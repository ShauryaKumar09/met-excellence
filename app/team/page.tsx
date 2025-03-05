import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinUsBar from '@/components/JoinUsBar';
import FAQHeader from '@/components/Header';

interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
    email: string;
}

interface TeamSubcategory {
    subcategory: string;
    members: TeamMember[];
}

interface TeamCategory {
    category: string;
    subcategories: TeamSubcategory[];
}

const TeamMemberComponent: React.FC<TeamMember> = ({ name, role, imageUrl, email }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <Image src={imageUrl} alt={name} width={128} height={128} className="w-44 h-44 rounded-2xl mb-4 object-cover" />
        <h3 className="text-xl font-semibold text-blue2 mb-2 text-center">{name}</h3>
        <p className="text-blue3 font-medium mb-2 text-center">{role}</p>
        <div className="flex gap-4">
            <Link target="_blank" rel="noopener noreferrer" href={`mailto:${email}`} className="text-blue2 hover:text-blue1 transition-colors">
                <FaEnvelope size={24} />
            </Link>
        </div>
    </div>
);

const MeetTheTeamPage: React.FC = () => {
    const teamCategories: TeamCategory[] = [
        {
            category: "Tutors",
            subcategories: [
                {
                    subcategory: "STEM Tutors",
                    members: [
                        {
                            name: "Kevin Qiu",
                            role: "AMC 8, Physics Tutor",
                            imageUrl: "/team/kevin_qiu.png",
                            email: "kevinhqiu2007@gmail.com"
                        },
                        {
                            name: "Felix Cheng",
                            role: "Geometry Tutor",
                            imageUrl: "/team/felix_cheng.png",
                            email: "chengfeel0@gmail.com"
                        },
                        {
                            name: "Evan Huss",
                            role: "Biology Tutor",
                            imageUrl: "/team/evan_huss.png",
                            email: "evan.huss00@gmail.com"
                        },
                        {
                            name: "Anishk Nag",
                            role: "Chemistry Tutor",
                            imageUrl: "/team/anishk_nag.png",
                            email: "naganishk000@isd284.com"
                        },
                        {
                            name: "Shubham Panchal",
                            role: "Engineering Tutor",
                            imageUrl: "/team/shubham_panchal.png",
                            email: "panchshu000@isd284.com"
                        },
                        {
                            name: "Aaron Zou",
                            role: "CS, UMTYMP Tutor",
                            imageUrl: "/team/aaron_zou.png",
                            email: "mincathepig@gmail.com"
                        },
                        {
                            name: "Eric Yang",
                            role: "UMTYMP Prep Tutor",
                            imageUrl: "/team/eric_yang.png",
                            email: "yangeri001@isd284.com"
                        }
                    ]
                },
                {
                    subcategory: "Chess Tutors",
                    members: [
                        {
                            name: "Evan Xiong",
                            role: "Chess Tutor",
                            imageUrl: "/team/evan_xiong.png",
                            email: "evanxionga@gmail.com"
                        },
                        {
                            name: "Eric Yang",
                            role: "Chess Tutor",
                            imageUrl: "/team/eric_yang.png",
                            email: "yangeri001@isd284.com"
                        },
                        {
                            name: "Felix Cheng",
                            role: "Chess Tutor",
                            imageUrl: "/team/felix_cheng.png",
                            email: "chengfeel0@gmail.com"
                        },
                        {
                            name: "Aaron Zou",
                            role: "Chess Tutor",
                            imageUrl: "/team/aaron_zou.png",
                            email: "mincathepig@gmail.com"
                        }
                    ]
                },
                {
                    subcategory: "Other Subjects",
                    members: [
                        {
                            name: "Jason Lai",
                            role: "Chinese Culture Tutor",
                            imageUrl: "/team/jason_lai.png",
                            email: "laiyij000@isd284.com"
                        }
                    ]
                }
            ]
        },
        {
            category: "Officers",
            subcategories: [
                {
                    subcategory: "",
                    members: [
                        {
                            name: "Shubham Panchal",
                            role: "STEM Officer",
                            imageUrl: "/team/shubham_panchal.png",
                            email: "panchshu000@isd284.com"
                        },
                        {
                            name: "Harry Ding",
                            role: "Marketing Officer",
                            imageUrl: "/team/harry_ding.png",
                            email: "dinghar000@isd284.com"
                        },
                        {
                            name: "Jason Lai",
                            role: "Chinese Officer",
                            imageUrl: "/team/jason_lai.png",
                            email: "laiyij000@isd284.com"
                        },
                    ]
                }
            ]
        },
        {
            category: "Board of Directors",
            subcategories: [
                {
                    subcategory: "",
                    members: [
                        {
                            name: "Aaron Zou",
                            role: "President",
                            imageUrl: "/team/aaron_zou.png",
                            email: "mincathepig@gmail.com"
                        },
                        {
                            name: "Eric Yang",
                            role: "Vice President",
                            imageUrl: "/team/eric_yang.png",
                            email: "yangeri001@isd284.com",
                        },
                        {
                            name: "Anishk Nag",
                            role: "Director of Volunteers",
                            imageUrl: "/team/anishk_nag.png",
                            email: "naganishk000@isd284.com"
                        },
                        {
                            name: "Evan Xiong",
                            role: "Chair",
                            imageUrl: "/team/evan_xiong.png",
                            email: "evanxionga@gmail.com"
                        },
                        {
                            name: "Evan Huss",
                            role: "Director of Marketing",
                            imageUrl: "/team/evan_huss.png",
                            email: "evan.huss00@gmail.com"
                        },
                        {
                            name: "Felix Cheng",
                            role: "Director of Finance",
                            imageUrl: "/team/felix_cheng.png",
                            email: "chengfeel0@gmail.com"
                        },
                        {
                            name: "Kevin Qiu",
                            role: "Program Director",
                            imageUrl: "/team/kevin_qiu.png",
                            email: "kevinhqiu2007@gmail.com"
                        },
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
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
