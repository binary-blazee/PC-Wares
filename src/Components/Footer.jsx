import React from 'react'
import '../assets/Styles/Footer.css'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Logo from '../assets/images/Logo.png'
const emailSchema = Yup.object({
  email: Yup.string().email('Email is not valid').required('Email is required')
});

function Footer() {
  return (
    <div className='footer'>
    <div className='Logo'>
        <img src={Logo} alt='Logo'/>
        <h3>PC Wares</h3>
    </div>
    <div className='email-sec'>
    <p><strong>Subscribe to our store</strong></p>
    <Formik
        initialValues={{
            email: ''
        }}
        validationSchema={emailSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <Field
                    id='subscribe-input'
                    name='email'
                    placeholder='Enter Your Email'
                    className={errors.email && touched.email ? 'error' : ''}
                />
                <button type='submit' className='submit-btn'>
                    Submit
                </button>
                {errors.email && touched.email && (
                    <div className='error-message'>{errors.email}</div>
                )}
                
            </Form>
        )}
    </Formik>
</div>

<div className='links'>
    <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/terms">Terms</Link></li>
    </ul>
</div>

    <div className='copy-rights'>
        <p>&copy; 2025 PC Wares, Inc</p>
    </div>
    </div>
  )
}

export default Footer