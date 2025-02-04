import React from 'react';

interface FAQHeaderProps {
  title?: string;
  description?: string;
}

export default function FAQHeader({ 
  title = "Example Title",
  description = "Example Description"
}: FAQHeaderProps) {
  return (
    <div className="bg-blue3 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          {title}
        </h1>
        <p className="text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
