import React from 'react'
import logo from './logo.png'
import './App.css'


function Main({onLogin}){
  return(
    <main>
      <header>
        <img src={logo} />
        <h1>
        Welcome MS Coding Academy Students!
        </h1>
      </header>
      <article>
          <p>
          Please log your attendance today.
          </p>
        </article>
        <button onClick={()=> console.log(onLogin('success'))}>
            Login
        </button>
    </main>
  )
}

export default Main