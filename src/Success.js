import React from 'react'
import Header from './Header'

function Success(props){
    return(
      <main id="container">
        <Header title={props.title} />
        <p>Hey {props.user}! Your attendance has been logged at 12:00 p.m.</p>
        <img src="" alt="Your uploaded selfie" />
        <button className="btn" onClick={() =>props.onLogout('main')}>
            Logout
        </button>
      </main>
    )
}

export default Success