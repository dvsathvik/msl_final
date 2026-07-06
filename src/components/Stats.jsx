import React from 'react';
import CompanyInfo from '../../CompanyInfo.json';

const Stats = () => {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter">{CompanyInfo.CLIENTS}</span>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter">{CompanyInfo.PROJECTS}</span>
              <p>Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span className="purecounter">{CompanyInfo.HOURS_SUPPORT}</span>
              <p>Hours Of Support</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span className="purecounter">{CompanyInfo.ENGINEERS}</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
