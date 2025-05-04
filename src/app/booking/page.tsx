import React from "react";
import Layout from "../Components/Layout/Index";
import BookingForm from "../Components/Booking/BookingForm";

// SEO metadata for the Booking Page
export const metadata = {
  title: "Book Your Ride - Rido Emirates | Reliable Taxi Service in Dubai & Abu Dhabi",
  description:
    "Easily book a reliable and affordable taxi with Rido Emirates. Whether you need a ride in Dubai or Abu Dhabi, our booking form allows you to schedule your taxi in just a few clicks. Safe, comfortable, and timely transportation.",
  keywords: [
    "book taxi Dubai",
    "book taxi Abu Dhabi",
    "Rido Emirates booking",
    "book taxi service",
    "taxi booking form",
    "Dubai taxi booking",
    "Abu Dhabi taxi booking",
    "taxi ride booking",
    "affordable taxi booking",
    "safe taxi booking",
    "Dubai to Abu Dhabi taxi booking",
    "Abu Dhabi to Dubai taxi booking",
    "taxi booking online",
    "taxi service booking Dubai",
    "taxi service booking Abu Dhabi",
    "easy taxi booking",
    "fast taxi booking",
    "reliable taxi booking",
    "taxi booking form Dubai",
    "taxi booking form Abu Dhabi",
    "book a ride Dubai",
    "book a ride Abu Dhabi",
    "book taxi online Dubai",
    "book taxi online Abu Dhabi",
    "24/7 taxi booking Dubai",
    "24/7 taxi booking Abu Dhabi",
    "taxi reservations Dubai",
    "taxi reservations Abu Dhabi",
    "book private taxi Dubai",
    "book private taxi Abu Dhabi",
    "taxi ride reservations Dubai",
    "taxi ride reservations Abu Dhabi",
    "affordable transportation Dubai",
    "affordable transportation Abu Dhabi",
    "easy transportation booking Dubai",
    "easy transportation booking Abu Dhabi",
    "book taxi UAE",
    "airport taxi booking Dubai",
    "airport taxi booking Abu Dhabi",
    "hotel taxi booking Dubai",
    "hotel taxi booking Abu Dhabi",
    "transportation booking Dubai",
    "transportation booking Abu Dhabi"
  ]
};

const page = () => {
  return (
    <main>
      <Layout>
        <BookingForm />
      </Layout>
    </main>
  );
};

export default page;
