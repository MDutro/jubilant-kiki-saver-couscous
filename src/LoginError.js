import React from 'react'

function LoginError({onLogin}){
    return(
      <main>
        <h1>Login Unsuccessful!</h1>
        <p>Hey <span id='username'>Student</span>! There was an error with your attendance. Please try again!</p>
        <button onClick={ () => onLogin('login')}>
            Login Again
        </button>
      </main>
    )
}

export default LoginError;
