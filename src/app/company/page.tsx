import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  FaDatabase,
  FaCode,
  FaCheck,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
  FaKeyboard,
  FaLaptopCode,
  FaCircleCheck,
  FaGlobe,
  FaServer,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Company | Q-DAT IT Solutions',
  description:
    'Learn about Q-DAT IT Solutions, our history, core values, leadership, and dedicated technology support services.',
};

export default function CompanyPage() {
  return (
    <>
      {/* ================= COMPANY HERO ================= */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="hero-tag">ABOUT Q-DAT</span>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            Driving Business Growth <br />
            <span className="gradient-text">Through Technology</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: '720px', margin: '0 auto 32px' }}>
           Delivering smart IT, data, and digital solutions that help businesses work smarter, scale faster, and achieve better results.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="#about" className="btn-primary">
              <span>Discover Q-DAT</span>
              <FaArrowRight size={13} />
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">WHO WE ARE</span>
            <h2 className="section-title">
              Simplifying Business Through <span>Technology</span>
            </h2>
            <p className="section-desc">
              Q-DAT IT Solutions provides specialized technology and business support services designed
              to add measurable value to growing organizations across the globe.
            </p>
          </div>

          <div className="about-row">
            <div className="about-content">
              <h2>Empowering Enterprises</h2>
              <p>
                With Q-DAT Data Entry Services, managing your business can be much easier. Our
                service offerings are designed to ensure consistent value addition to business growth.
              </p>
              <p>
                In addition to Enterprise Application Development Solutions, Q-DAT provides services
                in QA and software testing, KPO, Web Designing, IT Infrastructure, and Data Management
                for e-commerce portals and back-office operations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '28px' }}>
                <div style={{ background: 'var(--bg-alt)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '8px' }}>
                    <FaDatabase />
                  </div>
                  <h4 style={{ fontWeight: 700, marginBottom: '6px' }}>Data Management</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                    Reliable data entry & validation for smooth operations.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-alt)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '8px' }}>
                    <FaKeyboard />
                  </div>
                  <h4 style={{ fontWeight: 700, marginBottom: '6px' }}>Data entry</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                    Fast, accurate, and secure data entry services.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src="/assets/building.jpg" alt="Q-DAT Corporate Office" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY Q-DAT ================= */}
      <section className="why-section" id="why-us">
        <div className="container">
          <div className="why-grid">
            <div className="why-image">
              <img src="/assets/us.jpg" alt="Q-DAT High Performance Team" />
            </div>

            <div className="why-content">
              <span className="section-badge">WHY Q-DAT</span>
              <h2 className="section-title">
                A Reliable Technology <span>Partner</span>
              </h2>
              <p className="section-desc">
                Q-DAT offers dedicated outsourced IT services focused on creating sustainable business
                value for organizations across diverse verticals.
              </p>

              <div className="why-list">
                <div className="why-item">
                  <div className="why-icon">
                    <FaCheck />
                  </div>
                  <div>
                    <h4>Quality Focused</h4>
                    <p>
                      Rigorous multi-layer verification mechanisms that guarantee exceptional
                      precision, security, and service delivery consistency.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon">
                    <FaUsers />
                  </div>
                  <div>
                    <h4>Client Focused</h4>
                    <p>
                      Tailored solutions structured around unique organizational requirements,
                      timelines, and long-term business objectives.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon">
                    <FaLightbulb />
                  </div>
                  <div>
                    <h4>Innovative Approach</h4>
                    <p>
                      Modern technology stacks and automated processes that streamline workflows and
                      minimize operational overhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="company-cta">
        <div className="container">
          <span className="company-badge">LET&apos;S WORK TOGETHER</span>
          <h2>Ready to Take Your Business to the Next Level?</h2>
          <p>
            Let&apos;s discuss how Q-DAT IT Solutions can support your operations with dependable data
            services and bespoke technology.
          </p>
          <Link href="/contact" className="cta-btn">
            <span>Get in Touch</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
