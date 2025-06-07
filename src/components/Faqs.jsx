import { Button } from '@mantine/core';
import React, { useState } from 'react'

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is the logo design process?",
      answer: "Our logo design process involves several key steps: 1) Initial consultation to understand your brand, 2) Research and concept development, 3) Initial design concepts, 4) Revisions and refinements, 5) Final delivery of all necessary file formats."
    },
    {
      question: "How long does it take to create a logo?",
      answer: "The typical timeline for a logo design project is 2-3 weeks. This includes initial concepts, revisions, and final delivery. Rush services are available for an additional fee."
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll receive your logo in multiple formats including: Vector files (AI, EPS), Raster files (PNG, JPG), and Web formats. We also provide a comprehensive brand guide with usage instructions."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, we offer unlimited revisions during the design process to ensure you're completely satisfied with your logo. We work closely with you to refine the design until it's perfect."
    },
    {
      question: "What makes a good logo design?",
      answer: "A good logo should be: 1) Simple and memorable, 2) Versatile across different mediums, 3) Relevant to your brand, 4) Timeless rather than trendy, 5) Appropriate for your industry."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl">Our faqs.</h1>
        <p className="text-xl text-gray-400 mt-8">
          The most common questions we get asked.
        </p>
      </div>

      <div className="w-[1000px] mt-15">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-700 bg-gray-950 rounded-2xl mb-4 overflow-hidden transition-all duration-300"
          >
            <div className="flex justify-between items-center p-6">
              <p className="text-xl">{faq.question}</p>
              <Button 
                variant="transparent" 
                color="#FF520E" 
                size="sm"
                onClick={() => toggleFaq(index)}
                className="transform transition-transform duration-300"
                style={{
                  transform: expandedIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              >
                +
              </Button>
            </div>
            {expandedIndex === index && (
              <div className="px-6 pb-6 text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
