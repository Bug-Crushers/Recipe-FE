import React from 'react';
import { connect } from 'react-redux';
import { login } from '../Redux/actionCreators';


function Login(props) {
    console.log(props);
    return (

        <div>
            Here is the Login component
            <input type='text' placeholder='Username'/>
            <input type='email;' placeholder='Email'/>
            <input type='password' placeholder='Password'/>   
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