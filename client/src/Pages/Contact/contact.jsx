import React from 'react'
import ContactSection from '../../Components/ContactSection'
import ContactFormik from '../../Components/ContactFormik'
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <>
    <Helmet>
      <title>
        Contact Page
      </title>
    </Helmet>

    <div>
      <ContactSection/>
      <ContactFormik/>
    </div>
    </>
  )
}

export default Contact
