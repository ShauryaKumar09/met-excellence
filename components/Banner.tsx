import React from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
    return (
        <div className="bg-blue1 text-center text-white p-4">
            <p className="text-sm inline mr-4">Staff Needed! We need officers who are competent in graphic design!</p>
            <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeBPSEfIM4SJhSw9INaSWJW5svtBLAIC4cTVfYT-9tr7QB99A/viewform">
                <button className="mt-2 sm:mt-0 bg-white text-blue1 py-0.5 px-3 rounded inline text-sm">Apply Now</button>
            </Link>
        </div>
    );
};

export default Banner;