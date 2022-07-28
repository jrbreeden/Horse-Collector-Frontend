import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState, useEffect} from "react"

function App() {
const [data, setData] = useState(null)

  useEffect(() => {
  
    let data ;

    axios.get('http://localhost:8000/wel/')
    .then(res => {
        data = res.data;
        setData({
            details : data    
        });
    })
    
    .catch(err => {})
},[])
  return (
    <div className="App">
      <h1>Horse Collector</h1>
    </div>
  );
}

export default App;
