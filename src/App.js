import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import MarketingServices from './components/sections/MarketingServices';
import DevOpsServices from './components/sections/DevOpsServices';
import ContactForm from './components/sections/ContactForm';

const App = () => {
  return (
    <Layout>
      <Hero />
      <MarketingServices />
      <DevOpsServices />
      <ContactForm />
    </Layout>
  );
};

export default App;
