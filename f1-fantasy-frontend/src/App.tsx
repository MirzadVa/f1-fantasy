import './App.css';
import axios from 'axios';

function App() {
  axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
    // handle success
    console.log(response.data);
  });
  return <div>aa</div>;
}

export default App;
