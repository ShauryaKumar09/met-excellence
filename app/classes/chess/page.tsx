"use client";

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FAQHeader from '@/components/props/Header';
import Footer from '@/components/Footer';

const ChessPage: React.FC = () => {
  return (
    <div className='bg-grey'>
      <Head>
        <title>Chess Information | METExcellence</title>
        <meta name="description" content="Explore METExcellence's chess classes. In-person instruction and tournaments for all skill levels." />
        <meta property="og:title" content="Chess Information | METExcellence" />
        <meta property="og:description" content="Learn about our in-person chess classes and tournaments for beginners to advanced players." />
      </Head>
      <Navbar />
      <FAQHeader 
        title='Chess Classes' 
        description='Join our in-person chess classes held at various locations. Check your email after signing up for location details. Free registration, materials provided. Instruction and tournaments every Sunday by experienced high school chess players.' 
      />

      <div>
        <div className="bg-white">
          <div className="p-4 sm:p-8 max-w-6xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-semibold text-blue2 mb-2">Beginner Group</h2>
              <p className="text-blue3 mb-1">Taught by Mr. Felix Cheng</p>
              <p className="text-gray-700 mb-2">Completely new to chess? This group is perfect for learning the basics!</p>
              <div className="mb-2">
                <p className="font-semibold text-gray-800">Topics Covered:</p>
                <p className="text-gray-700">How the pieces move, Rules of Chess, board setup, capturing, defending, attacking, check, checkmate, stalemate, basic strategies & openings.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Time:</p>
                <p className="text-gray-700">Sunday 1:00 PM - 3:00 PM CST</p>
              </div>
              <p className="text-gray-700 mt-2">Chess boards and pieces provided. Students may bring a notation notebook, their own chess sets, or clocks.</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <Image src="/slide/5chess.png" alt="Beginner Chess Class" width={500} height={300} className="w-full"
 />
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="p-4 sm:p-8 max-w-6xl mx-auto flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 pl-8">
              <h2 className="text-2xl font-semibold text-blue2 mb-2">Intermediate Group</h2>
              <p className="text-blue3 mb-1">Taught by Mr. Eric Yang</p>
              <p className="text-gray-700 mb-2">Know the basics? Advance your understanding of chess principles and learn to play consistent chess.</p>
              <div className="mb-2">
                <p className="font-semibold text-gray-800">Topics Covered:</p>
                <p className="text-gray-700">Forks, skewers, rook checkmate, king and pawn, popular openings, discovered attack, notation, developing.</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold text-gray-800">Time:</p>
                <p className="text-gray-700">Sunday 1:00 PM - 3:00 PM CST</p>
              </div>
              <p className="text-gray-700 mt-2">Chess boards and pieces provided. Students may bring a notation notebook, their own chess sets, or clocks.</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <Image src="/slide/3chessclass.png" alt="Intermediate Chess Class" width={500} height={300} className="w-full"
 />
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="p-4 sm:p-8 max-w-6xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-semibold text-blue2 mb-2">Advanced Group</h2>
              <p className="text-blue3 mb-1">Taught by Mr. Evan Xiong</p>
              <p className="text-gray-700 mb-2">Ready to challenge strong players? Join Chess Master Evan Xiong to improve your winning chances!</p>
              <div className="mb-2">
                <p className="font-semibold text-gray-800">Topics Covered:</p>
                <p className="text-gray-700">Analyzing games, advanced tactics (windmills), endgame strategy, deeper opening lines.</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold text-gray-800">Time:</p>
                <p className="text-gray-700">Sunday 1:00 PM - 3:00 PM CST</p>
              </div>
              <p className="text-gray-700 mt-2">Chess boards and pieces provided. Students may bring a notation notebook, their own chess sets, or clocks.</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <Image src="/slide/4chessclass.png" alt="Advanced Chess Class" width={500} height={300} className="w-full"
 />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChessPage;
