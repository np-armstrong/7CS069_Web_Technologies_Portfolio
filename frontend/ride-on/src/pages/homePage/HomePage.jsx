import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';
import Fleet from '../../components/fleet/Fleet';
import Footer from '../../components/footer/Footer';
import About from '../../components/about/About';
import UserListings from '../../components/userListings/UserListings';

const HomePage = () => {
  return (
    <>
        <Navigation isBookings={false}/>
        <Hero/> 
        <Features />
        <Fleet />
        <About />
        <UserListings />
        <Footer />
    </>
  )
}

export default HomePage