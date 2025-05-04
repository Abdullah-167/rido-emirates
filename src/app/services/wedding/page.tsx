import Layout from "@/app/Components/Layout/Index";
import Weddingtrip from "@/app/Components/Wedding/Weddingtrip";
import React from "react";

// SEO metadata for the Wedding Service Page
export const metadata = {
  title: "Wedding Ride Services - Rido Emirates | Elegant & Luxurious Wedding Transportation",
  description:
    "Make your special day even more memorable with Rido Emirates' wedding ride services. Enjoy elegant, luxurious, and reliable transportation for your wedding day, ensuring a smooth and stylish journey for you and your guests.",
  keywords: [
    "wedding ride Dubai",
    "wedding ride Abu Dhabi",
    "luxury wedding transport",
    "wedding limousine Dubai",
    "wedding limousine Abu Dhabi",
    "wedding car service Dubai",
    "wedding car service Abu Dhabi",
    "bridal transport Dubai",
    "bridal transport Abu Dhabi",
    "private wedding ride Dubai",
    "private wedding ride Abu Dhabi",
    "wedding chauffeur Dubai",
    "wedding chauffeur Abu Dhabi",
    "luxury wedding chauffeur Dubai",
    "luxury wedding chauffeur Abu Dhabi",
    "affordable wedding ride Dubai",
    "affordable wedding ride Abu Dhabi",
    "exclusive wedding transport",
    "wedding transportation Dubai",
    "wedding transportation Abu Dhabi",
    "wedding limo Dubai",
    "wedding limo Abu Dhabi",
    "destination wedding transport Dubai",
    "destination wedding transport Abu Dhabi",
    "wedding shuttle service Dubai",
    "wedding shuttle service Abu Dhabi",
    "wedding transportation booking"
  ]
};

const page = () => {
  return (
    <main>
      <Layout>
        <Weddingtrip />
      </Layout>
    </main>
  );
};

export default page;
