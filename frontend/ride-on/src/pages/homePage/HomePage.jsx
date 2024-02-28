import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';
import Fleet from '../../components/fleet/Fleet';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <>
        <Navigation />
        <Hero/> 
        <Fleet />
        <Features />
        <Footer />
    </>
  )
}

export default HomePage