import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  FaBriefcase,
  FaHeart,
  FaGraduationCap,
  FaClock,
  FaArrowRight,
  FaLocationDot,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Careers | Q-DAT IT Solutions',
  description:
    'Join our dynamic team at Q-DAT IT Solutions. Explore current job openings in data management, software engineering, and QA.',
};

const jobOpenings = [
  {
    title: 'Senior Data Entry & Validation Specialist',
    department: 'Data Operations',
    location: 'Bangalore, India (On-site)',
    type: 'Full Time',
    desc: 'Seeking meticulous professionals with 2+ years experience in large-scale catalog data processing, quality auditing, and spreadsheet automation.',
  },
  {
    title: 'Full Stack Web Developer (Next.js / Node.js)',
    department: 'Software Engineering',
    location: 'Bangalore, India (Hybrid)',
    type: 'Full Time',
    desc: 'Design and implement high-performance web applications and ERP interfaces for enterprise clients.',
  },
  {
    title: 'QA Software Testing Engineer',
    department: 'Quality Assurance',
    location: 'Bangalore, India (On-site)',
    type: 'Full Time',
    desc: 'Execute functional, regression, and automated test suites to ensure zero-defect software deliverables.',
  },
  {
    title: 'IT Systems & Network Administrator',
    department: 'IT Infrastructure',
    location: 'Bangalore, India (On-site)',
    type: 'Full Time',
    desc: 'Manage internal network infrastructure, cloud backups, firewalls, and workstation provisioning.',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ================= CAREERS HERO ================= */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="hero-tag">CAREERS AT Q-DAT</span>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            Build Your Career <br />
            <span className="gradient-text">With Technology Leaders</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: '720px', margin: '0 auto 32px' }}>
            Join a collaborative culture dedicated to innovation, career growth, and delivering
            impactful enterprise IT solutions.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="#openings" className="btn-primary">
              <span>View Open Positions</span>
              <FaArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= PERKS & CULTURE ================= */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">LIFE AT Q-DAT</span>
            <h2 className="section-title">
              Why You&apos;ll Love <span>Working Here</span>
            </h2>
            <p className="section-desc">
              We provide a supportive, inclusive, and learning-focused workplace with growth opportunities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginBottom: '60px' }}>
            <div className="service-card">
              <div className="service-icon">
                <FaGraduationCap />
              </div>
              <h3>Continuous Learning</h3>
              <p>Upskilling workshops, software certification sponsorships, and mentorship.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaHeart />
              </div>
              <h3>Collaborative Culture</h3>
              <p>Work alongside experienced engineers and managers in an open, respectful environment.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaClock />
              </div>
              <h3>Work-Life Balance</h3>
              <p>Structured shifts, transparent leave policies, and employee wellness initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="services-section" id="openings">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">CURRENT OPENINGS</span>
            <h2 className="section-title">
              Explore Available <span>Roles</span>
            </h2>
            <p className="section-desc">
              Ready to take the next step in your career? Browse our open positions below.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {jobOpenings.map((job) => (
              <div
                key={job.title}
                className="service-card"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                }}
              >
                <div style={{ flex: '1', minWidth: '280px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="service-badge-pill" style={{ position: 'static' }}>
                      {job.department}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      • {job.type}
                    </span>
                  </div>
                  <h3 style={{ marginBottom: '8px' }}>{job.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.92rem' }}>{job.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <FaLocationDot style={{ color: 'var(--primary)' }} />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div>
                  <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=sales@q-dat.com&su=Job%20Application%20for%20${encodeURIComponent(job.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <span>Apply Now</span>
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GENERAL APPLICATION CTA ================= */}
      <section className="company-cta">
        <div className="container">
          <span className="company-badge">DON&apos;T SEE YOUR ROLE?</span>
          <h2>We Are Always Looking for Talented People</h2>
          <p>
            Send your resume and portfolio directly to our recruitment team at sales@q-dat.com.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@q-dat.com&su=General%20Job%20Application%20-%20Q-DAT%20IT%20Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            <span>Submit Resume</span>
            <FaArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}
