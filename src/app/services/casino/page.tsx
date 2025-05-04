import Casinotrip from "@/app/Components/Casinotrip/Casinotrip";
import Layout from "@/app/Components/Layout/Index";
import React from "react";

// SEO metadata for the Casino Trip Page
export const metadata = {
  title: "Casino Trip Services - Rido Emirates | Luxury Transport to Casinos",
  description:
    "Enjoy a luxurious casino trip with Rido Emirates. We provide premium transportation to top casinos in Dubai and Abu Dhabi. Book your VIP ride today for an unforgettable experience at your favorite casino.",
  keywords: [
    "casino trip Dubai",
    "casino trip Abu Dhabi",
    "luxury casino transport",
    "casino transportation Dubai",
    "casino transportation Abu Dhabi",
    "VIP casino ride",
    "casino limousine Dubai",
    "casino limousine Abu Dhabi",
    "casino trip booking Dubai",
    "casino trip booking Abu Dhabi",
    "premium casino transfer",
    "casino ride Dubai",
    "casino ride Abu Dhabi",
    "luxury transport to casino",
    "casino tour Dubai",
    "casino tour Abu Dhabi",
    "high roller casino ride",
    "casino VIP transportation",
    "luxury casino travel",
    "private casino transfer",
    "affordable casino trip Dubai",
    "affordable casino trip Abu Dhabi",
    "nightlife casino trip",
    "casino party transport",
    "luxury night out Dubai",
    "luxury night out Abu Dhabi",
    "casino event transportation",
    "casino transportation service",
    "Dubai casino transport",
    "Abu Dhabi casino transport",
    "exclusive casino trip",
    "casino shuttle Dubai",
    "casino shuttle Abu Dhabi"
  ]
};

const page = () => {
  return (
    <main>
      <Layout>
        <Casinotrip />
      </Layout>
    </main>
  );
};

export default page;
