import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { register } from '../Redux/actionCreators';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const initialState = {
    username:'',
    email: '',
    password: '',

};

function Register(props) {

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
            <div className='mini-container'>
                <section className='reg-section'>
                    <h2 className='welcome'>Welcome Back Friend! </h2>
                    <br/> To keep connected with us pls
                login with your personal info <br />
                    <button className='submit'> <Link to='/login'>Login </Link></button>
                </section>

                <section className='formik-section'>
                    <Formik
                        initialValues={initialState}
                        validationSchema={validation}
                        onSubmit={props.register}
                        render={props => {
                            return (
                                <Form>
                                    <h2 style={{ color: '#3AAF9F', marginTop: '20px', marginBottom:'50px' }}> Create Account</h2>

                                    <div>
                                        <Field className='input-style' name='username' type='text' placeholder='username' />
                                        <ErrorMessage name='username' component='div' />
                                    </div>

                                    <div>
                                        <Field className='input-style' name='email' type='email' placeholder='Email' />
                                        <ErrorMessage name='email' component='div' />
                                    </div>

                                    <div>
                                        <Field className='input-style' name='password' type='password' placeholder='Password' />
                                        <ErrorMessage name='password' component='div' />
                                    </div>

                                    <button className='submit-button' type='submit'>Register</button>
                                </Form>
                            )
                        }}
                    >

                    </Formik>
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
    register
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);