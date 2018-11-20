import axios from 'axios';
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/currentuser');
  dispatch({ type: FETCH_USER, payload: res.data })
};

export const loginUser = (values, {} , { history }) => async dispatch => {
  try{
    const res = await axios.post('/auth/login', values);
    console.log(history);
    history.push('/');
    dispatch({ type: FETCH_USER, payload: res.data});
  }
  catch(err){
    console.log(err);
    history.push({
      pathname: '/login',
      state: { loginFailed: true }
    })
  }

};