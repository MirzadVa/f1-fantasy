import "./App.css";
import axios from "axios";
function App() {
  axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    // handle success
    console.log(response.data);
  });
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
