// import React from 'react';

"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaShieldHalved,
  FaDatabase,
  FaCode,
  FaQuoteLeft,
  FaCheck,
  FaHeadset
} from 'react-icons/fa6';
import ProcessSection from '@/components/ProcessSection';
      const heroServices = [
  {
    title: "Data Entry",
    description: "Accurate and reliable data entry services for your business.",
    icon: "▣",
  },
  {
    title: "Data Management",
    description: "Organize, maintain and manage your business data efficiently.",
    icon: "▤",
  },
  // {
  //   title: "Web Applications",
  //   description: "Custom web applications tailored to your business needs.",
  //   icon: "</>",
  // },
  // {
  //   title: "Cloud Infrastructure",
  //   description: "Secure, scalable and flexible cloud solutions for your future.",
  //   icon: "☁",
  // },
  {
    title: "Testing",
    description: "Ensure accuracy, consistency and high-quality output.",
    icon: "✓",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with smart digital solutions.",
    icon: "↗",
  },
];
export default function HomePage() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-tag">
              <FaShieldHalved /> Empowering Businesses Worldwide
            </span>

            <h1 className="hero-title">
              Smart Solutions <br />
              <span className="gradient-text">For Modern Enterprises</span>
            </h1>

            <p className="hero-desc">
              Accelerate your growth with comprehensive Data Entry services, Enterprise Data
              Management, custom web applications, robust cloud infrastructure, quality assurance,
              and end-to-end digital transformation.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                <span>Contact Us</span>
                <FaArrowRight size={14} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

      <div className="hero-image-wrapper">

  <div className="hero-services-carousel">

    <div className="hero-services-track marquee-track">
      {[...heroServices, ...heroServices].map((service, index) => (
        <div
          key={`${service.title}-${index}`}
          className="hero-service-card"
        >
          <div className="hero-service-icon">
            {service.icon}
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {/* <Link href="/services" className="hero-service-link">
            Learn More <FaArrowRight size={11} />
          </Link> */}
        </div>
      ))}
    </div>


  </div>
</div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Accuracy Guarantee</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Enterprise Deliveries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Industry Trust</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Dedicated Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT / VALUE PROPOSITIONS ================= */}
      <section className="about-section">
        <div className="container">
          {/* Card 1: Company Overview */}
          <div className="about-row">
            <div className="about-content">
              <h2>Company Overview</h2>
              <p>
                With Q-DAT Data Entry Services, managing your business data will be much easier!
                Our comprehensive service offerings ensure measurable value addition to your business
                growth. In addition to providing Enterprise Application Development Solutions, we
                offer services in QA (software testing), KPO, Web Designing, IT Infrastructure, and
                Data Management for e-commerce portals and non-voice back-office operations.
              </p>
              <Link href="/company" className="about-btn">
                <span>Learn More About Us</span>
                <FaArrowRight size={13} />
              </Link>
            </div>

            <div className="about-image">
              <img src="/assets/building.jpg" alt="Enterprise Software Development" />
            </div>
          </div>

          {/* Card 2: Why Us */}
          <div className="about-row reverse">
            <div className="about-content">
              <h2>Why Choose Q-DAT</h2>
              <p>
                Whether your interests lie in Data Entry Services, Enterprise Data Management,
                Application Development, or Quality Assurance, Q-DAT offers dedicated outsourced IT
                services to create sustainable business value for leading IT services providers,
                Independent Software Vendors (ISVs), and corporate end-users worldwide.
              </p>
              <Link href="/company#why-us" className="about-btn">
                <span>Discover Our Values</span>
                <FaArrowRight size={13} />
              </Link>
            </div>

            <div className="about-image">
              <img src="/assets/us.jpg" alt="Dedicated Q-DAT Team" />
            </div>
          </div>

          {/* Card 3: Services */}
          <div className="about-row">
            <div className="about-content">
              <h2>Our Core Capabilities</h2>
              <p>
                With strong domain expertise in ERP and the ITES industry, Q-DAT provides Data Entry
                Services, Custom ERP Solutions, and IT Infrastructure powered by cutting-edge
                technologies. We partner with small and medium organizations for day-to-day
                operational efficiency to guarantee timely and accurate deliveries to their clients.
              </p>
              <Link href="/services" className="about-btn">
                <span>Explore All Services</span>
                <FaArrowRight size={13} />
              </Link>
            </div>

            <div className="about-image">
              <img src="/assets/services.jpg" alt="High Quality Technology Services" />
            </div>
          </div>

          {/* Card 4: Client Speak */}
          <div className="about-row reverse">
            <div className="about-content">
              <h2>Client Testimonial</h2>
              <p style={{ fontStyle: 'italic', position: 'relative' }}>
                <FaQuoteLeft style={{ color: 'var(--primary)', opacity: 0.3, marginRight: '8px' }} />
                “Q-DAT Data Entry Service team has performed exceptionally high-quality work under
                very tight deadlines. They were willing to meet all our requests for changing
                timelines. Additionally, Q-DAT worked with us at every step of the way to ensure top
                results and innovative concepts. We happily recommend Q-DAT IT Solutions.”
              </p>
              <Link href="/clients" className="about-btn">
                <span>Read More Testimonials</span>
                <FaArrowRight size={13} />
              </Link>
            </div>

            <div className="about-image">
              <img src="/assets/client.jpg" alt="Satisfied Global Clients" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5-STEP DELIVERY PROCESS ================= */}
      <ProcessSection />

      {/* ================= CALL TO ACTION ================= */}
      <section className="company-cta">
        <div className="container">
          <span className="company-badge">READY TO ACCELERATE?</span>
          <h2>Ready to Transform Your Business Operations?</h2>
          <p>
            Connect with our team of IT specialists to discuss your data entry, software
            development, or cloud infrastructure requirements today.
          </p>
          <Link href="/contact" className="cta-btn">
            <span>Get in Touch with Us</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
