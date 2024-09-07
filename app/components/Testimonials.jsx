'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'John Reelk',
      image: '/images/testifier.webp',
      text: 'Orange-Sun Homes provided exceptional service in helping me find my dream home. The team was professional and attentive to my needs.',
    },
    {
      name: 'Jane Smith',
      image: '/images/testifier2.jpg',
      text: 'I couldn’t be happier with the experience. The process was seamless, and the attention to detail was amazing.',
    },
    {
      name: 'Michael Johnson',
      image: '/images/testifier3.jpg',
      text: 'The best real estate service I’ve ever encountered! Orange-Sun Homes went above and beyond to make sure I was satisfied.',
    },
    {
      name: 'Sarah Williams',
      image: '/images/testifier4.jpg',
      text: 'Their expertise in the market is unmatched. I felt confident and supported throughout the entire process.',
    },
    {
      name: 'David Brown',
      image: '/images/testifier5.jpg',
      text: 'Highly recommended! The team at Orange-Sun Homes was always available to answer my questions and guide me through the process.',
    },
    {
      name: 'Emily Davis',
      image: '/images/testifier6.jpg',
      text: 'From start to finish, my experience with Orange-Sun Homes was outstanding. I found the perfect home thanks to their dedication.',
    },
  ];

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
                <p className="text-sm text-gray-600">Happy Client</p>
              </div>
            </div>
            <p className="text-lg">{testimonials[currentTestimonial].text}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={handlePrev}
              className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white rounded-full p-2 focus:outline-none transition-all"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white rounded-full p-2 focus:outline-none transition-all"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


