import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';
import { fetchPosts, getPostById } from './redux/services/postService';

function App() {

  const { value } = useSelector((state) => state.counter)
  const { posts, loading, singlePost } = useSelector((state) => state.post)
  const dispatch = useDispatch();


  const getPostByIdHandler = () => {
      const idIs = prompt("Enter any number under 50::", 1);
      dispatch(getPostById(idIs))
  }
  return (
    <>
      <div>{value}</div>
      <button type='button' onClick={() => dispatch(increment())}>Increment</button>
      <button type='button' onClick={() => dispatch(decrement())}>Decrement</button>
      <button type='button' onClick={() => dispatch(fetchPosts())}>Get Post</button>
      <button type='button' onClick={() => getPostByIdHandler()}>Get Post By Id</button>

      {loading && "Loading..."}


      <br /><br /><br /><br /><br />
      {JSON.stringify(singlePost)}
      <br /><br /><br /><br /><br />

      {posts && posts.map((item) => {
        return (<div key={item?.id}>
          <div>{item.title}</div>
          <div>{item.body}</div>
          <hr />
        </div>)
      })}
    </>
  );
}

export default App;
