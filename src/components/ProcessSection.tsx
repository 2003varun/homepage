import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const steps = [
  {
    num: '1',
    title: 'Requirement Gathering',
    desc: 'We understand your strategic goals, project scope, data formats, and technical needs.',
  },
  {
    num: '2',
    title: 'Planning',
    desc: 'Our specialists prepare the execution roadmap, architecture, security protocols, and timeline.',
  },
  {
    num: '3',
    title: 'Development',
    desc: 'We execute data entry, management, or software engineering using state-of-the-art tools.',
  },
  {
    num: '4',
    title: 'Testing & QA',
    desc: 'Every deliverable undergoes multi-tier quality assurance to ensure 99.9% accuracy and security.',
  },
  {
    num: '5',
    title: 'Deployment & Support',
    desc: 'We deliver smoothly and provide ongoing maintenance, operational reporting, and SLA support.',
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Process</span>
          <h2 className="section-title">
            How We Deliver <span>Excellence</span>
          </h2>
          <p className="section-desc">
            From initial consultation to delivery and continuous support, we follow a rigorous,
            structured methodology to achieve optimal quality.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div className="process-card" key={step.num}>
              <div className="process-number">0{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
