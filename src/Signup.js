import React, { useState } from 'react'
import Header from './Header'

const Signup = function() {
    const [signUpForm, setSignUpForm] = useState({});
    const [password, setPassword] = useState(true);

    const handleChange = e => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
            })
    }
    console.log(signUpForm);

    const handleSubmit = async (e) => {
        
        const formData = new FormData();
        formData.append('username', signUpForm.username);
        formData.append('password', signUpForm.password);
        formData.append('verifyPassword', signUpForm.verifyPassword);
        formData.append('firstName', signUpForm.firstName);
        formData.append('lastName', signUpForm.lastName);
        formData.append('phone', signUpForm.phone);
        const response = await fetch('http://localhost:3000/signup', { method: 'POST', body: formData });
        console.log(response);  
    }

    const checkPassword = () => {
       return signUpForm.password===signUpForm.verifyPassword
    }

        return(
            <div>
                <Header />
                <main id="container">
                    <h1>Sign Up</h1>
                    <form method="post" id="signup">
                        <div className="col">
                            <label for="username">Username:</label>
                            <input onChange={handleChange} type="email" name="username" id="username" placeholder="Enter your email" value={signUpForm.username} required />
                        </div>
                        <div className="col">
                            <label for="password">Password:</label>
                            <input onChange={handleChange} type="password" name="password" id="password" placeholder="Enter your password" value={signUpForm.password} required />
                        </div>
                        <div className="col">
                            <label for="verifyPassword">Password Confirmation:</label>
                            <input onChange={handleChange} type="password" name="verifyPassword" id="verify-password" placeholder="Confirm your password" value={signUpForm.verifyPassword} required />
                        </div>
                        <div className="col">
                            <label for="firstName">First Name:</label>
                            <input onChange={handleChange} type="text" name="firstName" id="first-name" placeholder="Enter your first name" value={signUpForm.firstName} required />
                        </div>
                        <div className="col">
                            <label for="lastName">Last Name:</label>
                            <input onChange={handleChange} type="text" name="lastName" id="last-name" placeholder="Enter your last name" value={signUpForm.lastName} required />
                        </div>
                        <div className="col">
                            <label for="phone">Phone:</label>
                            <input onChange={handleChange} type="tel" name="phone" id="phone" placeholder="Enter a your phone number without hyphens" value={signUpForm.phone} required />
                        </div>
                    </form>
                    <button 
                        className="btn" 
                        style={(checkPassword() && signUpForm.password)? undefined :{'background': 'palevioletred'}}
                        onClick={handleSubmit} 
                        disabled={signUpForm.password !== signUpForm.verifyPassword}>
                        {(checkPassword() && signUpForm.password)?'Submit':'Passwords Must Match'}
                    </button>
                    <p>Already have an account?</p>
                    <a href="/login"><button className="btn">Sign in!</button></a>
                </main>
            </div>
        )
    
}

export default Signup;