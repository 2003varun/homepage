import React from 'react';
import type { Metadata } from 'next';
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaMapLocationDot,
  FaArrowRight,
} from 'react-icons/fa6';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Q-DAT IT Solutions',
  description:
    'Contact Q-DAT IT Solutions in Bangalore, India for inquiries regarding Data Entry services, Enterprise Data Management, Application Development, or QA testing.',
};

export default function ContactPage() {
  const mapUrl =
    'https://www.google.com/maps/dir//Q-Dat+-+Data+Entry+Services+in+Bangalore,+India,+109%2F7,+3rd+Floor,+20th+Main+Road,+5th+Block,+West+Of+Chord+Road,+Rajajinagar,+Bengaluru,+Karnataka+560010/@12.9989714,77.5504773,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bae3d926565f18d:0x13812f7bc65c0cf7!2m2!1d77.549987!2d12.987216?entry=ttu';

  return (
    <>
      {/* ================= CONTACT HERO ================= */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-alt" />
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="hero-tag">CONTACT Q-DAT</span>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            Let&apos;s Build Something <br />
            <span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: '720px', margin: '0 auto 32px' }}>
            Have a project in mind or looking for innovative IT &amp; data solutions? Our experts are
            here to assist your business at every step.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="#contact-form" className="btn-primary">
              <span>Send a Message</span>
              <FaArrowRight size={13} />
            </a>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaMapLocationDot />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section" id="contact-form">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">GET IN TOUCH</span>
            <h2 className="section-title">
              We&apos;d Love To <span>Hear From You</span>
            </h2>
            <p className="section-desc">
              Whether you have an upcoming project, need operational support, or want to explore our
              services, our team is ready to assist.
            </p>
          </div>

          <div className="contact-wrapper">
            {/* LEFT CONTACT INFO CARD */}
            <div className="contact-card">
              {/* <img src="/assets/logo.png" alt="Q-DAT Logo" className="contact-logo" /> */}

              <h3>Contact Information</h3>
              <p className="card-text">
                Fill out the form and our team will get back to you within one business day.
              </p>

              <div className="info-box">
                <div className="info-icon">
                  <FaLocationDot />
                </div>
                <div className="info-content">
                  <h4>Office Address</h4>
                  <p>
                    109/7, 3rd Floor, 20th Main Road,<br />
                    5th Block, West of Chord Road, Rajajinagar,<br />
                    Bangalore, Karnataka 560010, India
                  </p>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>General Inquiries</h4>
                  <p>+91 80-42123783</p>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Direct Sales</h4>
                  <p>+91 8904090015</p>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@q-dat.com&su=Enquiry%20from%20Q-DAT%20IT%20Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sales@q-dat.com
                  </a>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <p>
                    Monday &ndash; Saturday<br />
                    09:30 AM &ndash; 06:30 PM IST
                  </p>
                </div>
              </div>

              <div className="contact-social">
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
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="social-icon-btn"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>

            {/* RIGHT INTERACTIVE FORM */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
