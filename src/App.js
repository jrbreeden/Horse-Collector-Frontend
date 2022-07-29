import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
import Routes from './Routes'

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
      <Routes />
    </div>
  );
}

export default App;
