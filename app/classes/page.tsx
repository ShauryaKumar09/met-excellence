"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaChalkboardTeacher, FaVideo, FaClock } from 'react-icons/fa';
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
  signUpLink: string;
  comingSoon?: boolean;
  tags?: string[];
  moreInfoLink?: string;
}

const classes: ClassItem[] = [
  {
    name: 'Chess',
    image: '/banners/chess.png',
    isInPerson: true,
    description: '[LOCATIONS VARY FOR CHESS. Check emails and wechat for the correct location.] Instruction and Tournaments. Beginner to Advanced level. Tournaments held! Group instruction and ELO system. All ages welcome!',
    instructors: 'Mr. Evan Xiong, Mr. Eric Yang, and Mr. Felix Cheng',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfsBLjoVsIYgjfD-tdugOPzQY7bH-13Ry4RX-ALVIIvvxcQgQ/viewform',
    time: '1pm - 3pm CST on Sundays',
    grades: [1, 8],
    moreInfoLink: '/classes/chess',
  },
  {
    name: 'UMTYMP Entrance Exam Prep',
    image: '/banners/umtymp.png',
    isInPerson: false,
    description: 'We all know how wonderful the UMTYMP program is, but we also know that the entrance exam is very tough. Ensure that you pass the entrance exam by signing up for this exam preparation class! We will go over test taking strategy, tricks to save you time and effort, and much more!',
    instructors: 'Mr. Eric Yang, Mr. Kevin Qiu, and Mr. Aaron Zou',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=UMTYMP+Prep+(Info+Meeting+March+9)',
    time: '7pm - 9pm CST on Sundays',
    grades: [4, 7],
    moreInfoLink: 'https://r.umn.edu/academics/UMTYMP'
  },
  {
    name: 'Intro to Python',
    image: '/banners/python.png',
    isInPerson: false,
    description: 'This is a beginner level class on Python, the programming language. All ages are welcome, and no prior programming experience is required. Get familiar with Python syntax and computer science ideas. We will build a mini-project using Python towards the end of the course and give real-world insight into the usefulness of computer science!',
    instructors: 'Mr. Aaron Zou and Mr. Mohan Atkuri',
    signUpLink: 'https://forms.gle/47zgbzGgQbi9mZLd9',
    time: '8pm - 9pm CST on Tuesdays',
    grades: [4, 8],
  },
  {
    name: 'AMC 8 Prep',
    image: '/banners/amc8.png',
    isInPerson: false,
    description: 'This rigorous 16-week course prepares you for the AMC 8 next fall. You can sign up for the class even if it is still going on; we cover different topics every week. This class will cover test strategies, number theory, geometry, combinatorics and probability, and algebra. Other topics will also be covered. We will go over previous AMC 8 tests.',
    instructors: 'Mr. Kevin Qiu',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=AMC+8+Prep',
    comingSoon: true,
    grades: [3, 8],
  },
  {
    name: 'Intro to Physics',
    image: '/banners/physics.png',
    isInPerson: false,
    description: 'This class will introduce the basic principles of mechanical physics: kinematics, gravity, and Newton\'s laws.',
    instructors: 'Mr. Kevin Qiu',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Intro+to+Physics',
    comingSoon: true,
    grades: [4, 8],
  },
  {
    name: 'Biology',
    image: '/banners/biology.png',
    isInPerson: false,
    description: 'Introduction to Middle School and 10th Grade Biology.',
    instructors: 'Mr. Evan Huss',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Biology',
    comingSoon: true,
    grades: [4, 8],
  },
  {
    name: 'Intro to Chemistry',
    image: '/banners/chemistry.png',
    isInPerson: false,
    description: 'This course is an introductory course to basic chemistry principles and ideas. All ages are welcome, we will be working towards building understanding of chemistry and the ideas that shape our world.',
    instructors: 'Mr. Anishk Nag',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Intro+to+Chemistry',
    comingSoon: true,
    grades: [4, 8],
  },
  {
    name: 'Geometry',
    image: '/banners/geometry.png',
    isInPerson: false,
    description: 'This course is a detailed introduction into Geometry (Euclidean) designed to foster students\' minds with ideas of proofs, congruence, similarity, and problem solving. For a more advanced Geometry course, or if you are looking for a competition-math style class, please sign up for AMC 8 Prep.',
    instructors: 'Mr. Felix Cheng',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Geometry',
    comingSoon: true,
    grades: [4, 8],
  },
];

const ClassCard: React.FC<{ classItem: ClassItem }> = ({ classItem }) => {
  const id = classItem.name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div id={id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="md:w-2/5 relative h-64 md:h-auto">
        <Image
          src={classItem.image}
          alt={classItem.name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="md:w-2/3 p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-blue2">{classItem.name}</h2>
          {classItem.comingSoon ? (
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <FaClock className='mr-2' />Coming Soon
            </span>
          ) : classItem.isInPerson ? (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <FaChalkboardTeacher className="mr-2" /> In Person
            </span>
          ) : (
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <FaVideo className="mr-2" /> Zoom
            </span>
          )}
        </div>
        <p className="text-blue3 mb-4">{classItem.description}</p>
        <p className="text-gray-600">Taught by {classItem.instructors}</p>
        <p className="text-gray-600">{classItem.time}</p>
        <p className="text-gray-600 mb-6">
          {classItem.grades && classItem.grades.length > 0 ? (
            classItem.grades.length === 1 ? (
              `Recommended grade: ${classItem.grades[0]}th`
            ) : (
              `Recommended grades: ${classItem.grades[0]}-${classItem.grades[classItem.grades.length - 1]}th`
            )
          ) : (
            'Grade information not available'
          )}
        </p>
        <div className="flex space-x-4">
          {classItem.comingSoon ? (
            <button
              className="px-4 py-2 rounded bg-grey text-gray-500 cursor-not-allowed"
              disabled
            >
              Coming Soon
            </button>
          ) : (
            <Link href={classItem.signUpLink} target="_blank" rel="noopener noreferrer">
              <button
                className="px-4 py-2 rounded bg-blue2 text-white hover:bg-blue1 transition-colors"
              >
                Sign Up for {classItem.name}
              </button>
            </Link>
          )}
          {classItem.moreInfoLink ? (
            <Link href={classItem.moreInfoLink}>
              <button className="bg-grey text-blue2 px-6 py-2 rounded hover:bg-gray-300 transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto">
                More Information
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
      }
    }
  }, [classParam]);

  return (
    <div className='bg-grey'>
      <Head>
        <title>All Classes | METExcellence</title>
        <meta name="description" content="Explore all the free classes offered by METExcellence. Sign up for various subjects including Chess, UMTYMP Prep, AMC 8 Prep, and more." />
        <meta property="og:title" content="All Classes | METExcellence" />
        <meta property="og:description" content="Explore all the free classes offered by METExcellence. Sign up for various subjects including Chess, UMTYMP Prep, AMC 8 Prep, and more." />
      </Head>
      <Navbar />
      <FAQHeader title='All Classes' description='All classes below are free to sign up for. Unless otherwise stated, all classes will be online on Zoom. These are public, small-group classes on specific topics meant to bolster a student&apos;s interest in the subject and provide a solid understanding of the topics covered.' />
      <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
        {classes.map((classItem) => (
          <ClassCard key={classItem.name} classItem={classItem} />
        ))}
        <JoinUsBar />
      </div>
      <Footer />
    </div>
  );
};

export default AllClassesPage;
