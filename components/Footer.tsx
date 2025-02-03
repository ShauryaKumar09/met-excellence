import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { PiXLogoBold, PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    const socialLinks = [
        { name: 'Mail', href: 'mailto:comms@metexcellence.org', icon: FaEnvelope },
        { name: 'Instagram', href: 'https://www.instagram.com/metexcellence/', icon: PiInstagramLogoFill },
        { name: 'YouTube', href: 'https://www.youtube.com/channel/UCrZGtYCy1FTHFODCMwkEUlw', icon: FaYoutube },
        { name: 'Discord', href: 'https://discord.gg/a74jRnwEAT', icon: FaDiscord },
        { name: 'Twitter', href: 'https://twitter.com/metexcellence', icon: PiXLogoBold },
    ];
  
    return (
      <footer className="bg-blue2 text-white p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-left gap-6">
            <div className="flex flex-row justify-between items-center -mt-3.5">
                <Image
                    src="/logowhite.svg"
                    alt="MET Excellence Logo"
                    width={64}
                    height={64}
                    className="priority inline-block mr-2 text-blue2 order-2 lg:order-1 lg:w-12 lg:h-12"
                />
                <h1 className="text-2xl font-bold order-1 lg:order-2">MET Excellence</h1>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <Link href="/terms" className="hover:text-gray-300">
                terms and conditions
              </Link>
              <Link href="/privacy" className="hover:text-gray-300">
                privacy policy
              </Link>
              <Link href="/trust" className="hover:text-gray-300">
                trust and safety
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
        </div>
      </footer>
    );
};

export default Footer;
