import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { Register } from './components/Register'


export function App() {
  const [user, setUser] = useState("")

  const handleLogin = (newValue)=>{
    setUser(newValue)
  }

  const handleLogout = ()=>{
    setUser("")
  }

  return (
    <>
    <h1>Hola de nuevo, {user}!</h1>
    <button onClick={handleLogout}>Logout</button>
    
    <Login onLogin={handleLogin}/>

    <Register />
    
    </>
  )
  
}