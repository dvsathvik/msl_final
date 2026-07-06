import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`new-header-container ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* Top Main Navigation */}
      <div className="header-top">
        <div className="nav-container">
          
          {/* LOGO */}
          <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/img/companies/logo.webp" alt="MicroSysLogic Logo" />
            <span className="logo-text">MicroSysLogic</span>
          </Link>

          {/* Standard Links */}
          <div 
            className={`top-links ${isMobileMenuOpen ? 'mobile-open' : ''}`} 
            style={{ alignItems: 'center' }}
            onClick={(e) => {
              if (e.target.tagName === 'A' || (e.target.closest('a') && !e.target.closest('.ch-icon'))) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
            <Link to="/about">About us</Link>

            <div className={`nav-dropdown ${openDropdown === 'defense' ? 'mobile-expanded' : ''}`}>
              <Link to="/products/defense" onClick={(e) => { if(window.innerWidth <= 991) { e.preventDefault(); e.stopPropagation(); setOpenDropdown(openDropdown === 'defense' ? null : 'defense'); } }}>Defense <i className="bi bi-chevron-down ch-icon"></i></Link>
              <div className="nav-dropdown-menu">

                <Link to="/products/defense/t90"><i className="bi bi-broadcast"></i> T90’s V2V RF Comm. & Automation</Link>
                <Link to="/products/defense/g3000"><i className="bi bi-airplane"></i> Flight control Monitor Device</Link>
                <Link to="/products/defense/locker"><i className="bi bi-safe"></i> High safety AI locker</Link>
                <Link to="/products/defense/video"><i className="bi bi-camera-reels"></i> Secure Handheld Communicator</Link>
                <Link to="/products/defense/soc-modernization"><i className="bi bi-cpu"></i> Legacy to Latest SOC Modernization</Link>
                <Link to="/products/defense/ai-security"><i className="bi bi-shield-lock"></i> AI Secured Zones Monitoring System</Link>
              </div>
            </div>

            <div className={`nav-dropdown ${openDropdown === 'ai' ? 'mobile-expanded' : ''}`}>
              <Link to="/products/ai" onClick={(e) => { if(window.innerWidth <= 991) { e.preventDefault(); e.stopPropagation(); setOpenDropdown(openDropdown === 'ai' ? null : 'ai'); } }}>AI <i className="bi bi-chevron-down ch-icon"></i></Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/ai/surveillance"><i className="bi bi-camera-video"></i> AI High Security Surveillance</Link>
                <Link to="/products/ai/traffic"><i className="bi bi-stoplights"></i> AI High Traffic Signaling System</Link>
                <Link to="/products/ai/tender"><i className="bi bi-file-earmark-text"></i> AI Tender/Bidding Solution</Link>
              </div>
            </div>

            <div className={`nav-dropdown ${openDropdown === 'renewable' ? 'mobile-expanded' : ''}`}>
              <Link to="/products/renewable" onClick={(e) => { if(window.innerWidth <= 991) { e.preventDefault(); e.stopPropagation(); setOpenDropdown(openDropdown === 'renewable' ? null : 'renewable'); } }}>Renewable Energy <i className="bi bi-chevron-down ch-icon"></i></Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/renewable/solar"><i className="bi bi-brightness-high"></i> Smart Solar Energy Systems</Link>
              </div>
            </div>

            <div className={`nav-dropdown ${openDropdown === 'hospitals' ? 'mobile-expanded' : ''}`}>
              <Link to="/products/hospitals" onClick={(e) => { if(window.innerWidth <= 991) { e.preventDefault(); e.stopPropagation(); setOpenDropdown(openDropdown === 'hospitals' ? null : 'hospitals'); } }}>Smart Hospitals <i className="bi bi-chevron-down ch-icon"></i></Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/hospitals/automation"><i className="bi bi-hospital"></i> Smart Hospital IOT Automation & Monitoring System</Link>
                <Link to="/products/hospitals/locker"><i className="bi bi-shield-lock"></i> AI Secured Locker Systems for Drugs</Link>
                <Link to="/products/hospitals/asset"><i className="bi bi-box-seam"></i> Asset Management</Link>
                <Link to="/products/hospitals/nurse-tablet"><i className="bi bi-tablet"></i> Smart AI Locker for Nurse Tablets</Link>
                <Link to="/products/hospitals/impress-stock"><i className="bi bi-inboxes"></i> Impress Stock AI Medicine Access</Link>
              </div>
            </div>

            <div className={`nav-dropdown ${openDropdown === 'manufacturing' ? 'mobile-expanded' : ''}`}>
              <Link to="/products/manufacturing" onClick={(e) => { if(window.innerWidth <= 991) { e.preventDefault(); e.stopPropagation(); setOpenDropdown(openDropdown === 'manufacturing' ? null : 'manufacturing'); } }}>Manufacturing Automations <i className="bi bi-chevron-down ch-icon"></i></Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/manufacturing/iot"><i className="bi bi-cpu"></i> Industrial IOT</Link>
                <Link to="/products/manufacturing/mining"><i className="bi bi-shield-fill-exclamation"></i> Safety Mining</Link>
                <Link to="/products/manufacturing/lift"><i className="bi bi-arrow-up-square"></i> Multi Escalators & lift failures Identification</Link>
              </div>
            </div>

            <div className={`nav-dropdown ${openDropdown === 'customization' ? 'mobile-expanded' : ''}`}>
              <Link to="/products/customization" onClick={(e) => { if(window.innerWidth <= 991) { e.preventDefault(); e.stopPropagation(); setOpenDropdown(openDropdown === 'customization' ? null : 'customization'); } }}>Customization <i className="bi bi-chevron-down ch-icon"></i></Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/customization/face"><i className="bi bi-person-bounding-box"></i> Face Analytics on Broadcom Soc Platform</Link>
                <Link to="/products/customization/drone"><i className="bi bi-bullseye"></i> Onboard Vehicle Detection for Drones</Link>
                <Link to="/products/customization/thermal"><i className="bi bi-thermometer-half"></i> Thermal camera distance Detection</Link>
                <Link to="/products/customization/dehaze"><i className="bi bi-cloud-haze"></i> Dehaze / Snow-Fog Removal</Link>
                <Link to="/products/customization/defect"><i className="bi bi-search"></i> Product Defect Detect</Link>
              </div>
            </div>
            
            {/* Mobile Only Menu Items */}
            <div className="mobile-only-menu-items mobile-only">
              <Link to="/contact"><i className="bi bi-envelope"></i> Contact us</Link>
              <Link to="#" onClick={(e) => e.preventDefault()}><i className="bi bi-file-earmark-arrow-down"></i> Brochure</Link>
            </div>
          </div>

          {/* Actions */}
          <div className="top-actions">
            <Link to="/contact" className="mobile-contact-btn mobile-only" aria-label="Contact Us">
              <i className="bi bi-envelope"></i>
            </Link>
            <div className="nav-dropdown desktop-only" style={{ height: 'auto', margin: 0 }}>
              <button className="srch-btn" aria-label="Explore Menu">
                <i className="bi bi-list" aria-hidden="true" style={{ fontSize: '24px' }}></i>
              </button>
              <div className="nav-dropdown-menu" style={{ left: 'auto', right: 0, top: 'calc(100% + 15px)', minWidth: '220px' }}>
                <Link to="/contact"><i className="bi bi-envelope"></i> Contact us</Link>
                <Link to="#" onClick={(e) => e.preventDefault()}><i className="bi bi-file-earmark-arrow-down"></i> Brochure</Link>
              </div>
            </div>
          </div>
          
          <button 
            className="mobile-menu-toggle d-lg-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>



    </header>
  );
};

export default Header;

