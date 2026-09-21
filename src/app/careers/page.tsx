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
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hero Section */
        .careers-hero {
          position: relative;
          padding: 140px 20px 100px;
          background-color: #F4F7FC;
          color: #1E3A5F;
          overflow: hidden;
          text-align: center;
        }
        .careers-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: 
            radial-gradient(circle at 80% 20%, rgba(91, 146, 229, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(153, 204, 255, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #FFFFFF 0%, rgba(244, 247, 252, 0.5) 100%);
          z-index: 1;
        }
        .careers-hero::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(91, 146, 229, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 146, 229, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-tagline {
          display: inline-block;
          background: rgba(91, 146, 229, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(91, 146, 229, 0.2);
          color: #5B92E5;
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(91, 146, 229, 0.05);
        }
        .hero-title-main {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          font-family: var(--font-montserrat);
          color: #1E3A5F;
        }
        .hero-title-gradient {
          background: linear-gradient(to right, #1E3A5F, #5B92E5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #64748B;
          max-width: 700px;
          margin: 0 auto 40px;
        }
        
        /* Glass Cards */
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(225, 232, 242, 0.8);
          border-radius: 20px;
          padding: 36px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(30, 58, 95, 0.04);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .glass-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #5B92E5, #99CCFF);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .glass-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(91, 146, 229, 0.12);
          border-color: rgba(91, 146, 229, 0.25);
        }
        .glass-card:hover::before {
          opacity: 1;
        }

        /* Feature Cards */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }
        .feature-icon-wrapper {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(91,146,229,0.12) 0%, rgba(91,146,229,0.05) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5B92E5;
          font-size: 1.75rem;
          margin-bottom: 24px;
          border: 1px solid rgba(91,146,229,0.15);
          transition: transform 0.3s ease;
        }
        .glass-card:hover .feature-icon-wrapper {
          transform: scale(1.05);
        }
        .glass-card h3 {
          font-family: var(--font-montserrat);
          font-size: 1.3rem;
          color: #1E3A5F;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .glass-card p {
          color: #64748B;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* Job Cards */
        .job-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid #E1E8F2;
          border-radius: 20px;
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(30, 58, 95, 0.03);
          position: relative;
        }
        .job-card:hover {
          transform: translateY(-6px);
          border-color: rgba(91, 146, 229, 0.4);
          box-shadow: 0 20px 40px rgba(91, 146, 229, 0.12);
        }
        .job-card-content {
          flex: 1;
        }
        .job-tags {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .job-badge {
          background: rgba(91, 146, 229, 0.1);
          color: #5B92E5;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .job-type {
          font-size: 0.85rem;
          color: #64748B;
          font-weight: 500;
        }
        .job-title {
          font-size: 1.4rem;
          color: #1E3A5F;
          font-family: var(--font-montserrat);
          margin-bottom: 12px;
          font-weight: 700;
        }
        .job-desc {
          color: #64748B;
          font-size: 0.95rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .job-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748B;
          font-size: 0.9rem;
        }
        .job-meta-icon {
          color: #5B92E5;
        }

        /* Modern CTA */
        .modern-cta {
          margin-top: 80px;
          background: linear-gradient(135deg, #1E3A5F 0%, #5B92E5 100%);
          border-radius: 24px;
          padding: 70px 40px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(30, 58, 95, 0.25);
        }
        .modern-cta::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
          z-index: 1;
        }
        .cta-content {
          position: relative;
          z-index: 2;
        }
        .modern-cta h2 {
          font-size: 2.2rem;
          font-family: var(--font-montserrat);
          margin-bottom: 16px;
          font-weight: 800;
        }
        .modern-cta p {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        /* Buttons */
        .btn-modern {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 30px;
          background: #5B92E5;
          color: white;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          cursor: pointer;
        }
        .btn-modern:hover {
          background: #4373B8;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(91, 146, 229, 0.35);
        }
        .btn-modern-outline {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(91, 146, 229, 0.3);
          color: #5B92E5;
          backdrop-filter: blur(8px);
        }
        .btn-modern-outline:hover {
          background: #5B92E5;
          color: white;
          border-color: #5B92E5;
        }
        .btn-modern-white {
          background: white;
          color: #1E3A5F;
        }
        .btn-modern-white:hover {
          background: #F4F7FC;
          color: #1E3A5F;
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        /* Layout & Typography Additions */
        .section-padding {
          padding: 100px 0;
          position: relative;
        }
        .section-bg-light {
          background-color: #F4F7FC;
        }
        .section-title-modern {
          font-size: 2.5rem;
          color: #1E3A5F;
          font-family: var(--font-montserrat);
          font-weight: 800;
          margin-bottom: 16px;
          text-align: center;
        }
        .section-title-modern span {
          color: #5B92E5;
        }
        .section-desc-modern {
          text-align: center;
          color: #64748B;
          font-size: 1.15rem;
          max-width: 700px;
          margin: 0 auto 56px;
          line-height: 1.6;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-title-main { font-size: 2.2rem; }
          .job-card { flex-direction: column; align-items: flex-start; gap: 20px; }
          .btn-modern { width: 100%; }
          .section-padding { padding: 70px 0; }
        }
      `}} />

      {/* ================= CAREERS HERO ================= */}
      <section className="careers-hero">
        <div className="container hero-content">
          <span className="hero-tagline">Careers at Q-DAT</span>
          <h1 className="hero-title-main">
            Build Your Career <br />
            <span className="hero-title-gradient">With Technology Leaders</span>
          </h1>
          <p className="hero-subtitle">
            Join a collaborative culture dedicated to innovation, career growth, and delivering
            impactful enterprise IT solutions.
          </p>
          <div>
            <a href="#openings" className="btn-modern btn-modern-outline">
              <span>View Open Positions</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ================= PERKS & CULTURE ================= */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 className="section-title-modern">
            Why You&apos;ll Love <span>Working Here</span>
          </h2>
          <p className="section-desc-modern">
            We provide a supportive, inclusive, and learning-focused workplace with growth opportunities.
          </p>

          <div className="feature-grid">
            <div className="glass-card">
              <div className="feature-icon-wrapper">
                <FaGraduationCap />
              </div>
              <h3>Continuous Learning</h3>
              <p>Upskilling workshops, software certification sponsorships, and mentorship.</p>
            </div>

            <div className="glass-card">
              <div className="feature-icon-wrapper">
                <FaHeart />
              </div>
              <h3>Collaborative Culture</h3>
              <p>Work alongside experienced engineers and managers in an open, respectful environment.</p>
            </div>

            <div className="glass-card">
              <div className="feature-icon-wrapper">
                <FaClock />
              </div>
              <h3>Work-Life Balance</h3>
              <p>Structured shifts, transparent leave policies, and employee wellness initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="section-padding section-bg-light" id="openings">
        <div className="container">
          <h2 className="section-title-modern">
            Explore Available <span>Roles</span>
          </h2>
          <p className="section-desc-modern">
            Ready to take the next step in your career? Browse our open positions below.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {jobOpenings.map((job) => (
              <div key={job.title} className="job-card">
                <div className="job-card-content">
                  <div className="job-tags">
                    <span className="job-badge">{job.department}</span>
                    <span className="job-type">• {job.type}</span>
                  </div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-desc">{job.desc}</p>
                  <div className="job-meta">
                    <FaLocationDot className="job-meta-icon" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div>
                  <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=sales@q-dat.com&su=Job%20Application%20for%20${encodeURIComponent(job.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modern"
                  >
                    <span>Apply Now</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ================= GENERAL APPLICATION CTA ================= */}
          <div className="modern-cta">
            <div className="cta-content">
              <div style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                padding: '6px 16px',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '1px',
                marginBottom: '20px',
                textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                Don&apos;t see your role?
              </div>
              <h2>We Are Always Looking for Talented People</h2>
              <p>
                Send your resume and portfolio directly to our recruitment team at sales@q-dat.com.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@q-dat.com&su=General%20Job%20Application%20-%20Q-DAT%20IT%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern btn-modern-white"
              >
                <span>Submit Resume</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
