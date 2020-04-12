import React from 'react'
import Header from './Header'

function Success({onLogout, user}){
    return(
      <main>
        <Header />
        <h1>Login Successful!</h1>
        <p><span id='username'>Hey {user.username}!</span> Your attendance has been logged at <span id='timestamp'>12:00 pm</span></p>
        <button onClick={() =>onLogout('main')}>
            logout
        </button>
      </main>
    )
}

export default Success