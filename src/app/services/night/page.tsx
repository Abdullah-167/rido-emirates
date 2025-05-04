import Layout from "@/app/Components/Layout/Index";
import Nighttrip from "@/app/Components/Nighttrip/Nighttrip";
import React from "react";

// SEO metadata for the Night Service Page
export const metadata = {
  title: "Night Ride Services - Rido Emirates | Luxurious & Comfortable Night Rides",
  description:
    "Experience luxurious and comfortable night rides with Rido Emirates. Whether you're heading to a party, event, or just enjoying the nightlife, our premium transportation ensures a smooth and stylish ride.",
  keywords: [
    "night ride Dubai",
    "night ride Abu Dhabi",
    "luxury night ride",
    "night transport Dubai",
    "night transport Abu Dhabi",
    "VIP night ride",
    "night limousine Dubai",
    "night limousine Abu Dhabi",
    "private night ride Dubai",
    "private night ride Abu Dhabi",
    "affordable night ride Dubai",
    "affordable night ride Abu Dhabi",
    "nightlife transport Dubai",
    "nightlife transport Abu Dhabi",
    "luxury transport night",
    "exclusive night ride Dubai",
    "exclusive night ride Abu Dhabi",
    "night car service Dubai",
    "night car service Abu Dhabi",
    "party ride Dubai",
    "party ride Abu Dhabi",
    "night event transport Dubai",
    "night event transport Abu Dhabi",
    "nighttime chauffeur Dubai",
    "nighttime chauffeur Abu Dhabi",
    "safe night transport Dubai",
    "safe night transport Abu Dhabi",
    "night ride booking Dubai",
    "night ride booking Abu Dhabi",
    "private limousine night ride"
  ]
};

const page = () => {
  return (
    <main>
      <Layout>
        <Nighttrip />
      </Layout>
    </main>
  );
};

export default page;
