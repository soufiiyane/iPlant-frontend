import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={toggleOpen}
    >
      <span className="text-lg font-medium">{question}</span>
      {isOpen ? (
        <ChevronUp className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-500" />
      )}
    </button>
    {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
  </div>
);

const FAQs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(-1); // Start with no FAQ open

  return (
    <div className="w-full mx-auto px-4 max-w-c-1390 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="md:w-1/3">
          <h2 className="text-sm uppercase mb-4">NOS FAQS</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
              Questions Fréquemment Posées
            </span>
          </h1>
        </div>
        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
