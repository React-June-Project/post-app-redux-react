import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './redux/action/post.action';


const App = () =>{

  // 1 way to do this thing
  // const obj = useSelector(state => state.data)
  // let {loading, data, error} = obj;


  // 2 way to do this thing
  const loading = useSelector(state => state.loading);
  const data = useSelector(state => state.data);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchPosts())
  },[]);

  return(
    <div>
        {
          data.length > 0 && (
            data.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))
          )
        }
    </div>
  )
}
export default App;