import React from 'react'
import Main from './Main'
import Login from './Login'
import Success from './Success'
import LoginError from './LoginError'
import './App.css'
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
    
    render() {
        switch (this.state.route) {
            case 'main':
                return <Main onLogin = { this.setRoute } /> 
            case 'success':
                return <Success onLogout = { this.setRoute } />
            case 'login':
                return <Login onSuccess={this.setRoute} loginError = { this.setRoute } />
            case 'error':
                return <LoginError onLogin={this.setRoute} loginError = { this.setRoute } />
            case 'signup':
                return <Signup onSignup={this.setRoute} />
        }
    }
}

export default App;