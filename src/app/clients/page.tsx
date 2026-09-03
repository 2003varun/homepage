import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaQuoteLeft, FaStar, FaArrowRight, FaHandshake, FaAward } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Clients | Q-DAT IT Solutions',
  description:
    'Client testimonials, feedback, and success stories with Q-DAT IT Solutions data entry, ERP development, and QA testing services.',
};

const testimonials = [
  {
    quote:
      'Q-DAT Data Entry Service team has performed exceptionally high quality work under very tight deadlines. They were willing to meet all our requests for changing timelines. Additionally, Q-DAT worked with us at every step of the way to ensure top quality results and innovative concepts. We happily recommend Q-DAT Data Entry Services.',
    author: 'Senior Operations Director',
    company: 'Enterprise Software Partner',
    rating: 5,
  },
  {
    quote:
      'Working with Q-DAT on our catalog data migration and quality testing significantly cut our turnaround time. Their dedication to 99.9% data accuracy was evident from day one.',
    author: 'VP of Technology',
    company: 'Global E-Commerce Brand',
    rating: 5,
  },
  {
    quote:
      'The custom ERP tools and ongoing back-office support delivered by Q-DAT gave our internal team complete peace of mind. Highly professional and dependable.',
    author: 'Head of IT Infrastructure',
    company: 'Logistics & Supply Chain Group',
    rating: 5,
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* ================= CLIENTS HERO ================= */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="hero-tag">TESTIMONIALS & TRUST</span>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            Trusted by Enterprises <br />
            <span className="gradient-text">Across the Globe</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: '720px', margin: '0 auto 32px' }}>
            Read how Q-DAT IT Solutions helps partners optimize workflows, achieve flawless data
            integrity, and scale their tech operations.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary">
              <span>Partner with Us</span>
              <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS GRID ================= */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">CLIENT VOICES</span>
            <h2 className="section-title">
              What Our <span>Partners Say</span>
            </h2>
            <p className="section-desc">
              Long-term partnerships founded on trust, transparent communication, and consistent
              delivery excellence.
            </p>
          </div>

          <div className="services-grid">
            {testimonials.map((t, index) => (
              <div key={index} className="service-card featured-service">
                <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', marginBottom: '16px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '0.98rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '2px' }}>
                    {t.author}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500 }}>
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST HIGHLIGHTS ================= */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <span className="section-badge">WHY CLIENTS CHOOSE US</span>
              <h2 className="section-title">
                Building Enduring <span>Business Relationships</span>
              </h2>
              <p className="section-desc">
                We believe in acting as an extension of your own internal engineering and operations
                teams, maintaining strict data governance and rapid SLAs.
              </p>

              <div className="why-list">
                <div className="why-item">
                  <div className="why-icon">
                    <FaAward />
                  </div>
                  <div>
                    <h4>99.9% Quality Assurance</h4>
                    <p>Double-blind validation checks and automated anomaly detection.</p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon">
                    <FaHandshake />
                  </div>
                  <div>
                    <h4>Transparent Governance</h4>
                    <p>Daily progress dashboards, dedicated account managers, and milestone reporting.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image">
              <img src="/assets/client.jpg" alt="Client Collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="company-cta">
        <div className="container">
          <span className="company-badge">LET&apos;S TALK</span>
          <h2>Ready to Become Our Next Success Story?</h2>
          <p>
            Contact our engagement managers today to discuss how we can streamline your enterprise data
            and software projects.
          </p>
          <Link href="/contact" className="cta-btn">
            <span>Get Started</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
