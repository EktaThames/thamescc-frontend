import React from "react";
import { HeroBanner } from "./components/Banner/Banner"
import { Categories } from "./components/Categories/Categories";
import { BestSellers } from "./components/Sellers/BestSellers";
import { WeeklyOffers } from "./components/Offers/WeeklyOffers";
import { CustomerReviews } from "./components/Reviews/CustomerReviews";

export default function Home() {
  return (
    <div className="bg-orange-50 text-gray-800">
      <HeroBanner />
      <Categories />
      <BestSellers />
      <WeeklyOffers />
      <CustomerReviews />
    </div>
  );
}