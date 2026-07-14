"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import { FaAngleRight } from 'react-icons/fa';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQHeader from '@/components/props/Header';
import JoinUsBar from '@/components/JoinUsBar';

interface ClassItem {
  name: string;
  image: string;
  isInPerson: boolean;
  description: string;
  instructors: string;
  time?: string;
  grades?: number[];
  signUpLink?: string;
  tags?: string[];
  moreInfoLink?: string;
}

const classes: ClassItem[] = [
  {
    name: 'Intro to Physics',
    image: '/banners/physics.png',
    isInPerson: false,
    description: 'A beginner-friendly introduction to mechanical physics. We cover kinematics, forces, gravity, and Newton\'s laws, with worked problems and demos each session so the concepts stick.',
    instructors: 'Gautam Goyal and Lucas Ma',
    signUpLink: 'https://forms.gle/b8vdntRY2sj5H2c16',
    time: 'Sundays and Wednesdays, 2:00 - 3:30 PM',
    grades: [4, 8],
  },
  {
    name: 'Chess',
    image: '/banners/chess.png',
    isInPerson: true,
    description: '[LOCATIONS VARY FOR CHESS. Check emails and WeChat for the correct location.] Group instruction from beginner to advanced, plus tournaments run on an ELO system. All ages welcome!',
    instructors: 'Tony Cheng and Shrey Uppal',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc20g6uWMShqX4Z9ugTQEgV5KyPkuMKeymbp6PuKJJudWqFlQ/viewform',
    time: 'TBD',
    grades: [1, 8],
    moreInfoLink: '/classes/chess',
  },
  {
    name: 'Intro to Python',
    image: '/banners/python.png',
    isInPerson: false,
    description: 'A beginner-level class on Python. No prior programming experience required. Learn Python syntax and core computer science ideas, then build a mini-project at the end of the course.',
    instructors: 'Aatman Bhatt and Gavin Peng',
    signUpLink: 'https://forms.gle/EtkQo694bP9nYjau9',
    time: 'TBD',
    grades: [4, 8],
  },
  {
    name: 'UMTYMP Exam Prep',
    image: '/banners/umtymp.png',
    isInPerson: false,
    description: 'The UMTYMP entrance exam is tough. This class prepares you for it with test-taking strategy, time-saving tricks, and practice on the kinds of problems the exam actually asks.',
    instructors: 'Ethan Zou, Aarav Sandip, Aatman Bhatt, and Vishnu Chandrashekar',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeQL_WdKKptLkvBQx1XJLr4n2qE3Bp5sMx7B3EljMuHHQS_7w/viewform',
    time: 'TBD',
    grades: [4, 7],
    moreInfoLink: 'https://r.umn.edu/academics/UMTYMP'
  },
  {
    name: 'Cybersecurity',
    image: '/banners/cybersecurity.png',
    isInPerson: false,
    description: 'An introduction to cybersecurity fundamentals. Course details are still being finalized: TBD.',
    instructors: 'TBD',
    time: 'TBD',
  },
];

const ClassCard: React.FC<{ classItem: ClassItem }> = ({ classItem }) => {
  const id = classItem.name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div id={id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={classItem.image}
          alt={classItem.name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-2xl font-bold text-blue2 mb-3">{classItem.name}</h2>
        <p className="text-gray-700 mb-3">
          <span className="font-semibold">Tutors:</span> {classItem.instructors}
        </p>
        <p className="text-blue3 mb-4">{classItem.description}</p>
        {classItem.time && <p className="text-gray-600 mb-4">{classItem.time}</p>}
        {classItem.grades && classItem.grades.length > 0 && (
          <span className="bg-blue-100 text-blue2 px-4 py-1.5 rounded-full text-sm self-start mb-6">
            {classItem.grades.length === 1
              ? `Grade ${classItem.grades[0]}`
              : `Grades ${classItem.grades[0]}–${classItem.grades[classItem.grades.length - 1]}`}
          </span>
        )}
        <div className="mt-auto flex flex-wrap gap-3">
          {classItem.signUpLink ? (
            <Link href={classItem.signUpLink} target="_blank" rel="noopener noreferrer">
              <button
                className="px-4 py-2 rounded bg-blue2 text-white hover:bg-blue1 transition-colors"
              >
                Sign Up
              </button>
            </Link>
          ) : (
            <button
              disabled
              aria-disabled="true"
              className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
            >
              Sign-Up Coming Soon
            </button>
          )}
          {classItem.moreInfoLink ? (
            <Link href={classItem.moreInfoLink}>
              <button className="bg-grey text-blue2 px-4 py-2 rounded hover:bg-gray-300 transition-colors flex items-center">
                More Info
                <FaAngleRight className='ml-2'/>
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const AllClassesPage: React.FC = () => {
  const router = useRouter(); // Use useRouter
  const [classParam, setClassParam] = React.useState<string | null>(null);


  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure we're in the browser
      const params = new URLSearchParams(window.location.search);
      const classValue = params.get('class');
      setClassParam(classValue);
    }
  }, [router]);

  useEffect(() => {
    if (classParam) {
      const element = document.getElementById(classParam);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
        
        // Set the highlight effect after a delay
        setTimeout(() => {
          element.classList.add('highlighted');
          
          // Remove the highlight after another delay
          setTimeout(() => {
            element.classList.remove('highlighted');
          }, 2000); // Adjust this delay as needed
        }, 500); // Adjust this delay as needed
      }
    }
  }, [classParam]);
  
  

  return (
    <div className='bg-grey'>
      <Head>
        <title>All Classes | METExcellence</title>
        <meta name="description" content="Explore all the free classes offered by METExcellence. Sign up for Intro to Physics, Chess, Intro to Python, UMTYMP Exam Prep, and more." />
        <meta property="og:title" content="All Classes | METExcellence" />
        <meta property="og:description" content="Explore all the free classes offered by METExcellence. Sign up for Intro to Physics, Chess, Intro to Python, UMTYMP Exam Prep, and more." />
      </Head>
      <Navbar />
      <FAQHeader title='All Classes' description='All classes below are free to sign up for. Unless otherwise stated, all classes will be online on Zoom. These are public, small-group classes on specific topics meant to bolster a student&apos;s interest in the subject and provide a solid understanding of the topics covered.' />
      <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {classes.map((classItem) => (
            <ClassCard key={classItem.name} classItem={classItem} />
          ))}
        </div>
        <JoinUsBar />
      </div>
      <Footer />
    </div>
  );
};

export default AllClassesPage;
