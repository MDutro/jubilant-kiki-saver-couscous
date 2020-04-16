import React, { useState } from 'react'
import Main from './Landing'
import Login from './Login'
import Success from './Success'
import LoginError from './LoginError'
import Signup from './Signup'
import ResetPassword from './ResetPassword'
import './index.css';

const App = function() {
    const [route, setRoute] = useState('main');
    const [user, setUser] = useState(null)
    const [title, setTitle] = useState('');

    const onSuccessfulLogin = (username, selfiePath) => {
        setUser([
            ['username', username],
            ['selfiePath', selfiePath]
        ]);
        setRoute('success')
    }

    const onLogout = () => {
        setUser({ user: null });
        setRoute('main')
    }

    const handleTitleChange = e => {
        setTitle({ title: e.target.value })
    }

    const renderSwitch = (route) => {
        switch (route) {
            case 'main':
                return <Main onLogin = { setRoute }
                title = "Welcome MS Coding Academy Students" / >
            case 'success':
                return <Success user = { user }
                onLogout = { onLogout }
                title = "Login Successful" / >
            case 'login':
                return <Login loginSuccess = { onSuccessfulLogin }
                setRoute = { setRoute }
                title = "Login" / >
            case 'error':
                return <LoginError onLogin = { setRoute }
                loginError = { setRoute }
                title = "Login Unsuccessful" / >
            case 'signup':
                return <Signup onSignup = { setRoute }
                setRoute = { setRoute }
                title = "Sign Up" / >
            case 'reset':
                return <ResetPassword setRoute = { setRoute }
                title = "Reset Password" / >
            default:
                return <div> 404 </div>
        }
    }

    return (
        <div> {renderSwitch(route)} </div> 
    )
}

export default App;