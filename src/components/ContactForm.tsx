'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaCircleCheck, FaSpinner } from 'react-icons/fa6';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(
        error.message || 'Something went wrong. Please try again or email us directly at sales@q-dat.com.'
      );
    }
  };

  return (
    <div className="contact-form-box">
      {status === 'success' && (
        <div className="form-status success">
          <FaCircleCheck style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Thank you! Your message has been received. Our team will contact you within 1 business day.
        </div>
      )}

      {status === 'error' && (
        <div className="form-status error">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="e.g. Data Management Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your project requirements, scope, or timeline..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="send-btn"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <FaSpinner className="fa-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <FaPaperPlane />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
