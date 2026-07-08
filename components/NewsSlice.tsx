import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsSlice: React.FC = () => {
    const flyers = [
        {
            src: "/flyers/physicsflyer.png",
            alt: "Intro to Physics flyer",
            href: "/classes?class=intro-to-physics",
        },
        {
            src: "/flyers/tutorsflyer.png",
            alt: "We are looking for tutors flyer",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform",
            external: true,
        },
        {
            src: "/flyers/freetutoringflyer.png",
            alt: "Need free tutoring flyer",
            href: "/classes",
        },
    ];

    return (
        <div className='bg-blue3 flex flex-col justify-center items-center'>
            <div className="w-full max-w-6xl mx-auto text-center px-4 py-16">
                <h1 className="text-4xl font-bold text-white mb-6">News</h1>
                <p className="text-white text-xl mb-8">
                    Here are some of our flyers
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {flyers.map((flyer) => (
                        <Link
                            key={flyer.src}
                            href={flyer.href}
                            {...(flyer.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                                <Image
                                    src={flyer.src}
                                    alt={flyer.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsSlice;
