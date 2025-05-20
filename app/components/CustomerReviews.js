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
    <section className="py-10 px-6 bg-orange-300 top-cat">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/3  flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-4 justify-self-start">Customer Reviews</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus esse autem, quis vitae libero eum quibusdam iste? Temporibus eligendi vitae facilis facere, ad omnis incidunt harum aspernatur cupiditate tempora aliquid?
          </p>

          
        </div>

        <div className="lg:w-2/3 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {groupedReviews.map((group, groupIndex) => (
              <div key={groupIndex} className="min-w-full flex gap-4 px-2">
                {group.map((review, i) => (
                  <div key={i} className="bg-white flex-1 flex flex-col items-center rounded-lg relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-55 object-cover mb-4"
                    />
                    <div className="text-white quote-p"><svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_208_327)">
<circle cx="25" cy="25.665" r="25" fill="#F86726"/>
<path d="M23.125 16.915V30.665C23.1229 32.6535 22.3321 34.56 20.926 35.9661C19.5199 37.3721 17.6135 38.163 15.625 38.165C15.2935 38.165 14.9755 38.0333 14.7411 37.7989C14.5067 37.5645 14.375 37.2466 14.375 36.915C14.375 36.5835 14.5067 36.2656 14.7411 36.0312C14.9755 35.7967 15.2935 35.665 15.625 35.665C16.9511 35.665 18.2229 35.1383 19.1605 34.2006C20.0982 33.2629 20.625 31.9911 20.625 30.665V29.415H11.25C10.587 29.415 9.95107 29.1516 9.48223 28.6828C9.01339 28.214 8.75 27.5781 8.75 26.915V16.915C8.75 16.252 9.01339 15.6161 9.48223 15.1473C9.95107 14.6784 10.587 14.415 11.25 14.415H20.625C21.288 14.415 21.9239 14.6784 22.3928 15.1473C22.8616 15.6161 23.125 16.252 23.125 16.915ZM38.75 14.415H29.375C28.712 14.415 28.0761 14.6784 27.6072 15.1473C27.1384 15.6161 26.875 16.252 26.875 16.915V26.915C26.875 27.5781 27.1384 28.214 27.6072 28.6828C28.0761 29.1516 28.712 29.415 29.375 29.415H38.75V30.665C38.75 31.9911 38.2232 33.2629 37.2855 34.2006C36.3479 35.1383 35.0761 35.665 33.75 35.665C33.4185 35.665 33.1005 35.7967 32.8661 36.0312C32.6317 36.2656 32.5 36.5835 32.5 36.915C32.5 37.2466 32.6317 37.5645 32.8661 37.7989C33.1005 38.0333 33.4185 38.165 33.75 38.165C35.7385 38.163 37.6449 37.3721 39.051 35.9661C40.4571 34.56 41.2479 32.6535 41.25 30.665V16.915C41.25 16.252 40.9866 15.6161 40.5178 15.1473C40.0489 14.6784 39.413 14.415 38.75 14.415Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_208_327">
<rect width="50" height="50" fill="white" transform="translate(0 0.665039)"/>
</clipPath>
</defs>
</svg></div>
                    <div className="p-5">
					<p className="text-gray-600 text-sm mb-4">{review.quote}</p>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.role}</p>
					</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
		  <div className="flex items-center justify-between">
		  <div className="mt-6 flex items-center gap-3">
            <button
              onClick={prev}
              className="bg-orange-500 text-white rounded p-3 shadow hover:bg-orange-700"
            >
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.230466 4.14291L4.68785 0.428417C5.20891 -0.00580072 6 0.364724 6 1.04299V7.62693C6 8.3052 5.20891 8.67572 4.68785 8.24151L0.230466 4.52702C0.110528 4.42707 0.110528 4.24285 0.230466 4.14291Z" fill="white"/>
</svg>

            </button>
            <button
              onClick={next}
              className="bg-orange-500 text-white rounded p-3 shadow hover:bg-orange-700"
            >
             <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.76953 4.14291L1.31215 0.428417C0.791086 -0.00580072 0 0.364724 0 1.04299V7.62693C0 8.3052 0.791085 8.67572 1.31215 8.24151L5.76953 4.52702C5.88947 4.42707 5.88947 4.24285 5.76953 4.14291Z" fill="white"/>
</svg>
            </button>
          </div>
		  
		   <div className="flex justify-center mt-6 gap-2">
        {groupedReviews.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? 'bg-orange-500' : 'bg-orange-50'
            }`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
	  
	  <div className="mt-6 flex items-center gap-3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
	  </div>
		  
		  
        </div>
		
		
		
		
      </div>

     
    </section>
  );
};
