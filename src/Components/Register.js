import React from 'react';
import { connect } from 'react-redux';
import { register } from '../Redux/actionCreators';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialState = {
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
        <div>
            This is the Register component
            <Formik
                initialValues={initialState}
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
    register
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);