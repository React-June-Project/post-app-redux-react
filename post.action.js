import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from "./actionTypes";
import axios from 'axios';

// const initialState = {
//       loading: false,  // it will fall false as the initial state. If it is false means api request failed
//       data: [], // it gives us the data
//       error: '' // error message
// }

export const fetchPostRequest = () =>{
      return {
            type: FETCH_POST_REQUEST
      }
}

export const fetchPostSuccess = (data) =>{
      return {
            type: FETCH_POST_SUCCESS,
            payload: data
      }
}

export const fetchPostError = (error) =>{
      return {
            type: FETCH_POST_ERROR,
            payload: error
      }
}

// to make the api requestion in redux we need to install npm i redux-thunk
// this will convert your pure function to impure function and use for api hitting in redux
// this gives us a parameter called disptach already 
// also import axios in start 

export const fetchPosts = () =>{
      return (dispatch) =>{
            axios.get('https://gauravgitacc.github.io/postAppData/posts.json')
            .then(response => dispatch(fetchPostSuccess(response.data)))
            .catch(error => dispatch(fetchPostError(error.message)));
      }
}

// in this process you can go we .then otherwise you can also go with async function
