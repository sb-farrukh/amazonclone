import * as types from './actionType';
import {auth} from '../untils/firebase';
 
const registerstart=()=>({
    type:types.REGISTER_START,
});
const registersucess=(user)=>({
    type:types.REGISTER_SUCCESS,
});
const registererror=(error)=>({
    type:types.REGISTER_FAIL,
    payload:error,
}); 

export const registerInitiate=(email,password)=>{
    return function(dispatch){
        dispatch(registerstart());
        auth.createUserWindowEmailAndPassword(email,password).than(({user})=>{
dispatch(registersucess)
        }).catch((error)=>dispatch(registererror(error.massage)));
    };
}