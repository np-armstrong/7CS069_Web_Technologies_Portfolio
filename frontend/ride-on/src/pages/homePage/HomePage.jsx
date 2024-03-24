import React, { Suspense } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';

//Lazy loading components
const Fleet = React.lazy(() => import('../../components/fleet/Fleet'));
const Footer = React.lazy(() => import('../../components/footer/Footer'));
const About = React.lazy(() => import('../../components/about/About'));
const UserListings = React.lazy(() => import('../../components/userListings/UserListings'));

const HomePage = () => {

  return (
    <>
        <Navigation isBookings={false}/>
        <Hero/> 
        <Features />
          <Suspense fallback={<div>Loading...</div>}>
            <Fleet />
            <About />
            <UserListings/>
            <Footer />
          </Suspense>
    </>
  )
}

export default HomePage