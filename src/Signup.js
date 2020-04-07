import React from 'react'
import Header from './Header'

class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            verifyPassword: '',
            firstName: '',
            lastName: '',
            phone: ''
        }
    }
    handleChange = (e)=> {
        let { name, value } = e.target;
        this.setState({
            [name]: value
       })
    }
    handleSubmit = async () => {
        const response = await fetch('http://localhost:3000/signup', { method: 'POST', body: this.state });
        console.log(response);
        
    }
    render() {
        return(
            <div>
                <Header />
                <main id="container">
                    <h1>Sign Up</h1>
                    <form method="post" id="signup">
                        <div className="col">
                            <label for="username">Username:</label>
                            <input onChange={this.handleChange} type="email" name="username" id="username" placeholder="Enter your email" value={this.state.username} required />
                        </div>
                        <div className="col">
                            <label for="password">Password:</label>
                            <input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Enter your password" value={this.state.password} required />
                        </div>
                        <div className="col">
                            <label for="verifyPassword">Password Confirmation:</label>
                            <input onChange={this.handleChange} type="password" name="verifyPassword" id="verify-password" placeholder="Confirm your password" value={this.state.verifyPassword} required />
                        </div>
                        <div className="col">
                            <label for="firstName">First Name:</label>
                            <input onChange={this.handleChange} type="text" name="firstName" id="first-name" placeholder="Enter your first name" value={this.state.firstName} required />
                        </div>
                        <div className="col">
                            <label for="lastName">Last Name:</label>
                            <input onChange={this.handleChange} type="text" name="lastName" id="last-name" placeholder="Enter your last name" value={this.state.lastName} required />
                        </div>
                        <div className="col">
                            <label for="phone">Phone:</label>
                            <input onChange={this.handleChange} type="tel" name="phone" id="phone" placeholder="Enter a your phone number without hyphens" value={this.state.phone} required />
                        </div>
                    </form>
                    <button className="btn" onClick={this.handleSubmit}>Submit New</button>
                    <p>Already have an account?</p>
                    <a href="/login"><button className="btn">Sign in!</button></a>
                </main>
            </div>
        )
}
    
}

export default Signup