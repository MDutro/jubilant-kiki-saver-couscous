import React from 'react'
import Main from './Landing'
import Login from './Login'
import Success from './Success'
import LoginError from './LoginError'
import './index.css';
import Signup from './Signup'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            route: 'main'
        }
    }

    setRoute = (newRoute) => {
        this.setState({
            route: newRoute
        })
    }

    onSuccessfulLogin = () => {
        this.setRoute('success')
        console.log('login success')
    }
    
    render() {
        switch (this.state.route) {
            case 'main':
                return <Main onLogin = { this.setRoute } /> 
            case 'success':
                return <Success onLogout = { this.setRoute } />
            case 'login':
                return <Login loginSuccess = {this.onSuccessfulLogin} onSuccess={this.setRoute} loginError = { this.setRoute } /> 
            case 'error':
                return <LoginError onLogin={this.setRoute} loginError = { this.setRoute } />
            case 'signup':
                return <Signup onSignup={this.setRoute} />
            default :
                return <div>404</div>
        }
    }
}

export default App;