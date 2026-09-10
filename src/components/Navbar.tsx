'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaXmark, FaPhone, FaArrowRight } from 'react-icons/fa6';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Company', href: '/company' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Clients', href: '/clients' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => setMobileOpen(false);



  return (
    <>
      <header className="site-header">
        <div className="container navbar">
          {/* Logo */}
          <Link href="/" className="logo-link">
            <img src="/assets/logo.png" alt="Q-DAT IT Solutions Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">Q-DAT IT Solutions</span>
              <span className="logo-subtitle"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          {/* <Link href="/contact" className="nav-cta-btn">
            <span>Get in Touch</span>
            <FaArrowRight size={13} />
          </Link> */}

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="hamburger-btn"
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop & Drawer */}
      <div
        className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={closeMobile}
      />

      <aside className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link href="/" onClick={closeMobile} style={{ textDecoration: 'none' }}>
            <div className="logo-text">
              <span className="logo-title">Q-DAT</span>
              <span className="logo-subtitle">IT Solutions</span>
            </div>
          </Link>
          <button
            type="button"
            className="hamburger-btn"
            onClick={closeMobile}
            aria-label="Close navigation menu"
          >
            <FaXmark />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
            onClick={closeMobile}
          >
            Contact Sales
          </Link>
        </div>
      </aside>


    </>
  );
}
