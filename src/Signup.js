import React, { useState } from 'react'
import Header, {title} from './Header'
import SignupStore from './SignupStore'

const Signup = function(props) {
    const [signUpForm, setSignUpForm] = useState({});
    SignupStore.subscribe(() => console.log((SignupStore.getState())));
    const handleChange = e => {
        SignupStore.dispatch({type: 'CREATE', 
        signUpForm: {
            ...signUpForm,
            [e.target.name]: e.target.value} 
        })
    }

    const handlePasswordChange = e => {
        const basePassword = new Buffer(e.target.value).toString('base64')
        setSignUpForm({
            ...signUpForm,
            password: basePassword,
            passwordCheck: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        
        const formData = new FormData();
        formData.append('username', signUpForm.username);
        formData.append('password', signUpForm.password);
        formData.append('verifyPassword', signUpForm.verifyPassword);
        formData.append('firstName', signUpForm.firstName);
        formData.append('lastName', signUpForm.lastName);
        formData.append('phone', signUpForm.phone);
        const response = await fetch('http://localhost:3000/signup', { method: 'POST', body: formData });
        
        if (response.status === 400) {
            alert('That username is already taken! Please try again or try resetting your password!')
        } else if (response.status === 200) {
            alert('Sign Up Successful!')
            props.setRoute('login')
        }
    }

    const checkPassword = () => {
       return signUpForm.passwordCheck===signUpForm.verifyPassword
    }

        return(
            <main id="container">
                <Header title={props.title} />
                <form method="post" id="signup">
                    <div className="col">
                        <label for="username">Username:</label>
                        <input onChange={handleChange} type="email" name="username" id="username" placeholder="Enter your email" required />
                    </div>
                    <div className="col">
                        <label for="password">Password:</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="col">
                        <label for="verifyPassword">Password Confirmation:</label>
                        <input onChange={handleChange} type="password" name="verifyPassword" id="verify-password" placeholder="Confirm your password" required />
                    </div>
                    <div className="col">
                        <label for="firstName">First Name:</label>
                        <input onChange={handleChange} type="text" name="firstName" id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="col">
                        <label for="lastName">Last Name:</label>
                        <input onChange={handleChange} type="text" name="lastName" id="last-name" placeholder="Enter your last name" required />
                    </div>
                    <div className="col">
                        <label for="phone">Phone:</label>
                        <input onChange={handleChange} type="tel" name="phone" id="phone" placeholder="Enter a your phone number without hyphens" required />
                    </div>
                </form>
                <button 
                    className="btn" 
                    style={(checkPassword() && signUpForm.password)? undefined :{'background': 'palevioletred'}}
                    onClick={handleSubmit} 
                    >
                    {(checkPassword() && signUpForm.password)?'Submit':'Passwords Must Match'}
                </button>
                <p>Already have an account?</p>
                <button onClick={ () => props.setRoute('login')} className="btn">Login!</button>
            </main>
        )
    
}

export default Signup;