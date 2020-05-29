import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { login } from '../Redux/actionCreators';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';

const initialState = {
    email: '',
    password: '',
}

function Login(props) {

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Email not valid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .required('Password is required'),
    });

    return (
        <div className='container'>
            <div className='lgmini-container'>

                <section className='formik-section'>

                    <Formik
                        initialValues={initialState}
                        validationSchema={validation}
                        onSubmit={props.login}
                        render={props => {
                            return (
                                <Form>
                                    <h2 style={{ color: '#3AAF9F', marginTop: '20px', marginBottom: '50px' }}> Sign in to Family Recipe</h2>

                                                                       
                                    <div>
                                        <Field className='input-style' name='email' type='email' placeholder='Email' />
                                        <ErrorMessage name='email' component='div' />
                                    </div>

                                    <div>
                                        <Field className='input-style' name='password' type='password' placeholder='Password' />
                                        <ErrorMessage name='password' component='div' />
                                    </div>

                                    <button className='submit-button' type='submit'>Login</button>
                                </Form>
                            )
                        }}
                    >

                    </Formik>
                </section>
                <section className='reg-section'>
                    <h2 className='welcome'>Hello, Friend!</h2>
                    <p>Please enter your personal details and start your journey with us</p>
                    <button className='submit'> <Link to='/'> Register </Link></button>

                </section>


            </div>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        loading: store.authReducer.loading,
        token: store.authReducer.token,
        error: store.authReducer.error,
    }
}

const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);