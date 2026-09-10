"use client";

import React, { useState } from 'react';

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
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <div className="services-grid testimonials-grid">
      {testimonials.map((testimonial, index) => {
        const isExpanded = expandedIndices.includes(index);

        return (
          <div
            className={`testimonial-card ${isExpanded ? 'expanded' : ''}`}
            key={index}
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

            {/* Read MORE BUTTON */}
            <button
              className="testimonial-see-more"
              onClick={() => toggleExpand(index)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
