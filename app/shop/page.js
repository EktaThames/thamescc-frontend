import React from "react";

import ThreeIconsSection from "../components/ThreeSections/ThreeSections";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import Sort from "../components/Sort/Sort";
import Pagination from "../components/Pagination/Pagination";

export default function Shop() {
    return (
        <div className="bg-white text-gray-800">
            <Breadcrumb />
            <div className="flex flex-col lg:flex-row p-4 gap-5">
                <FilterSidebar />
                <section className="flex-1">
                    <div className="p-6">
                        <div className="text-sm text-gray-500 mb-4">
                            Showing 1 – 10 of 200 results for "Beer"
                        </div>
                        <Sort />
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="p-4 rounded-lg relative">
                                    <div className="absolute top-2 right-2 flex flex-col gap-2 items-center">
                                        <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                                            <img src="/images/arrow-left.svg" alt=" " />
                                        </button>

                                        <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                                            <img src="/images/arrow-left.svg" alt=" " />
                                        </button>
                                    </div>
                                    <img src={`/images/product-${i + 1}.png`} alt={`product ${i + 1}`} className="h-55 mx-auto mb-6" />
                                    <h3 className="text-base mb-1 uppercase mb-4">Product {i + 1} </h3>
                                    <div className="flex justify-between">
                                        <p className="text-base mb-1 uppercase">24X50ML</p>
                                        <p className="text-base mb-1 inline-flex items-center gap-2"><svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="5.5" r="5" fill="#01AA28" />
                                        </svg>
                                            In Stock</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 border border-orange-500 text-orange-500 py-1 px-3 rounded hover:bg-orange-50">
                                            Add Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Pagination />
                </section>
            </div>
            <ThreeIconsSection />
        </div>
    );
}