import React, { useState, useEffect } from 'react';

const FAQSection = () => {
  const faqData = [
    { question: "What is Fraudbuster.xyz?", answer: "Fraudbuster.xyz is a platform dedicated to helping users check and report scams." },
    { question: "How can I report a scam?", answer: "You can report a scam by using the 'Report a Fraud?' button, filling in details about the incident." },
    { question: "How does the search feature work?", answer: "The search feature allows you to check if specific details like e-wallet IDs have been reported as scams." },
    { question: "What regions does Fraudbuster.xyz cover?", answer: "Fraudbuster.xyz covers a wide range of locations, allowing you to tailor your search by city or region." },
    { question: "Can I search for cryptocurrency scams?", answer: "Yes, you can search for scams related to e-wallets, cryptocurrency wallets, and traditional payment methods." },
    { question: "How can I contact customer support?", answer: "You can contact our support team through the 'Contact Us' page on the website." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [scale, setScale] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Scaling effect based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scaleValue = scrollY / 2100; // Adjust 2000 for a more/less dramatic effect
      if (scaleValue >=1)
        {
        setScale(1)
        }
        else
       setScale(scaleValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center mb-8 my-12 text-white text-left p-6"
      style={{ 
        height: '100vh',   // Full height of the viewport for centering
        width: '100vw'     // Full width of the viewport for centering
      }} 
    >
      <h1 className="font-inter font-bold text-4xl text-white text-center">
        Frequently Asked Questions (FAQ)
      </h1>
      <h3 className="font-inter font-normal text-2xl my-2 mb-8 text-center text-white">
        Find answers to common queries about Fraudbuster.xyz and how to make the most of our services.
      </h3>

      <div className="w-full max-w-screen-md mx-auto"
        style={{
                  transform: `scale(${scale})`, 
        }}>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <hr className="w-full border border-white" />
            <div
              className={`font-inter font-semibold text-2xl text-white cursor-pointer py-2 transition-colors duration-300 hover:text-[#CB122A] ${
                activeIndex === index ? 'text-[#CB122A]' : 'text-white'}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index} // Accessibility improvement
              role="button"
            >
              {faq.question}
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'h-auto translate-y-0 opacity-100' : 'h-0 translate-y-[-20px] opacity-0'
              }`}
            >
              <div className="font-inter text-xl font-normal text-white py-2 mb-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
        <hr className="w-full border border-white" />
      </div>
    </div>
  );
};

export default FAQSection;