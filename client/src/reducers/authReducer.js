import {CHECK_USER, FETCH_USER} from "../actions/types";

export default function(state = {}, action){
  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;
    case CHECK_USER:
      return action.payload;
    default:
      return state;
  }
}