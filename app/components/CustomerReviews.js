'use client';

import { useState } from 'react';

const reviews = [
  {
    name: 'Kuldeep',
    role: 'Buyer',
    image: '/user-1.png',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus esse autem, quia vitae libero cum quibusdam iste? Temporibus eligendi vitae facilis facere.',
  },
  {
    name: 'Pankaj',
    role: 'Customer',
    image: '/user-2.png',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus esse autem, quia vitae libero cum quibusdam iste? Temporibus eligendi vitae facilis facere.',
  },
  {
    name: 'William',
    role: 'Customer',
    image: '/user-3.png',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus esse autem, quia vitae libero cum quibusdam iste? Temporibus eligendi vitae facilis facere.',
  },
  {
    name: 'Sophia',
    role: 'Buyer',
    image: '/user-4.png',
    quote:
      'Amazing experience! The platform is very intuitive and the support team is great.',
  },
  {
    name: 'Ava',
    role: 'Customer',
    image: '/user-5.png',
    quote:
      'Love it! Very user-friendly and great value for money. Highly recommend it!',
  },
  {
    name: 'John',
    role: 'Customer',
    image: '/user-5.png',
    quote:
      'Love it! Very user-friendly and great value for money. Highly recommend it!',
  },
];

const groupReviews = (arr, size) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += size) {
    grouped.push(arr.slice(i, i + size));
  }
  return grouped;
};

export const CustomerReviews = () => {
  const groupedReviews = groupReviews(reviews, 3);
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + groupedReviews.length) % groupedReviews.length);
  const next = () => setIndex((index + 1) % groupedReviews.length);

  return (
    <section className="py-10 px-6 bg-orange-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus esse autem, quia vitae libero cum quibusdam iste?
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={prev}
              className="bg-white text-orange-500 border rounded p-2 shadow hover:bg-orange-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="bg-white text-orange-500 border rounded p-2 shadow hover:bg-orange-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:w-2/3 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {groupedReviews.map((group, groupIndex) => (
              <div key={groupIndex} className="min-w-full flex gap-4 px-2">
                {group.map((review, i) => (
                  <div key={i} className="bg-white flex-1 flex flex-col items-center text-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-55 object-cover mb-4"
                    />
                    <div className="text-orange-500 text-3xl mb-2">❝</div>
                    <p className="text-gray-600 text-sm mb-4">{review.quote}</p>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.role}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {groupedReviews.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? 'bg-orange-500' : 'bg-orange-200'
            }`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </section>
  );
};
