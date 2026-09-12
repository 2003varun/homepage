"use client";

import React, { useState, useEffect } from 'react';

type Testimonial = {
  name: string;
  quote: string;
  author: string;
  company: string;
  rating: number;
  image: string;
};

export default function TestimonialsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTestimonial(null);
    };

    if (selectedTestimonial) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTestimonial]);

  const closeModal = () => setSelectedTestimonial(null);

  return (
    <>
      <div className="services-grid testimonials-grid">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              className="testimonial-card"
              key={index}
              onClick={() => setSelectedTestimonial(testimonial)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedTestimonial(testimonial);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {/* TOP */}
              <div className="testimonial-top">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
              </div>

              {/* AUTHOR */}
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
              </div>

              {/* QUOTE */}
              <p className="testimonial-quote">"{testimonial.quote}"</p>

              {/* READ MORE BUTTON (Visual Only) */}
              <div className="testimonial-read-more">
                Read More
              </div>
            </div>
          );
        })}
      </div>

      {selectedTestimonial && (
        <div className="testimonial-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="testimonial-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="testimonial-modal-close" onClick={closeModal} aria-label="Close">
              &times;
            </button>
            <div className="testimonial-modal-top">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="testimonial-modal-image"
              />
              <div className="testimonial-modal-author">
                <strong>{selectedTestimonial.name}</strong>
              </div>
            </div>
            <p className="testimonial-modal-quote">"{selectedTestimonial.quote}"</p>
          </div>
        </div>
      )}
    </>
  );
}
