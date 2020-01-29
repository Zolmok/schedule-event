import React from 'react';

function ContactForm(props) {
  return (
    <div>
      <p className="info-heading">Enter your information</p>
      <p className="heading">Personal Information</p>
      <div className="form-group">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" placeholder="Please enter your full name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your e-mail address</label>
        <input type="email" id="email" placeholder="Please enter your e-mail address" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input type="phone" id="phone" placeholder="Please enter your phone number" />
      </div>
    </div>
  );  
}

export default ContactForm;
