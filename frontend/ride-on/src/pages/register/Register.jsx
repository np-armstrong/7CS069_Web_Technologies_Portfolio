import React from 'react'
import RegistrationForm from '../../components/registrationForm/RegistrationForm.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'

import './register.css'

const Register = () => {
  return (
    <>
        <Navigation />
        <div className="registrationContatiner">
            <RegistrationForm />
        </div>
    </>
  )
}

export default Register

