import postReducer from "./reducer/postReducer";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(postReducer, applyMiddleware(thunk));
export default store;

// apply middleware is a kind of function that allows object to go ahead if otherthing is passed then the middleware
// has the logic to execute the code and then covert it to the object passed the data to dispatch



// dispatch always accept object 