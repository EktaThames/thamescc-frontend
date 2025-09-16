'use client';

import { useState } from 'react';

const categories = [
  'Beer, Cider, Alcohol Free & Ready To Drink',
  'Biscuits',
  'Bread & Cakes',
  'Catering & Ethnic',
  'Cereals & Cereal Bar',
  'Chilled & Frozen',
  'Grocery',
  'Health, Beauty & Baby Products',
  'Hot Drinks',
  'Household, Cleaning & Paper',
  'Non-Food And Stationery',
];

export default function FilterSidebar() {
  const [filters, setFilters] = useState(['Size', '250ml', 'Beer', 'Can']);
  const [price, setPrice] = useState(200);
  const [showSize, setShowSize] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const ChevronDownIcon = ({ open }) => (
    <svg
      className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );


  const XIcon = () => (
    <svg
      className="w-4 h-4 cursor-pointer"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="w-64 p-4 bg-white border rounded-md shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Filters</h2>
        <button onClick={() => setFilters([])} className="text-sm text-blue-600">
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <span
            key={filter}
            className="bg-gray-200 text-sm px-2 py-1 rounded flex items-center space-x-1"
          >
            <span>{filter}</span>
            <span onClick={() => removeFilter(filter)}>
              <XIcon />
            </span>
          </span>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-2">All Categories</h3>
        <div className="max-h-32 overflow-y-scroll pr-2 space-y-1 text-sm">
          {categories.map((cat) => (
            <div
              key={cat}
              className="hover:text-orange-500 text-gray-700 cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          className="w-full flex justify-between items-center font-semibold"
          onClick={() => setShowSize(!showSize)}
        >
          Size
          <ChevronDownIcon open={showSize} />
        </button>
        {showSize && (
          <div className="mt-2 pl-2 text-sm text-gray-700 space-y-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Size"
                className="w-full border rounded px-2 py-1 text-sm"
              />
              <svg
                className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 10a6.65 6.65 0 1 1-13.3 0 6.65 6.65 0 0 1 13.3 0z" />
              </svg>
            </div>
            {[
              '6X240ML',
              '12X300ML',
              '8X330ML',
              '6X440ML',
              '12X500ML',
              '6X750ML',
              '12X1Ltr',
            ].map((size) => (
              <label key={size} className="block">
                <input type="checkbox" className="mr-1" /> {size}
              </label>
            ))}
            <div>
              <a href="#" className="text-blue-600 text-sm">100+ More</a>
            </div>
          </div>
        )}
      </div>

      <div>
        <button
          className="w-full flex justify-between items-center font-semibold"
          onClick={() => setShowBrand(!showBrand)}
        >
          Brand
          <ChevronDownIcon open={showBrand} />
        </button>
        {showBrand && (
          <div className="mt-2 pl-2 text-sm text-gray-700 space-y-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Brand"
                className="w-full border rounded px-2 py-1 text-sm"
              />
              <svg
                className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 10a6.65 6.65 0 1 1-13.3 0 6.65 6.65 0 0 1 13.3 0z" />
              </svg>
            </div>
            {[
              'AMSTEL',
              'AMIGOS',
              'BANGLA',
              'BUDWEISER',
              'COBRA INDIAN',
              'BECKS',
              'BIRRA MORETTI',
            ].map((brand) => (
              <label key={brand} className="block">
                <input type="checkbox" className="mr-1" /> {brand}
              </label>
            ))}
            <div>
              <a href="#" className="text-blue-600 text-sm">2000+ More</a>
            </div>
          </div>
        )}
      </div>

      <div >
        <h4 className="font-semibold mb-1">Offers</h4>
        <div className="text-sm space-y-1 text-gray-700">
          <label className="block">
            <input type="checkbox" className="mr-1" /> PMP
          </label>
          <label className="block">
            <input type="checkbox" className="mr-1" /> Promotion
          </label>
          <label className="block">
            <input type="checkbox" className="mr-1" /> Clearance
          </label>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-1">Price</h4>
        <input
          type="range"
          min="0"
          max="200"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>£0</span>
          <span>£{price}</span>
        </div>
      </div>
    </div>
  );
}
