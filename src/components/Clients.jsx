import React from 'react';

const Clients = () => {
  const clients = [
    { 
      type: 'image', 
      src: '/assets/img/companies/LT_technology_service.webp', 
      height: '48px' 
    },
    { 
      type: 'text', 
      icon: 'bx bx-shield-quarter', 
      title: 'Leading Producer', 
      subtitle: 'Defense Sector'
    },
    { 
      type: 'text', 
      icon: 'bx bx-plus-medical', 
      title: 'Premier Provider', 
      subtitle: 'Smart Hospitals'
    },
    { 
      type: 'text', 
      icon: 'bx bxs-sun', 
      title: 'Global Innovator', 
      subtitle: 'Solar & Renewable'
    }
  ];

  return (
    <section id="clients" className="clients section-white">
      <div className="container-fluid" data-aos="zoom-in" style={{ padding: '0 5%' }}>
        <div className="section-title" style={{ paddingBottom: '30px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6b7280', fontWeight: '600' }}>Trusted By Industry Leaders</h2>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-12 d-flex flex-wrap justify-content-center justify-content-md-between align-items-center client-logo-container" style={{ gap: '2rem' }}>
            {clients.map((client, index) => {
              if (client.type === 'image') {
                return (
                  <img 
                    key={index}
                    src={client.src} 
                    className="img-fluid client-logo-img" 
                    alt="Trusted Company" 
                    style={{ 
                      height: client.height, 
                      width: 'auto',
                      maxWidth: '22%',
                      objectFit: 'contain' 
                    }} 
                  />
                );
              } else {
                return (
                  <div key={index} className="client-logo-img" style={{ display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left', minWidth: '220px' }}>
                    <div style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '12px', 
                      background: '#f8fafc', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: '1px solid #e2e8f0',
                      flexShrink: 0
                    }}>
                      <i className={client.icon} style={{ fontSize: '24px', color: '#E2313F' }}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '800', color: '#1a2a4a', lineHeight: '1.2' }}>{client.title}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>{client.subtitle}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
