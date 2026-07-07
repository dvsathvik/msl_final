import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import AboutPreview from '../components/AboutPreview';
import ProofOfWork from '../components/ProofOfWork';

const Home = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <Clients />
        <AboutPreview />
        <ProofOfWork />
      </main>
    </>
  );
};

export default Home;
