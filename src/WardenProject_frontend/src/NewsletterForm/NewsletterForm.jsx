import React, { useState } from 'react';
import './NewsletterForm.scss';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className="newsletter-form">
      <div className="newsletter-form-header">
        <h3 className="newsletter-title">Subscribe to our Newsletter</h3>
        <p className="newsletter-description">
          Get weekly updates on the latest in remote sensing and AI analytics.
        </p>
      </div>
      <form className="newsletter-form-body" onSubmit={handleSubmit}>
        <input
          className="newsletter-input"
          type="email"
          placeholder="Your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button className="newsletter-button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
