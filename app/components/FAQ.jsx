'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I list my property with Orange-Sun Homes?',
      answer: 'Listing your property is easy. Simply contact our team, and we’ll guide you through the process step by step.',
    },
    {
      question: 'What services do Orange-Sun Homes provide?',
      answer: 'We offer property sales, rentals, and management services, ensuring you get the best experience whether you’re buying or selling.',
    },
    {
      question: 'How do I find the right home for me?',
      answer: 'Our expert agents will work closely with you to understand your needs and preferences, helping you find your dream home.',
    },
    {
      question: 'Can I get a virtual tour of properties?',
      answer: 'Yes, we offer virtual tours for select properties, allowing you to explore homes from the comfort of your own space.',
    },
    {
      question: 'What is the process for renting a property?',
      answer: 'Once you find the property you like, we’ll help you with the paperwork, agreements, and any necessary background checks to ensure a smooth rental experience.',
    },
    {
      question: 'How do I schedule a viewing?',
      answer: 'You can schedule a viewing by contacting our team. We’ll arrange a convenient time for you to visit the property.',
    },
    {
      question: 'Do you offer property management services?',
      answer: 'Yes, we provide comprehensive property management services to help you maintain and manage your property effectively.',
    },
    {
      question: 'How long does it take to sell a property?',
      answer: 'The time it takes to sell a property can vary depending on the market conditions, but our team will work diligently to ensure a timely sale.',
    },
    {
      question: 'Are there any fees for buyers?',
      answer: 'We don’t charge buyers any fees; our services are fully paid for by the property sellers.',
    },
    {
      question: 'What should I know before buying a home?',
      answer: 'We’ll guide you through the entire buying process, helping you understand key factors like location, budget, and the condition of the property.',
    },
    {
      question: 'How do I prepare my home for sale?',
      answer: 'Our team will help you with tips and strategies to make your home more appealing to buyers, including staging and minor repairs.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We cover a wide range of areas, including city and suburban locations, ensuring we can find the right property for you wherever you’re looking.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="container mx-auto px-6">
        <h2 className="sm:text-5xl font-extrabold text-center mb-16 tracking-wide text-2xl">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 bg-white text-gray-900 p-5 rounded-xl shadow-lg">
              <div
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <span className="text-2xl font-bold">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
