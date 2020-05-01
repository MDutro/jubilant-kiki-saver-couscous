import React, { useState, useEffect } from 'react'
import Main from './Landing'
import Login from './Login'
import Success from './Success'
import LoginError from './LoginError'
import Signup from './Signup'
import ResetPassword from './ResetPassword'
import ChangePassword from './ChangePassword'
import Router from './Router'
import './index.css';

const App = function() {
    const [route, _setRoute] = useState('main');
    const [user, setUser] = useState(null)
    const [magic, setMagic] = useState('')
    //const [title, setTitle] = useState('');
    const setRoute = (route) => {
        //sideeffects
        _setRoute(route)
       window.history.pushState(null, route, route)
    }

    const resetRoute = (route) => {
        _setRoute(route)
        window.history.replaceState(null,'', `http://localhost:3001/${route}`)
    }

    const onSuccessfulLogin = (firstName, selfiePath, username) => {
        setUser([
            ['firstName', firstName],
            ['selfiePath', selfiePath],
            ['username', username]
        ]);
        setRoute('success')
    }

    const onLogout = () => {
        setUser({ user: null });
        setRoute('main')
    }
    useEffect(() => {
        Router(route, setRoute, resetRoute, window.location.href, setMagic)
    }, [])
    /* const handleTitleChange = e => {
        setTitle({ title: e.target.value })
    } */

    const renderSwitch = (route) => {
        let pageRoute;
        switch (route) {
            case 'main':
                pageRoute = <Main onLogin={setRoute}
                    title="Welcome MS Coding Academy Students" />
                break;
            case 'success':
                pageRoute = <Success user={user}
                    onLogout={onLogout}
                    setRoute={setRoute}
                    title="Login Successful" />
                break;
            case 'login':
                pageRoute = <Login loginSuccess={onSuccessfulLogin}
                    setRoute={setRoute}
                    title="Login" />
                break;
            case 'error':
                pageRoute = <LoginError onLogin={setRoute}
                    loginError={setRoute}
                    title="Login Unsuccessful" />
                break;
            case 'signup':
                pageRoute = <Signup onSignup={setRoute}
                    setRoute={setRoute}
                    title="Sign Up" />
                break;
            case 'reset':
                pageRoute = <ResetPassword setRoute={setRoute}
                    title="Reset Password" />
                break;
            case 'changePass':
                pageRoute = <ChangePassword setRoute={setRoute} 
                    user={user && user[2][1]}
                    magic={magic}
                    title="Change Password" />
                break;
            default:
                pageRoute = <div> 404 </div>
                break;
        }
        return pageRoute;
    }
    //console.log(window.location.href.split('/').pop());
    console.log(user)
    return (
        <div> {renderSwitch(route)}  </div> 
    )
}

export default App;