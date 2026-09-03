import React from 'react';
import Link from 'next/link';
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaChevronRight
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-content">
        {/* Company Overview */}
        <div className="footer-section">
          <img src="/assets/logo.png" alt="Q-DAT IT Solutions Logo" className="footer-logo" />
          <h3 className="footer-title">Q-DAT IT SOLUTIONS</h3>
          <p className="footer-desc">
            Delivering industry-leading Data Entry Services, Enterprise Data Management,
            Custom ERP Development, Quality Assurance, and digital transformation solutions.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="https://www.facebook.com/people/Q-DAT-IT-Solutions-Pvt-Ltd/100063563751706/#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/q-dat-it-solutions-737060105/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="social-icon-btn"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link href="/">
                <FaChevronRight size={12} /> Home
              </Link>
            </li>
            <li>
              <Link href="/company">
                <FaChevronRight size={12} /> Company
              </Link>
            </li>
            <li>
              <Link href="/services">
                <FaChevronRight size={12} /> Services
              </Link>
            </li>
            <li>
              <Link href="/industries">
                <FaChevronRight size={12} /> Industries
              </Link>
            </li>
            <li>
              <Link href="/clients">
                <FaChevronRight size={12} /> Clients
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <FaChevronRight size={12} /> Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Core Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li>
              <Link href="/services">
                <FaChevronRight size={12} /> Data Entry Services
              </Link>
            </li>
            <li>
              <Link href="/services">
                <FaChevronRight size={12} /> Data Management
              </Link>
            </li>
            <li>
              <Link href="/services">
                <FaChevronRight size={12} /> ERP & Applications
              </Link>
            </li>
            <li>
              <Link href="/services">
                <FaChevronRight size={12} /> QA & Testing
              </Link>
            </li>
            <li>
              <Link href="/services">
                <FaChevronRight size={12} /> Web Design & Dev
              </Link>
            </li>
            <li>
              <Link href="/services">
                <FaChevronRight size={12} /> IT Infrastructure
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <FaLocationDot size={18} />
            <span>
              109/7, 3rd Floor, 20th Main Road, 5th Block, West of Chord Road, Rajajinagar,
              Bangalore, Karnataka 560010
            </span>
          </div>
          <div className="footer-contact-item">
            <FaPhone size={16} />
            <div>
              <strong>General:</strong> +91 80-42123783
            </div>
          </div>
          <div className="footer-contact-item">
            <FaPhone size={16} />
            <div>
              <strong>Sales:</strong> +91-8904090015
            </div>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope size={16} />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@q-dat.com&su=Enquiry%20from%20Q-DAT%20IT%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              sales@q-dat.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Q-DAT IT SOLUTIONS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
