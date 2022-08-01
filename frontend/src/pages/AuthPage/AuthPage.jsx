import {useState} from 'react';
import SignUp from '../../components/Signup';
import Login from '../../components/Login/Login';

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUp setUser={setUser} />
      <Login setUser={setUser} />
    </main> 
  );
}
