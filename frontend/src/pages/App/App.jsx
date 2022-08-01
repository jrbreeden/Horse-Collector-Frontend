// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import {  Route, Switch } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import Home from '../Home'

export default function App() {
  const [data, setData] = useState(null)
  const [user, setUser] = useState(getUser())

  useEffect(() => {

    let data;

    axios.get('http://localhost:8000/wel/')
      .then(res => {
        data = res.data;
        setData({
          details: data
        });
      })

      .catch(err => { })
  }, [])
  return (

    <main className="App">
      {user ? (
          <>
          <NavBar user={user} setUser={setUser} />
            <Switch>
            <Route path="/" element={<Home />} />
            </Switch>
           </>
            ) : (
          <AuthPage setUser={setUser} />
)}
        </main>
      
      );
}

