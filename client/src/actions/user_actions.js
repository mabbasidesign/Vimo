import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
} from './types';

import { USER_SERVER } from '../utils/misc';


// export function registerUser(dataToSubmit){
//     const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
//         .then(response => response.data);
//     return{
//         type: REGISTER_USER,
//         playload: request
//     }
// }

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);
    return {
        type: LOGIN_USER,
        payload: request
    }
}