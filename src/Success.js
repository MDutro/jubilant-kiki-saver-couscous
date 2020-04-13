import React from 'react'
import Header from './Header'

function Success({onLogout, user}){
    return(
      <main id="container">
        <Header />
        <h1>Login Successful!</h1>
        <p>Hey {user.username}! Your attendance has been logged at 12:00 p.m.</p>
        <img src="" alt="Your uploaded selfie image" />
        <button className="btn" onClick={() =>onLogout('main')}>
            logout
        </button>
      </main>
    )
}

export default Success