import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaChalkboardTeacher, FaVideo, FaClock } from 'react-icons/fa';
import JoinUsBar from '@/components/JoinUsBar';

interface ClassItem {
  name: string;
  image: string;
  isInPerson: boolean;
  description: string;
  instructors: string;
  signUpLink: string;
  comingSoon?: boolean;
}

const classes: ClassItem[] = [
  {
    name: 'Chess',
    image: '/banners/chess.png',
    isInPerson: true,
    description: 'Instruction and Tournaments. Beginner to Advanced level. Located in the Plymouth Library Meeting Room. Time: 1pm - 3pm, Sunday. Tournaments held! Group instruction and ELO system.',
    instructors: 'Mr. Evan Xiong, Mr. Eric Yang, and Mr. Felix Cheng',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfsBLjoVsIYgjfD-tdugOPzQY7bH-13Ry4RX-ALVIIvvxcQgQ/viewform',
  },
  {
    name: 'UMTYMP Entrance Exam Prep',
    image: '/banners/umtymp.png',
    isInPerson: false,
    description: 'We all know how wonderful the UMTYMP program is, but we also know that the entrance exam is very tough. Ensure that you pass the entrance exam by signing up for this exam preparation class! We will go over test taking strategy, tricks to save you time and effort, and much more! Time: 7-9 PM CST every Sunday',
    instructors: 'Mr. Eric Yang and Mr. Aaron Zou',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=UMTYMP+Prep',
  },
  {
    name: 'AMC 8 Prep',
    image: '/banners/aops.png',
    isInPerson: false,
    description: 'This rigorous 16-week course prepares you for the AMC 8 next fall. You can sign up for the class even if it is still going on; we cover different topics every week. This class will cover test strategies, number theory, geometry, combinatorics and probability, and algebra. Other topics will also be covered. We will go over previous AMC 8 tests.',
    instructors: 'Mr. Kevin Qiu',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=AMC+8+Prep',
    comingSoon: true,
  },
  {
    name: 'SAT/ACT Prep',
    image: '/banners/sat.png',
    isInPerson: false,
    description: 'Prepare for standardized tests! This prepares you for the PSAT 8, PSAT/NMSQT, PSAT 10, Pre-ACT, SAT, and ACT. Doing well in the PSAT/NMSQT qualifies you for scholarship opportunities.',
    instructors: 'Mr. Jasper Fang',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeizSuFe6Vniia3uwtO7aLTgmhMQ1XUZ1xr9Yh89cpPQaSl_w/viewform',
    comingSoon: true,
  },
  {
    name: 'Intro to Physics',
    image: '/banners/physics.png',
    isInPerson: false,
    description: 'This class will introduce the basic principles of mechanical physics: kinematics, gravity, and Newton\'s laws.',
    instructors: 'Mr. Kevin Qiu',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Intro+to+Physics',
    comingSoon: true,
  },
  {
    name: 'Biology',
    image: '/banners/biology.png',
    isInPerson: false,
    description: 'Introduction to Middle School and 10th Grade Biology.',
    instructors: 'Mr. Evan Huss',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Biology',
    comingSoon: true,
  },
  {
    name: 'Intro to Python',
    image: '/banners/python.png',
    isInPerson: false,
    description: 'This is a beginner level class on Python, the programming language. All ages are welcome, and no prior programming experience is required. Get familiar with Python syntax and computer science ideas. We will build a mini-project using Python towards the end of the course and give real-world insight into the usefulness of computer science!',
    instructors: 'Mr. Aaron Zou',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Intro+to+Python',
    comingSoon: true,
  },
  {
    name: 'Intro to Chemistry',
    image: '/banners/chemistry.png',
    isInPerson: false,
    description: 'This course is an introductory course to basic chemistry principles and ideas. All ages are welcome, we will be working towards building understanding of chemistry and the ideas that shape our world.',
    instructors: 'Mr. Anishk Nag',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Intro+to+Chemistry',
    comingSoon: true,
  },
  {
    name: 'Geometry',
    image: '/banners/geometry.png',
    isInPerson: false,
    description: 'This course is a detailed introduction into Geometry (Euclidean) designed to foster students\' minds with ideas of proofs, congruence, similarity, and problem solving. For a more advanced Geometry course, or if you are looking for a competition-math style class, please sign up for AMC 8 Prep.',
    instructors: 'Mr. Felix Cheng',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?usp=pp_url&entry.388184123=Geometry',
    comingSoon: true,
  },
];

const ClassCard: React.FC<{ classItem: ClassItem }> = ({ classItem }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-8">
    <div className="md:w-1/3 relative h-64 md:h-auto">
      <Image 
        src={classItem.image} 
        alt={classItem.name} 
        layout="fill" 
        objectFit="cover"
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
      <p className="text-gray-600 mb-6">Taught by: {classItem.instructors}</p>
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

      </div>
    </div>
  </div>
);

const AllClassesPage: React.FC = () => {
    return (
      <div className='bg-grey'>
          <Navbar />
          <div className="bg-blue3 text-white py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">All Classes</h1>
                  <p className="text-center">
                      All classes below are free to sign up for. Unless otherwise stated, all classes will be online on Zoom. These are public, small-group classes on specific topics meant to bolster a student&apos;s interest in the subject and provide a solid understanding of the topics covered.
                  </p>
              </div>
          </div>
          <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
              {classes.map((classItem, index) => (
                  <ClassCard key={index} classItem={classItem} />
              ))}
              <JoinUsBar />
          </div>
          <Footer />
      </div>
    );
  };

export default AllClassesPage;