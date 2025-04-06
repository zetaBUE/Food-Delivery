/*import React, { useState } from 'react';

const FAQ = () => {
  /*const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Crave Cart?",
      answer: "Crave Cart is an online food ordering platform where you can browse various restaurants, choose your favorite dishes, and have them delivered to your door."
    },
    {
      question: "How do I place an order?",
      answer: "Simply browse through our menu, select your items, add them to the cart, and proceed to checkout. You can pay securely through our platform, and your food will be delivered to you."
    },
    {
      question: "Do you offer contactless delivery?",
      answer: "Yes, we offer contactless delivery for your safety and convenience. You can choose the contactless option during checkout."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order is placed, you will receive real-time updates on its status, including when it is being prepared, when it's out for delivery, and when it arrives at your doorstep."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes, we regularly offer discounts, special promotions, and deals. Be sure to check our homepage for the latest offers or subscribe to our newsletter to stay updated."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within a certain timeframe after placing it. Please contact customer support for assistance with cancellations or modifications."
    },
    {
      question: "Is Crave Cart available in my area?",
      answer: "Crave Cart operates in various cities. Please enter your zip code on our website or app to check if we deliver to your location."
    }
  ];

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg"
          >
            <button
              className="w-full text-left p-5 text-lg font-medium text-blue-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="p-5 text-gray-700 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );*/
//click


 /* const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Crave Cart?",
      answer: "Crave Cart is an online food ordering platform where you can browse various restaurants, choose your favorite dishes, and have them delivered to your door."
    },
    {
      question: "How do I place an order?",
      answer: "Simply browse through our menu, select your items, add them to the cart, and proceed to checkout. You can pay securely through our platform, and your food will be delivered to you."
    },
    {
      question: "Do you offer contactless delivery?",
      answer: "Yes, we offer contactless delivery for your safety and convenience. You can choose the contactless option during checkout."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order is placed, you will receive real-time updates on its status, including when it is being prepared, when it's out for delivery, and when it arrives at your doorstep."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes, we regularly offer discounts, special promotions, and deals. Be sure to check our homepage for the latest offers or subscribe to our newsletter to stay updated."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within a certain timeframe after placing it. Please contact customer support for assistance with cancellations or modifications."
    },
    {
      question: "Is Crave Cart available in my area?",
      answer: "Crave Cart operates in various cities. Please enter your zip code on our website or app to check if we deliver to your location."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-[#212121] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#7A1523]">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#212121] shadow-lg rounded-lg transition-all duration-300 hover:scale-105 p-4"
          >
            <button
              className="w-full text-left p-5 text-lg font-medium text-orange-400 flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="text-yellow-400">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-5 text-white bg-[#7A1523] border-t border-yellow-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;*/
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is Crave Cart?", answer: "Crave Cart is an online food ordering platform where you can browse various restaurants, choose your favorite dishes, and have them delivered to your door." },
    { question: "How do I place an order?", answer: "Simply browse through our menu, select your items, add them to the cart, and proceed to checkout. You can pay securely through our platform, and your food will be delivered to you." },
    { question: "Do you offer contactless delivery?", answer: "Yes, we offer contactless delivery for your safety and convenience. You can choose the contactless option during checkout." },
    { question: "Can I track my order?", answer: "Absolutely! Once your order is placed, you will receive real-time updates on its status, including when it is being prepared, when it's out for delivery, and when it arrives at your doorstep." },
    { question: "Do you offer discounts or promotions?", answer: "Yes, we regularly offer discounts, special promotions, and deals. Be sure to check our homepage for the latest offers or subscribe to our newsletter to stay updated." },
    { question: "Can I cancel or modify my order?", answer: "You can cancel or modify your order within a certain timeframe after placing it. Please contact customer support for assistance with cancellations or modifications." },
    { question: "Is Crave Cart available in my area?", answer: "Crave Cart operates in various cities. Please enter your zip code on our website or app to check if we deliver to your location." }
  ];

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-[#212121] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#7A1523]">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#212121] shadow-lg rounded-lg p-4 transition-all duration-300 hover:scale-105">
            <button
              className="w-full text-left p-5 text-lg font-medium text-orange-400 flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="text-yellow-400">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-5 text-white bg-[#7A1523] border-t border-yellow-400">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

