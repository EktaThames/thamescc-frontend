"use client";

import { useState, useRef, useEffect } from 'react';
import { CategoryMenu } from '../Categories/CategoryMenu';
import Link from 'next/link';
export const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-50 navigation-bg">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between text-sm md:text-base font-medium text-gray-700 relative">
                <Link href="#" className="hover:bg-black text-white text-gray-700 rounded-lg hover:text-orange-700 bg-orange p-2 font-semibold">Home</Link>

                <div className="relative" ref={menuRef}>
                    <button
                        className="hover:text-orange-600 px-4 py-2 cursor-pointer font-semibold inline-flex"
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        All Categories
                        <svg className="-mr-1 size-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {menuOpen && <CategoryMenu />}
                </div>

                <Link href="/contact" className="hover:text-orange-600 font-semibold">Offer & Promotion</Link>
                <Link href="#" className="hover:text-orange-600 font-semibold">New Arrivals</Link>
                <Link href="#" className="hover:text-orange-600 font-semibold">Shop By Top Brand</Link>
                <Link href="#" className="hover:text-orange-600 font-semibold">Clearance Offers</Link>
            </div>
        </div>
    );
};