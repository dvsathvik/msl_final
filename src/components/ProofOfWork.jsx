import React from 'react';
import { Link } from 'react-router-dom';

const ProofOfWork = () => {
  const cards = [
    {
      link: '/products/defense/t90',
      img: '/assets/img/defense/def_t90.webp',
      category: 'Defense',
      title: 'T-90 V2V Comm. System',
      description: 'Secured convoy vehicle communication and automation.',
      proofPoint: {
        text: 'Zero-internet V2V mesh network',
        icon: 'bx bx-network-chart'
      }
    },
    {
      link: '/products/hospitals/locker',
      img: '/assets/img/smart_hospitals/hosp_locker.webp',
      category: 'Healthcare',
      title: 'Smart AI Locker',
      description: 'AI-driven secure storage and automated drug dispensing.',
      proofPoint: {
        text: 'Two-level digital approval, fully audited',
        icon: 'bx bx-check-shield'
      }
    },
    {
      link: '/products/renewable/solar',
      img: '/assets/img/renewable_energy/ren_solar.webp',
      category: 'Renewable Energy',
      title: 'Smart Solar Energy Systems',
      description: 'Panel-level intelligence maximizing ROI and solar efficiency.',
      proofPoint: {
        text: 'Panel-level fault detection vs. string-level',
        icon: 'bx bx-sun'
      }
    }
  ];

  return (
    <>
      <style>
        {`
          .proof-card {
            display: block;
            text-decoration: none;
            background: #fff;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.02);
            transition: all 0.3s ease;
            height: 100%;
          }
          
          .proof-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.08);
            border-color: #e2313f;
          }

          .proof-img-wrapper {
            height: 200px;
            overflow: hidden;
            position: relative;
          }
          
          .proof-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .proof-card:hover .proof-img {
            transform: scale(1.05);
          }

          .proof-badge {
            position: absolute;
            top: 16px;
            left: 16px;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            backdrop-filter: blur(4px);
            z-index: 2;
          }
          
          .production-badge {
            position: absolute;
            bottom: 16px;
            right: 16px;
            background: rgba(255, 255, 255, 0.95);
            color: #10b981;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 4px;
            z-index: 2;
          }

          .production-badge::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #10b981;
            box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
            70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }

          .proof-body {
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: calc(100% - 200px);
          }

          .proof-link {
            color: #e2313f;
            font-weight: 700;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 4px;
            margin-top: 24px;
            transition: all 0.3s ease;
          }
          
          .proof-card:hover .proof-link .bx-right-arrow-alt {
            transform: translateX(4px);
          }

          .proof-link .bx-right-arrow-alt {
            font-size: 18px;
            transition: transform 0.3s ease;
          }

          @media (max-width: 767px) {
            .proof-img-wrapper {
              height: 160px;
            }
            .proof-body {
              height: calc(100% - 160px);
            }
          }
        `}
      </style>
      
      <section id="proof-of-work" className="section-white" style={{ padding: 'clamp(40px, 8vw, 80px) 0', background: '#f8fafc' }}>
        <div className="container" data-aos="fade-up">
          
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span style={{ 
              display: 'inline-block', 
              background: 'rgba(226, 49, 63, 0.1)', 
              color: '#e2313f', 
              fontSize: '12px', 
              fontWeight: '700', 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              padding: '6px 16px', 
              borderRadius: '30px', 
              marginBottom: '16px' 
            }}>
              Proof of Work
            </span>
            <h2 style={{ color: '#1a2a4a', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '800', marginBottom: '12px' }}>
              Solutions Already Deployed
            </h2>
            <p style={{ color: '#64748b', fontSize: 'clamp(15px, 3vw, 18px)', maxWidth: '650px', margin: '0 auto', fontWeight: '500' }}>
              <strong style={{ color: '#1a2a4a', fontWeight: '700', display: 'block', marginBottom: '6px' }}>One engineering core, three critical industries.</strong>
              Production systems built by MSL, currently live across defense, healthcare, and renewable energy.
            </p>
          </div>

          {/* Card Grid */}
          <div className="row g-4">
            {cards.map((card, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <Link to={card.link} className="proof-card">
                  <div className="proof-img-wrapper">
                    <span className="proof-badge">{card.category}</span>
                    <img src={card.img} alt={card.title} className="proof-img" />
                  </div>
                  <div className="proof-body">
                    <div>
                      <h3 style={{ color: '#1a2a4a', fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
                        {card.title}
                      </h3>
                      <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', margin: 0, marginBottom: '20px' }}>
                        {card.description}
                      </p>
                      <div style={{ padding: '12px 14px', background: '#f1f5f9', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ background: '#0E47A1', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <i className={card.proofPoint.icon} style={{ color: '#fff', fontSize: '16px' }}></i>
                        </div>
                        <span style={{ fontSize: '13px', color: '#1a2a4a', fontWeight: '600', lineHeight: '1.3' }}>
                          {card.proofPoint.text}
                        </span>
                      </div>
                    </div>
                    <div className="proof-link">
                      View Case Study <i className="bx bx-right-arrow-alt"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ProofOfWork;
