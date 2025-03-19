"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQHeader from '@/components/props/Header';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are MET classes actually free?",
    answer: "Yes, absolutely! All classes are completely free of charge. It is our mission to bring academic readiness and excellence to all people completely for free. We will provide teaching materials for in-person instruction and online."
  },
  {
    question: "Are MET classes online or in-person?",
    answer: "Unless otherwise stated, all MET classes are held online over zoom. Some classes are hosted in-person, and this will be clearly indicated. If you plan on taking an in-person class, be sure to check the location were it will be hosted."
  },
  {
    question: "Are there any prerequisites to taking a class?",
    answer: "Unless otherwise stated, there are no official prerequisites for taking any class. Most classes are meant to be introductory towards the subject and develop a student's interest in them. Harder classes are usually built upon prior knowledge. We tutor all ages and grades, and thus a wide range of classes of varying difficulty. If you are interested in a class, feel free to sign up!"
  },
  {
    question: "What happens if I miss a class?",
    answer: "No worries! If you are planning on missing a class, email your tutor in advance to let them know for attendance purposes. Online classes are recorded and will be posted on our YouTube channel where you can make it up. You can also request private tutoring to have live make-up sessions."
  },
  {
    question: "Do I have to be from Minnesota to sign up?",
    answer: "Nope! Our online classes are open everyone from everywhere, not specific to Minnesota, provided you can make the scheduled time, usually CST (Central Standard Time). Our in-person classes will only have certain locations, so check to make sure that you can make them."
  },
  {
    question: "Can I contribute to the organization?",
    answer: "Tutors are always in demand, so if you wish to share your knowledge about a certain subject(s) with others, apply to become a tutor! The best way to support us is to spread the word to your friends, family, and school, and it's completely free! Otherwise, you can make a donation to one of our officers to help us afford teaching materials."
  }
];

const FAQItem: React.FC<{ faq: FAQItem }> = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-300 pt-8 pb-2">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-blue2">{faq.question}</h3>
        {isOpen ? <FaAngleUp className="text-blue2" /> : <FaAngleDown className="text-blue2" />}
      </button>
      {/* Transition effect for showing/hiding the answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-2 text-blue3">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-grey">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <FAQHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about MET Excellence, our classes, and how to get involved."
        />
        <div className="p-4 sm:p-8 max-w-3xl mx-auto -mt-6 mb-24">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
