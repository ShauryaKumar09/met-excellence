import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="bg-blue1 text-center text-white p-4">
            <p className="text-sm inline">Staff Needed! We need officers who are competent in graphic design!</p>
            <button className="ml-4 mt-2 sm:mt-0 bg-white text-blue1 py-0.5 px-3 rounded inline text-sm">Apply Now</button>
        </div>
    );
};

export default Banner;