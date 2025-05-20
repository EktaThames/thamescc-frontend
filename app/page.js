import React from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Categories } from "./components/Categories";
import { BestSellers } from './components/BestSellers';
import { WeeklyOffers } from "./components/WeeklyOffers";
import { CustomerReviews } from "./components/CustomerReviews";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-orange-50 text-gray-800">
      <Header />
      <HeroBanner />
      <Categories />
      <BestSellers />
      <WeeklyOffers />
      <CustomerReviews />
      <Footer />
    </div>
  );
}