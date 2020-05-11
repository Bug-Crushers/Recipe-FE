import React from 'react';
import { connect } from 'react-redux';
import { login } from '../Redux/actionCreators';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';

const initialStart = {
    email:'',
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

        <div>
            Here is the Login component
        <Formik
                initialValues={initialStart}
                validationSchema={validation}
                onSubmit={props.register}
                render={props => {
                    return (
                        <Form>

                            <div>
                                <Field name='email' type='email' placeholder='Email' />
                                <ErrorMessage name='email' component='div' />
                            </div>

                            <div>
                                <Field name='password' type='password' placeholder='Password' />
                                <ErrorMessage name='password' component='div' />
                            </div>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }}
            >

            </Formik>
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