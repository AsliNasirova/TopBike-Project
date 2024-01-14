import { Field, Form, Formik } from "formik";
import React from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import './index.scss'
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Min 3 characters!')
        .max(50, 'Max 50 characters !')
        .required('Name is required'),
    email: Yup.string().email('Email is not correct!').required('Email is required'),
    subject: Yup.string()
    .required(' Message is required'),
    message: Yup.string()
        .required(' Message is required')



});
const ContactFormik = () => {
    const showSweetAlert = (values) => {
        console.log('Submitting form:', values);
        Swal.fire({
            icon: 'success',
            showCancelButton: false,

        });
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', number: '', message: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    showSweetAlert(values);
                    setSubmitting(false);
                    resetForm();
                }, 300);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="ContactPage">
                        <div className="contact">
                            <p>Home/<strong>Contact</strong></p>
                        </div>
                        <div className="forms">
                            
                            <div className="RowContact">
                                <div className="row1">
                                    <div className="col-12 col-md-12 col-lg-4"><div className="from-group"><Field name="name" type="text" placeholder="your name*" />{errors.name && touched.name ? (
                                        <div style={{ color: 'red', fontSize: "18px" }}>{errors.name}</div>
                                    ) : null}</div></div>
                                    <div className='col-12 col-md-12 col-lg-4'><div className="from-group"><Field name="email" type="email" placeholder="your email*" />
                                        {errors.email && touched.email ? (
                                            <div style={{ color: 'red', fontSize: "18px" }}>{errors.email}</div>
                                        ) : null}</div></div>
                                    <div className="from-message"><Field name="subject" type="text" placeholder="Subject" />{errors.message && touched.message ? (
                                            <div className="from-group"style={{ color: 'red', fontSize: "18px" }}>{errors.message}</div>
                                        ) : null}</div>

                                </div>
                                <div className="row2">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="from-message"><Field name="message" type="text" placeholder="Your Massage" />{errors.message && touched.message ? (
                                            <div style={{ color: 'red', fontSize: "18px" }}>{errors.message}</div>
                                        ) : null}</div></div> </div>

                                <div className='butt'>
                                    <div className='btn'>
                                        <button type="submit" className='submitt' >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactFormik