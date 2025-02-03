import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaChalkboardTeacher, FaVideo, FaAngleRight } from 'react-icons/fa';
import JoinUsBar from '@/components/JoinUsBar';

interface ClassItem {
  name: string;
  image: string;
  isInPerson: boolean;
  description: string;
  instructors: string;
  signUpLink: string;
}

const classes: ClassItem[] = [
  {
    name: 'Chess',
    image: 'https://lh3.googleusercontent.com/QVs9GRUDFGCdySde-PnbNHP0QW4xQ1lVulp4nKS07UrX82J6L1Oz3ZsvBlS9yx2JZHaK3Rc_X13g17lhbWdOua6bXaNtKIZSBRQSf45tZGWrB13j4OuQL7KUuAiLLG7p0Q=w1280',
    isInPerson: true,
    description: 'Instruction and Tournaments. Beginner to Advanced level. Located in the Plymouth Library Meeting Room. Time: 1pm - 3pm, Sunday. Tournaments held! Group instruction and ELO system.',
    instructors: 'Mr. Evan Xiong, Mr. Eric Yang, and Mr. Felix Cheng',
    signUpLink: 'https://example.com/sign-up-chess',
  },
  {
    name: 'UMTYMP Entrance Exam Prep',
    image: 'https://lh5.googleusercontent.com/NJebQet3qovM9ETXi2-h37-umW4UixPtEfXauoRgfH61ms9cdqD_DNf4OClJWz7YP_FTXI_FZpd9l74fYnn3bPqoBcd9BFb_z-dgO_cG--RKeaoDODdAHRrjfL9RNK2z=w1280',
    isInPerson: false,
    description: 'We all know how wonderful the UMTYMP program is, but we also know that the entrance exam is very tough. Ensure that you pass the entrance exam by signing up for this exam preparation class! We will go over test taking strategy, tricks to save you time and effort, and much more! Time: 7-9 PM CST every Sunday',
    instructors: 'Mr. Eric Yang and Mr. Aaron Zou',
    signUpLink: 'https://example.com/sign-up-umtymp',
  },
  // Add more classes here...
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
        {classItem.isInPerson ? (
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
        <Link href={classItem.signUpLink}>
          <button className="bg-blue2 text-white px-4 py-2 rounded hover:bg-blue1 transition-colors">
            Sign Up
          </button>
        </Link>
        <Link href="/become-a-tutor">
            <button className="bg-grey text-blue2 px-6 py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto">
            More Information
            <FaAngleRight className='ml-2'/> 
            </button>
        </Link>
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