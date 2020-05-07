import React from 'react';
import {connect} from 'react-redux';
import {register} from '../Redux/actionCreators';

function Register(props){
    console.log(props);
    return(
        <div>
            This is the Register component
            <input type='text' placeholder='Username'/>
            <input type='email;' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
        </div>
    )
}

const mapStateToProps = store => {
    return{
        loading: store.authReducer.loading,
        token: store.authReducer.token,
        error: store.authReducer.error,
    }
}

const mapDispatchToProps = {
    register
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);