import React from 'react';

const Clients = () => {
  const clients = [
    { 
      img: '/assets/img/uncategorized/L&T_logo.png', 
      title: 'L&T Technology Services', 
      category: 'ER&D services'
    },
    {
      icon: 'bx bx-shield-quarter',
      title: 'Leading defense contractor',
      category: 'DEFENSE & AEROSPACE'
    },
    { 
      icon: 'bx bx-plus-medical', 
      title: 'Top hospital network', 
      category: 'HEALTHCARE'
    },
    { 
      icon: 'bx bxs-sun', 
      title: 'Major solar developer', 
      category: 'RENEWABLE ENERGY'
    }
  ];

  return (
    <section id="clients" className="clients section-white">
      <div className="container-fluid" data-aos="zoom-in" style={{ padding: '0 5%' }}>
        <div className="section-title" style={{ paddingBottom: '40px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6b7280', fontWeight: '700' }}>Trusted By Industry Leaders</h2>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-12 d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center client-logo-container" style={{ gap: '2rem' }}>
            {clients.map((client, index) => {
              return (
                <div key={index} className="client-item" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  textAlign: 'left'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {client.img ? (
                      <img src={client.img} alt={client.title} style={{ height: '62px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    ) : (
                      <i className={client.icon} style={{ fontSize: '46px', color: '#E2313F' }}></i>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: '#1a2a4a', lineHeight: '1.2' }}>{client.title}</div>
                    {client.description && (
                      <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px', fontWeight: '500' }}>{client.description}</div>
                    )}
                    {client.category && (
                      <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '6px' }}>{client.category}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
