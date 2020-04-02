import React from 'react'

function Login(){
    return(
    <main>
        <h1>Login</h1>
        <form action="/login" method="post" id="login" className="col" encType="multipart/form-data">
            <div className="col">
                <label for="username">Username:</label>
                <input type="email" name="username" placeholder="Enter your email" required />
            </div>
            <div className="col">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="col">
                <label for="selfie">Selfie:</label>
                <input type="file" name="selfie" id="selfie" accept="image/png image/jpeg" className="btn" required />
            </div>
            <div className="buttons">
                <input type="hidden" name="gps" />
                <input type="submit" value="Submit" className="btn" />
            </div>
        </form>
        <section className="login-button">
            <p>Don't have an account?</p>
            <a href="/signup"><button className="btn">Sign up!</button></a>
        </section>
    </main>
    )
}

export default Login