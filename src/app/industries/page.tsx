import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  FaCartShopping,
  FaHeartPulse,
  FaBuildingColumns,
  FaTruckFast,
  FaIndustry,
  FaGraduationCap,
  FaArrowRight,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Industries | Q-DAT IT Solutions',
  description:
    'Discover the diverse industry sectors empowered by Q-DAT IT Solutions including E-Commerce, Healthcare, Banking, Logistics, and Manufacturing.',
};

const industries = [
  {
    icon: FaIndustry,
    title: 'ERP & ITES Providers',
    desc: 'Empowering Independent Software Vendors (ISVs) and IT services companies with outsourced back-office operations, QA, and scalable ERP data systems.',
  },
  {
    icon: FaCartShopping,
    title: 'E-Commerce & Retail',
    desc: 'Product catalog indexing, price scraping, SKU entry, image tagging, and 24/7 transaction data processing for high-volume stores.',
  },
  {
    icon: FaHeartPulse,
    title: 'Healthcare & Lifesciences',
    desc: 'Strictly confidential patient records digitization, medical billing entry, prescription data indexing, and HIPAA-compliant data handling.',
  },
  {
    icon: FaBuildingColumns,
    title: 'Banking & Financial Services',
    desc: 'High-precision financial statement entry, KYC verification data processing, loan application validation, and invoice reconciliation.',
  },
  {
    icon: FaTruckFast,
    title: 'Supply Chain & Logistics',
    desc: 'Bill of lading data extraction, inventory management systems, shipping manifest logging, and automated tracking integrations.',
  },
  {
    icon: FaGraduationCap,
    title: 'Education & EdTech',
    desc: 'Student record management, digital examination form processing, archival scanning, and institutional portal development.',
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ================= INDUSTRIES HERO ================= */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="hero-tag">DOMAINS & VERTICALS</span>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            Tailored IT Solutions <br />
            <span className="gradient-text">Across Global Industries</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: '720px', margin: '0 auto 32px' }}>
            We bring deep domain expertise to help organizations in diverse vertical sectors solve
            data bottlenecks and automate operational processes.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary">
              <span>Discuss Your Industry Needs</span>
              <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY CARDS ================= */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">SECTORS WE EMPOWER</span>
            <h2 className="section-title">
              Proven Experience Across <span>Major Industries</span>
            </h2>
            <p className="section-desc">
              Whatever your industry requirements, our dedicated teams adapt to your compliance
              rules, security guidelines, and custom data workflows.
            </p>
          </div>

          <div className="services-grid">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="service-card">
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                  <Link href="/contact" className="service-link">
                    <span>Learn Industry Solutions</span>
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="company-cta">
        <div className="container">
          <span className="company-badge">SCALABLE ENGAGEMENT</span>
          <h2>Have Industry-Specific Compliance Requirements?</h2>
          <p>
            Our infrastructure and data security practices strictly adhere to NDAs, data protection
            laws, and SLA standards.
          </p>
          <Link href="/contact" className="cta-btn">
            <span>Contact Our Team</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
