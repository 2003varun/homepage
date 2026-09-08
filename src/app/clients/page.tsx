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
        name: 'NG NG',
    quote:
      ' We have been working with Q-Dat for over 5 years now for our Data Management for e-commerce in London and they have always been an absolute pleasure to work with. It was the best decision we could have made, aside from a competitive pricing structure, the team there work with you to taper a service to support your individual business needs. Support response times are swift and carried out in a polite and caring manner. We would highly recommend Q-Dat to anyone. They also have a friendly, efficient and knowledgeable team at hand to deal with all of our Business need',
    author: 'Head of IT Infrastructure',
    company: 'Logistics & Supply Chain Group',
    rating: 5,
    image: '/images/testimonials/ngng.png',
  },
  {
     name: 'Brian Goss',
    author: 'Senior Operations Director',
    company: 'Enterprise Software Partner',
    rating: 5,
    image: '/images/testimonials/brian-goss.png',
    quote:
      'Q-Dat has been providing sales data management and outreach services for us (Applied Digital Solutions) for almost a year now and with each month I am more and more impressed with the dedication and their relentless pursuit to add value to our processes. Raghav and team go the extra mile to ensure an awesome customer experience. We are finding more and more areas where Q-Dat can help us better manage our CRM sales data. I highly recommend them!',
  },

  {
  name: 'Ana Bejan',
quote: 'Working with Q-dat over the past year has been an exceptional experience. Their promptness and efficiency in completing assigned tasks have been commendable. What truly sets Raghav and his team apart is their remarkable communication. Whether it\'s addressing queries promptly or providing regular updates, their team\'s responsiveness has been invaluable. I highly recommend Q-dat for their professionalism and dedication to seamless collaboration.',
    author: 'VP of Technology',
    company: 'Global E-Commerce Brand',
    rating: 5,
    image: '/images/testimonials/ana-bejan.png',
  },
     {
      name: 'Spree Hotels Reservations',
    quote:
      ' We thank the team of Q-Data for offering their excellent services from last 7 to 8 years. This is a team of professional and dedicated people and we are happy to be associated for our data management solutions, with you. Keep up the good work...',
    author: 'Head of IT Infrastructure',
    company: 'Logistics & Supply Chain Group',
    rating: 5,
    image: '/images/testimonials/spree.jpg',
  },
     {
      name: 'Dnyaneshwar Darekar',
    quote:'We’ve been working with Q DAT for our data management and enrichment requirements, and their team has consistently delivered accurate, high-quality outputs on time. They understand complex business structures and maintain excellent communication throughout each project. A reliable and professional partner for any organization looking to scale data operations. Highly recommended!',
    author: 'VP Of Information Technology',
    company: 'Real Estate Technology Company',
    rating: 5,
    image: '/images/testimonials/dnyaneshwar.png',
  },
    {
      name: 'Worksafe Organisation',
    quote:
      ' We admire their commitment to deliver, good infrastructure, talented team. They are providing un interrupted services since 8 years.',
    author: 'Managing Director',
    company: 'Worksafe Organisation',
    rating: 5,
    image: '/images/testimonials/worksafe.png',
  },
        {
        name: 'Chaitanya K V ',
    quote:
      ' Good Quality Data Services and Excellent Team !! We like to work with them again they keep updating each and everything they have a capable team to provide very good services !!!!!!',
    author: 'Head of IT Infrastructure',
    company: 'Logistics & Supply Chain Group',
    rating: 5,
    image: '/images/testimonials/chaitanya.png',
  },
     
  {
    name: 'Thaslin Milani',
    quote:
      'We had a great experience working with the Qdat team. They are highly professional, punctual, and supportive. I truly appreciate their efforts and excellent service. Highly recommended!',
    author: 'Head of IT Infrastructure',
    company: 'Logistics & Supply Chain Group',
    rating: 5,
    image: '/images/testimonials/thaslin.png',
  },

  
       {
        name: 'Ramara321',
    quote:
      'Truehomes24 has been associated with Q-dat team for Data Entry services for the last 6 months. Q-dat team is very dedicated, sincere, committed and delivered us high quality, excellent and error free data entry services. Their services are incomparable with any one. Q-dat services are simply "Superb& Excellent".',
    author: 'Head of IT Infrastructure',
    company: 'Logistics & Supply Chain Group',
    rating: 5,
    image: '/images/testimonials/ramara.png',
  },

    {
      name: 'Veena Masurkar',
    quote:
      '"Raghav and his team helped us with all our data entry needs, which allowed us to focus on everything else we had on our plate. They were a breeze to work with, and very attentive to all the details in our requests. Overall great business!"',
    author: 'Veena Masurkar',
    company: 'Logistics & Supply Chain Group',
    rating: 5,
    image: '/images/testimonials/veena.png',
  },

  //     {
  //         name: 'Nikhil Satish ',
  //   quote:
  //     ' It has been a pleasure to work with Raghav, Shweta and team. Prompt, responsive and good quality work.',
  //   author: 'Head of IT Infrastructure',
  //   company: 'Logistics & Supply Chain Group',
  //   rating: 5,
  //   image: '/images/testimonials/it-infrastructure.jpg',
  // },
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
      {/* <section className="services-section">
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
            {testimonials.map((testimonial, index) => (
  <div className="testimonial-card" key={index}>

    <img
      src={testimonial.image}
      alt="avatar"
      className="testimonial-image"
    />

    <div className="testimonial-rating">
      {"★".repeat(testimonial.rating)}
    </div>
<div className="testimonial-author">
    <strong>{testimonial.name}</strong><br/>
  <span>{testimonial.author}</span><br/>
  <small>{testimonial.company}</small>

    </div>
    <p className="testimonial-quote">
      "{testimonial.quote}"
    </p>

    

  </div>
))}
          </div>
        </div>
      </section> */}

      <section className="services-section testimonials-section">
  <div className="container">

    <div className="section-header">
      <span className="section-badge">CLIENT VOICES</span>

      <h2 className="section-title">
        What Our <span>Partners Say</span>
      </h2>

      <p className="section-desc">
        Long-term partnerships founded on trust, transparent communication,
        and consistent delivery excellence.
      </p>
    </div>

    <div className="services-grid testimonials-grid">

      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>

          {/* TOP */}
          <div className="testimonial-top">

            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />

            <div className="testimonial-rating">
              {"★".repeat(testimonial.rating)}
            </div>

          </div>

    {/* AUTHOR */}
          <div className="testimonial-author">

            <strong>
              {testimonial.name}
            </strong>

            {/* <span>
              {testimonial.author}
            </span>

            <small>
              {testimonial.company}
            </small> */}

          </div>

          {/* QUOTE */}
          <p className="testimonial-quote">
            "{testimonial.quote}"
          </p>


      

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
