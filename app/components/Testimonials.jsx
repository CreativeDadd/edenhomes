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
      name: 'Bobby Davis',
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
    <section className="py-20 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide text-orange-400">What Our Clients Say</h2>
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          {/* Testimonial Content */}
          <div className="lg:w-1/2 p-10">
            <p className="text-xl italic leading-relaxed text-gray-300">{testimonials[currentTestimonial].text}</p>
            <div className="mt-8 flex items-center">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                width={80}
                height={80}
                className="rounded-full border-4 border-orange-400"
              />
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                <p className="text-sm text-gray-500">Happy Client</p>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="lg:w-1/2 relative h-full">
            <Image
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-6">
            <button
              onClick={handlePrev}
              className="bg-gradient-to-r from-[#FF7F50] to-[#FF6A35] hover:from-[#FF6A35] hover:to-[#FF7F50] text-white rounded-full p-4 focus:outline-none shadow-md transition-all"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-[#FF7F50] to-[#FF6A35] hover:from-[#FF6A35] hover:to-[#FF7F50] text-white rounded-full p-4 focus:outline-none shadow-md transition-all"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
