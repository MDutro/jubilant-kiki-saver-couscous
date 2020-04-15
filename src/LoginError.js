import React from 'react'
import Header from './Header'

function LoginError(props){
    return(
      <main>
        <Header />
        <h1>Login Unsuccessful!</h1>
        <p>Hey Student! There was an error with your attendance. Please try again!</p>
        <button onClick={ () => props.onLogin('login')}>
            Login Again
        </button>
      </main>
    )
}

export default LoginError;
