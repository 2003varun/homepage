import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  FaKeyboard,
  FaDatabase,
  FaLaptopCode,
  FaCircleCheck,
  FaGlobe,
  FaServer,
  FaArrowRight,
  FaShieldHalved,
  FaCloudArrowUp,
  FaChartLine,
  FaHeadset,
  FaClipboardList,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Services | Q-DAT IT Solutions',
  description:
    'Comprehensive IT and Data services including Data Entry, Data Management, Custom ERP Application Development, QA Software Testing, Web Design, and Cloud Infrastructure.',
};

const servicesList = [
  {
    icon: FaKeyboard,
    title: 'Data Entry Services',
    badge: 'CORE SERVICE',
    featured: true,
    desc: 'Accurate, high-speed, and secure data entry services that empower businesses to handle high volumes of raw information without sacrificing quality or security.',
    features: ['Document Digitization', 'Online/Offline Data Entry', 'Catalog & Product Data Entry', 'Form Processing'],
  },
  {
    icon: FaDatabase,
    title: 'Data Management Services',
    badge: 'CORE SERVICE',
    featured: true,
    desc: 'End-to-end data management solutions designed to cleanse, validate, organize, and safeguard mission-critical business data repositories.',
    features: ['Data Cleansing & Scrubbing', 'Database Migration', 'Data Enrichment', 'Non-Voice Back-Office Operations'],
  },
  // {
  //   icon: FaLaptopCode,
  //   title: 'Application Development',
  //   badge: 'CUSTOM SOFTWARE',
  //   featured: false,
  //   desc: 'Custom enterprise software, ERP applications, and scalable backend systems tailored to simplify core business workflows.',
  //   features: ['Custom ERP Solutions', 'Enterprise Web Apps', 'RESTful API Engineering', 'Legacy Modernization'],
  // },
  {
    icon: FaCircleCheck,
    title: 'Quality Assurance & Testing',
    badge: 'RELIABILITY',
    featured: false,
    desc: 'Comprehensive automated and manual QA software testing methodologies to guarantee robust, bug-free, and high-performance applications.',
    features: ['Functional Testing', 'Performance & Load Testing', 'Security & Compliance Checks', 'Cross-Platform Testing'],
  },
  // {
  //   icon: FaGlobe,
  //   title: 'Web Designing & UI/UX',
  //   badge: 'CREATIVE',
  //   featured: false,
  //   desc: 'Aesthetic, responsive, and conversion-optimized websites and digital experiences built to elevate brand prestige and client engagement.',
  //   features: ['Responsive UI/UX Design', 'Corporate Portals', 'E-Commerce Platforms', 'Conversion Rate Optimization'],
  // },
  {
    icon: FaServer,
    title: 'IT Infrastructure & Cloud',
    badge: 'INFRASTRUCTURE',
    featured: false,
    desc: 'Dependable IT infrastructure setup, cloud migration, server management, and continuous network monitoring.',
    features: ['Cloud Setup & Management', 'IT Security & Backups', 'Virtualization Solutions', '24/7 SLA Technical Support'],
  },
  {
    icon: FaHeadset,
    title: 'Application support activities',
    badge: 'SUPPORT',
    featured: false,
    desc: 'Reliable application support to keep business systems running smoothly through continuous monitoring, troubleshooting, maintenance, and timely issue resolution.',
    features: ['Application Monitoring & Support', 'Issue Troubleshooting & Resolution', 'System Maintenance & Updates', 'User & Technical Assistance'],
  },
  {
    icon: FaClipboardList,
    title: 'Back Office Activities',
    badge: 'BACK OFFICE',
    featured: false,
    desc: 'Efficient back-office support covering data management, document processing, order administration, reconciliation, and day-to-day business operations.',
    features: ['Data Entry & Management', 'Document & Order Processing', 'Invoice & PO Reconciliation', 'Administrative Support'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ================= SERVICES HERO ================= */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="hero-tag">ENTERPRISE SOLUTIONS</span>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            Technology &amp; Business <br />
            <span className="gradient-text">Service Offerings</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: '720px', margin: '0 auto 32px' }}>
            From high-accuracy data entry to enterprise application development and cloud
            infrastructure, discover how Q-DAT scales your operational efficiency.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            {/* <Link href="/contact" className="btn-primary">
              <span>Request a Quote</span>
              <FaArrowRight size={13} />
            </Link> */}
          </div>
        </div>
      </section>

      {/* ================= SERVICES CATALOG ================= */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">WHAT WE OFFER</span>
            <h2 className="section-title">
              Comprehensive <span>IT Services</span>
            </h2>
            <p className="section-desc">
              Every service is engineered to deliver quantifiable value, maximum accuracy, and
              rock-solid security.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`service-card ${service.featured ? 'featured-service' : ''}`}
                >
                  <span className="service-badge-pill">{service.badge}</span>
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>

                  <ul style={{ margin: '14px 0 24px', padding: 0 }}>
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.88rem',
                          color: 'var(--text-muted)',
                          marginBottom: '8px',
                        }}
                      >
                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="service-link">
                    <span>Consult Our Experts</span>
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
          <span className="company-badge">CUSTOM REQUIREMENTS?</span>
          <h2>Need a Tailored IT &amp; Data Solution?</h2>
          <p>
            Our solution architects will work closely with you to design a custom delivery model that
            fits your exact specifications and budget.
          </p>
          <Link href="/contact" className="cta-btn">
            <span>Talk to an Architect</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
