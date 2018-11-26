import axios from 'axios';
import { FETCH_USER, CHECK_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/currentuser');
  dispatch({ type: FETCH_USER, payload: res.data })
};

export const loginUser = (values, {} , { adminHistory }) => async dispatch => {
  try{
    const res = await axios.post('/auth/login', values);
    adminHistory.push('/console');
    dispatch({ type: FETCH_USER, payload: res.data});
  }
  catch(err){
    console.log(err);
    adminHistory.push({
      pathname: '/console',
      state: { loginFailed: true }
    })
  }

};

export const registerUser = (values, {}, { adminHistory }) => async dispatch =>{
  try{
    const checkRes = await axios.get('/auth/checkuser/'+values.username);
    const res = await axios.post('/auth/register', values);
    console.log(res);
    adminHistory.push('/console');
    dispatch({ type: FETCH_USER, payload: res.data })
  }
  catch(err){
    console.log(err.response);
    adminHistory.push({
      pathname: '/console',
      state: { registrationFailed: true, resErrCode: err.response.status }
    })
  }
};
