

import { legacy_createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'







export const store = legacy_createStore(rootReducer , {}, compose(applyMiddleware(thunk), composeWithDevTools()));
// export function authReducer (state, action) {
//     switch (action.type) {
//         case 'AUTHENTICATION':
//             return [...action.payload];
//         default:
//             return state;
//     }
// }

export default store;
