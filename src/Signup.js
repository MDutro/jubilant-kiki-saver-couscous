import React from 'react'
import Header from './Header'

function Signup(){
    return(
        <div>
            <Header />
            <main id="container">
                <h1>Sign Up</h1>
                <form action="/signup" method="post" id="signup">
                    <div claseName="col">
                        <label for="username">Username:</label>
                        <input type="email" name="username" id="username" placeholder="Enter your email" required />
                    </div>
                    <div claseName="col">
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <div claseName="col">
                        <label for="verifyPassword">Password Confirmation:</label>
                        <input type="password" name="verifyPassword" id="verify-password" placeholder="Confirm your password" required />
                    </div>
                    <div claseName="col">
                        <label for="firstName">First Name:</label>
                        <input type="text" name="firstName" id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div claseName="col">
                        <label for="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="last-name" placeholder="Enter your last name" required />
                    </div>
                    <div claseName="col">
                        <label for="phone">Phone:</label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter a your phone number without hyphens" required />
                    </div>
                    <div>
                        <input type="submit" value="Submit" claseName="btn" />
                    </div>
                </form>
                <p>Already have an account?</p>
                <a href="/login"><button claseName="btn">Sign in!</button></a>
            </main>
        </div>
    )
}

export default Signup