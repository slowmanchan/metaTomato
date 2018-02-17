import { FETCH_MOVIES } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_MOVIES:
      console.log(action.payload.data)
      return [action.payload.data, ...state]
    default:
      return state;
  }
}
