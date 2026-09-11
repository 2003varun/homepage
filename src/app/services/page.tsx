import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  FaArrowRight,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Services | Q-DAT IT Solutions',
  description:
    'Comprehensive IT and Data services including Data Entry, Data Management, Custom ERP Application Development, QA Software Testing, Web Design, and Cloud Infrastructure.',
};

const servicesList = [
  // {
  //   title: 'Data Entry Services',
  //   badge: 'CORE SERVICE',
  //   image: '/images/testimonials/support.jpg',
  //   desc: 'Accurate, high-speed, and secure data entry services that empower businesses to handle high volumes of raw information without sacrificing quality or security.',
  //   features: ['Document Digitization', 'Online/Offline Data Entry', 'Catalog & Product Data Entry', 'Form Processing'],
  // },
  // {
  //   title: 'Data Management Services',
  //   badge: 'CORE SERVICE',
  //   image: '/images/testimonials/data.jpg',
  //   desc: 'End-to-end data management solutions designed to cleanse, validate, organize, and safeguard mission-critical business data repositories.',
  //   features: ['Data Cleansing & Scrubbing', 'Database Migration', 'Data Enrichment', 'Non-Voice Back-Office Operations'],
  // },
  {
    title: 'Quality Assurance & Testing',
    badge: 'RELIABILITY',
    image: '/images/testimonials/testing.png',
    desc: 'Comprehensive automated and manual QA software testing methodologies to guarantee robust, bug-free, and high-performance applications.',
    features: ['Functional Testing', 'Performance & Load Testing', 'Security & Compliance Checks', 'Cross-Platform Testing'],
  },
  // {
  //   title: 'IT Infrastructure & Cloud',
  //   badge: 'INFRASTRUCTURE',
  //   image: '/images/testimonials/digital-transformation.jpg',
  //   desc: 'Dependable IT infrastructure setup, cloud migration, server management, and continuous network monitoring.',
  //   features: ['Cloud Setup & Management', 'IT Security & Backups', 'Virtualization Solutions', '24/7 SLA Technical Support'],
  // },
  {
    title: 'Application Support Activities',
    badge: 'SUPPORT',
    image: '/images/testimonials/support.png',
    desc: 'Reliable application support to keep business systems running smoothly through continuous monitoring, troubleshooting, maintenance, and timely issue resolution.',
    features: ['Application Monitoring & Support', 'Issue Troubleshooting & Resolution', 'System Maintenance & Updates', 'User & Technical Assistance'],
  },
  {
    title: 'Back Office Activities',
    badge: 'BACK OFFICE',
    image: '/images/testimonials/e-commerce.png',
    desc: 'Efficient back-office support covering data management, document processing, order administration, reconciliation, and day-to-day business operations.',
    features: ['Data Entry & Management', 'Document & Order Processing', 'Invoice & PO Reconciliation', 'Administrative Support'],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* ================= SERVICES HERO ================= */}
      <section className="services-hero">
        <div className="container">
          <span className="services-badge">OUR SERVICES</span>
          <h1 className="services-title">
            Smart Services for Modern Businesses
          </h1>
          <p className="services-desc">
            Technology that moves your business forward. We provide reliable IT, data, and operational support designed to scale your efficiency and empower your enterprise.
          </p>
        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="services-list-container">
        <div className="container">
          {servicesList.map((service, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div key={service.title} className={`service-section ${isReverse ? 'reverse' : ''}`}>
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>

                <div className="service-content">
                  <span className="service-section-badge">{service.badge}</span>
                  <h2 className="service-section-title">{service.title}</h2>
                  <p className="service-section-desc">{service.desc}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feat) => (
                      <li key={feat}>
                        <span className="bullet">•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="service-action">
                    <span>Explore Service</span>
                    <FaArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
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
    </div>
  );
}
