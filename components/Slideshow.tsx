"use client";

import React, { useState, useEffect, ReactNode } from 'react';

interface SlideItem {
  content: ReactNode;
  duration?: number;
}

interface SlideshowProps {
  items: SlideItem[];
  defaultDuration?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ items, defaultDuration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, items[currentIndex].duration || defaultDuration);

    return () => clearInterval(interval);
  }, [currentIndex, items, defaultDuration]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-80">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.content}
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-blue1' : 'bg-grey'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
