import { combineReducers } from 'redux';

import filterReducer from '../reducers/filters';
import pizzasReducer from '../reducers/pizzas';

const rootReducer = combineReducers({
   filters: filterReducer,
   pizzas: pizzasReducer,
});

export default rootReducer