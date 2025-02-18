import Link from 'next/link';
import { FaYoutube, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { PiXLogoBold, PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    const footerSections = {
      about: {
        title: 'ABOUT',
        items: [
          { name: 'about us', href: '/about-us' },
          { name: 'partnerships', href: '/partnerships' },
          { name: 'donate', href: '/donate' }
        ]
      },
      resources: {
        title: 'RESOURCES',
        items: [
          { name: 'faq', href: '/faq' },
          { name: 'resources', href: '/resources' },
          { name: 'help desk', href: '/help-desk' }
        ]
      },
      tutoring: {
        title: 'TUTORING',
        items: [
          { name: 'benefits', href: '/tutoring/benefits' },
          { name: 'session safety', href: '/tutoring/session-safety' }
        ]
      },
      community: {
        title: 'COMMUNITY',
        items: [
          { name: 'blog', href: '/blogs' },
          { name: 'stories', href: '/stories' }
        ]
      },
    };

    const socialLinks = [
        { name: 'Mail', href: 'mailto:metexcellence@gmail.com', icon: FaEnvelope },
        { name: 'Instagram', href: 'https://www.instagram.com/metexcellence/', icon: PiInstagramLogoFill },
        { name: 'YouTube', href: 'https://www.youtube.com/channel/UCrZGtYCy1FTHFODCMwkEUlw', icon: FaYoutube },
        { name: 'Discord', href: 'https://discord.com/invite/metexcellence', icon: FaDiscord },
        { name: 'Twitter', href: 'https://twitter.com/metexcellence', icon: PiXLogoBold },
    ];
  
    return (
      <footer className="bg-blue2 text-white p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="flex flex-col">
                <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="hover:text-gray-300 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-white flex flex-col lg:flex-row justify-between items-left gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">MET Excellence</h1>
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
