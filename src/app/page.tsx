// import React from 'react';

"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaShieldHalved,
  FaDatabase,
  FaServer,
  FaArrowsRotate,
  FaQuoteLeft,
  FaCheck,
  FaHeadset,
  FaGlobe,
  FaCartShopping
} from 'react-icons/fa6';
import ProcessSection from '@/components/ProcessSection';
const heroServices = [
  {
    title: "Data Entry",
    icon: <FaDatabase />,
  },
  {
    title: "Data Management",
    icon: <FaServer />,
  },
  {
    title: "Web Applications",
    icon: <FaGlobe />,
  },
  {
    title: "Testing",
    icon: <FaShieldHalved />,
  },
  {
    title: "Digital Transformation",
    icon: <FaArrowsRotate />,
  },
  {
    title: "E-commerce Support",
    icon: <FaCartShopping />,
  },
];
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    {
      src: '/images/testimonials/support.png',
      title: 'E-Commerce',
      text: 'Product catalog management, SKU updates, inventory mapping',
      // meta: '99.9% Accuracy Guarantee'
    },
    {
      src: '/images/testimonials/e-commerce.png',
      title: 'Finance & Admin',
      text: 'Invoice processing, title searches, receipt indexing',
      // meta: '24/7 Operations'
    },
    {
      src: '/images/testimonials/testing.png',
      title: 'CRM Maintenance',
      text: 'Data cleansing, deduplication, and verification',
      // meta: 'End-to-End QA'
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        {/* Background glow */}
        <div className="hero-bg-glow hero-bg-glow-1"></div>
        <div className="hero-bg-glow hero-bg-glow-2"></div>
        <div className="hero-bg-circle hero-bg-circle-1"></div>
        <div className="hero-bg-circle hero-bg-circle-2"></div>

        <div className="hero-container">

          {/* LEFT SIDE */}
          <div className="hero-content">

            {/* <div className="hero-badge">
              <span className="badge-icon">◈</span>
              Your Trusted IT Partner
            </div> */}

            <h1>
              <span className="heading-dark">Smart Solutions</span>
              <span className="heading-blue">For Modern Enterprises</span>
            </h1>

            <p>
              Accelerate growth with Data Entry, Data Management,
              Web Applications, QA, and Digital Transformation.
            </p>

            <div className="hero-buttons">

              <Link href="/contact" className="hero-btn hero-btn-primary">
                <span>Contact Us</span>
                <span className="arrow">→</span>
              </Link>

              <Link href="/services" className="hero-btn hero-btn-outline">
                <span>Explore Services</span>
                <span className="arrow">→</span>
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hero-visual">

            {/* 3-CARD CROSSFADE REPLACEMENT */}
            <div style={{ 
              position: 'relative',
              width: '100%',
              maxWidth: '550px',
              margin: '20px auto',
              aspectRatio: '4/3', // Forces a consistent size container
              borderRadius: '24px', 
              boxShadow: '0 25px 50px rgba(91,146,229,0.15)', 
              border: '2px solid rgba(91,146,229,0.2)',
              backgroundColor: '#ffffff',
              overflow: 'hidden'
            }}>
              {heroImages.map((slide, index) => (
                <div 
                  key={index}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    zIndex: currentSlide === index ? 1 : 0
                  }} 
                >
                  {/* IMAGE AREA (75%) */}
                  <div style={{ height: '75%', width: '100%', overflow: 'hidden' }}>
                    <img 
                      src={slide.src} 
                      alt={slide.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }} 
                    />
                  </div>
                  
                  {/* CONTENT AREA (25%) */}
                  <div style={{
                    height: '25%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '12px 24px',
                    textAlign: 'left'
                  }}>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#1e3a5f'
                    }}>
                      {slide.title}
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#5f6f82',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {slide.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ORBITAL SYSTEM (Commented out per request) 
            <div className="orbital-system">

              <div className="orbital-glow"></div>

              <div className="orbit-ring orbit-ring-outer"></div>
              <div className="orbit-ring orbit-ring-middle"></div>
              <div className="orbit-ring orbit-ring-inner"></div>

              <div className="service-orbit">

                <div className="service-node node-1">
                  <div className="service-icon blue">
                    <span>▤</span>
                  </div>
                  <div className="service-name">
                    Data<br/>Entry
                  </div>
                </div>

                <div className="service-node node-2">
                  <div className="service-icon purple">
                    <span>◫</span>
                  </div>
                  <div className="service-name">
                    Data<br/>Processing
                  </div>
                </div>

                <div className="service-node node-3">
                  <div className="service-icon green">
                    <span>☁</span>
                  </div>
                  <div className="service-name">
                    Web<br/>Applications
                  </div>
                </div>

                <div className="service-node node-4">
                  <div className="service-icon violet">
                    <span>♢</span>
                  </div>
                  <div className="service-name">
                    Testing
                  </div>
                </div>

                <div className="service-node node-5">
                  <div className="service-icon orange">
                    <span>⚙</span>
                  </div>
                  <div className="service-name">
                    Digitalization
                  </div>
                </div>

                <div className="service-node node-6">
                  <div className="service-icon purple">
                    <span>🛒</span>
                  </div>
                  <div className="service-name">
                    E-commerce<br/>Support
                  </div>
                </div>

              </div>

              <div className="orbital-center">

                <div className="center-ring"></div>

                <div className="logo-holder">
                  <img
                    src="/assets/final-logo.png"
                    alt="Q-DAT IT Solutions"
                  />
                </div>

              </div>

            </div>
            */}

          </div>

        </div>

      </section>

      {/* ================= STATS BAR ================= */}
      {/* <section className="stats-section">
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
      </section> */}

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
              <Link href="/company" className="hero-btn hero-btn-primary">
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
              <Link href="/company#why-us" className="hero-btn hero-btn-primary">
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
              <Link href="/services" className="hero-btn hero-btn-primary">
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
              <Link href="/clients" className="hero-btn hero-btn-primary">
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
