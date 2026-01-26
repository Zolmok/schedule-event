import PropTypes from 'prop-types';
import React from 'react';

import './contact-form.css';

function ContactForm({ formData, onFieldChange }) {
  return (
    <div>
      <p className="info-heading">Enter your information</p>
      <p className="heading">Personal Information</p>
      <div className="form-group">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="Please enter your full name"
          value={formData.name}
          onChange={(e) => onFieldChange('name', e.target.value)}
          maxLength={100}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your e-mail address</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your e-mail address"
          value={formData.email}
          onChange={(e) => onFieldChange('email', e.target.value)}
          pattern="[^@]+@[^@]+\.[^@]+"
          maxLength={254}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          placeholder="Please enter your phone number"
          value={formData.phone}
          onChange={(e) => onFieldChange('phone', e.target.value)}
          maxLength={20}
          required
        />
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default ContactForm;
