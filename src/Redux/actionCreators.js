import * as types from './actionTypes';
import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const apiURL = 'https://secret-recipe-be.herokuapp.com/users/';

export const register = userData => dispatch => {
    dispatch({ type: types.REGISTER_START})
    return axios.post(`${apiURL}register_login`, userData)
    .then(res => {
        localStorage.setItem('token', res.data.key)
        dispatch({type: types.REGISTER_SUCCESS, payload:res.data.key});
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: types.REGISTER_FAILURE });
    });
}

export const login = userData => dispatch => {
    dispatch({ type: types.LOGIN_START })
    return axios.post(`${apiURL}register_login`, userData)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.key)
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.key });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: types.LOGIN_FAILURE });
        });

}

export const logout = () => {
    return { type: types.LOGOUT}
}

