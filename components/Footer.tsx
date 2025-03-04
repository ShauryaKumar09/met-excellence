import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { PiXLogoBold, PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  const socialLinks = [
    { name: 'Mail', href: 'mailto:metexcellence@gmail.com', icon: FaEnvelope },
    { name: 'Instagram', href: 'https://www.instagram.com/metexcellence/', icon: PiInstagramLogoFill },
    { name: 'YouTube', href: 'https://youtube.com/@METExcellence', icon: FaYoutube },
    { name: 'Discord', href: 'https://discord.gg/a74jRnwEAT', icon: FaDiscord },
    { name: 'Twitter', href: 'https://twitter.com/metexcellence', icon: PiXLogoBold },
  ];
  
  return (
    <footer className="bg-blue2 text-white p-6 md:p-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-left gap-6">
      <Link href="/" className="flex flex-row justify-between items-center mt-0 lg:-mt-3.5">
        
          <Image
            src="/logowhite.svg"
            alt="MET Excellence Logo"
            width={64}
            height={64}
            priority
            className="inline-block mr-2 text-blue2 order-2 lg:order-1 lg:w-12 lg:h-12"
          />
          <div className='flex flex-col lg:order-2 order-1 lg:mt-0 -mt-12'>
          <h1 className="text-2xl font-bold">MET Excellence</h1>
          <p className='text-sm'>Registered Minnesota Nonprofit</p>
          </div>
        </Link>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 lg:mt-0 -mt-12">
        <Link href="/terms" className="hover:text-gray-300">
        Terms and Conditions
        </Link>
        <Link href="/privacy" className="hover:text-gray-300">
        Privacy Policy
        </Link>
        <Link href="/trust" className="hover:text-gray-300">
        Trust and Safety
        </Link>
      </div>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:opacity-80"
        >
          <link.icon className="w-6 h-6" />
        </a>
        ))}
      </div>
      </div>
      <div className="text-center text-xs sm:mt-0 mt-12 -mb-4">
      <p>made with 🤍 by mohan atkuri</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
