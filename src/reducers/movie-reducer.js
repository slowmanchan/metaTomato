import { FETCH_MOVIES } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_MOVIES:
      console.log(action.payload.data.Search)
      return [action.payload.data.Search][0]
    default:
      return state;
  }
}
