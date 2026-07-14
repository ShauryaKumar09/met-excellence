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
        <meta name="description" content="Explore METExcellence's chess class. In-person instruction and tournaments for all skill levels." />
        <meta property="og:title" content="Chess Information | METExcellence" />
        <meta property="og:description" content="Learn about our in-person chess class and tournaments, open to all skill levels." />
      </Head>
      <Navbar />
      <FAQHeader 
        title='Chess Classes' 
        description='Join our in-person chess classes held at various locations. Check your email after signing up for location and schedule details. Free registration, materials provided. Instruction and tournaments led by experienced high school chess players.'
      />

      <div>
        <div className="bg-white">
          <div className="p-4 sm:p-8 max-w-6xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-semibold text-blue2 mb-2">Chess Group</h2>
              <p className="text-blue3 mb-1">Taught by Tony Cheng and Shrey Uppal</p>
              <p className="text-gray-700 mb-2">One group for all skill levels, from players who have never touched a board to those looking to sharpen a competitive game. Instruction is tailored to where you are, and tournaments are open to everyone.</p>
              <div className="mb-2">
                <p className="font-semibold text-gray-800">Topics Covered:</p>
                <p className="text-gray-700">How the pieces move, rules and board setup, check, checkmate, and stalemate, tactics like forks and skewers, notation, openings and development, endgame strategy, and game analysis.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Time:</p>
                <p className="text-gray-700">TBD</p>
              </div>
              <p className="text-gray-700 mt-2">Chess boards and pieces provided. Students may bring a notation notebook, their own chess sets, or clocks.</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <Image src="/slide/5chess.png" alt="Chess Class" width={500} height={300} className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChessPage;
