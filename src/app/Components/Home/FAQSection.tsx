"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Rido Emirate’s car lift service stand out?",
      answer:
        "At Rido Emirate, we prioritize punctuality, safety, and comfort. Our well-maintained fleet, experienced drivers, and commitment to on-time arrivals make us the preferred choice for seamless travel between Dubai and Abu Dhabi.",
    },
    {
      question: "What type of vehicles do you provide for the car lift service?",
      answer:
        "We offer a variety of vehicles, including luxury sedans, SUVs, and spacious minivans, to cater to your comfort and group size requirements. All vehicles are equipped with modern safety features to ensure a secure and pleasant journey.",
    },
    {
      question: "Are your drivers trained professionals?",
      answer:
        "Yes, all Rido Emirate drivers undergo extensive training in both driving and customer service, ensuring safe, efficient, and friendly service. They are fluent in English and familiar with both local and international cultural norms.",
    },
    {
      question: "How can I book a car lift with Rido Emirate?",
      answer:
        "You can easily book your car lift service through our user-friendly online platform. Simply select your pickup and drop-off locations, preferred vehicle, and payment method to complete the booking in a few clicks.",
    },
  ];

  const toggleAnswer = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(0); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the new question
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQs – Rido Emirate Car Lift Service</h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#07aae7] text-white p-6 rounded-lg shadow-lg">
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
              </div>

              {/* Accordion content with smooth transition */}
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;