import React from 'react'
import logo from './logo.png'
import Header from './Header'
import './App.css'


function Main({onLogin}){
  return(
    <main>
      <Header />
      <article>
          <p>
          Please log your attendance today.
          </p>
        </article>
        <button onClick={()=> onLogin('signup')}>
            Signup
        </button>
        <button onClick={()=> onLogin('login')}>
        Login
        </button>
    </main>
  )
}

export default Main