import React from 'react'
import Header from './Header'

function Success(props) {
    
    return(
      <main id="container">
        <Header title={props.title} />
        <p>Hey {props.user[0][1]}! Your attendance has been logged at 12:00 p.m.</p>
        <img src={props.user[1][1]} alt="Your uploaded selfie" />
        <button className="btn" onClick={() =>props.onLogout('main')}>
            Logout
        </button>
      </main>
    )
}

export default Success