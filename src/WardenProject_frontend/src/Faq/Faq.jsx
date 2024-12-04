import React, { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How does Warden help my company save time and resources?",
      answer:
        "Warden simplifies the process of acquiring, processing, and analyzing satellite imagery by providing pre-processed, insight-ready analytics through a single API. This eliminates the need for specialized personnel and costly infrastructure, allowing your team to focus on innovation instead of logistics.",
    },
    {
      question: "Who can benefit from Warden’s platform?",
      answer: "Organizations and industries that require satellite imagery for analysis and insights.",
    },
    {
      question: "How do you ensure accuracy in your imagery analysis?",
      answer: "We use advanced algorithms and machine learning models to deliver precise results.",
    },
    {
      question: "Can I customize the analytics for specific use cases?",
      answer: "Yes, we provide customization options tailored to your needs and goals.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently asked questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <span className="icon">{activeIndex === index ? "✖" : "▼"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
