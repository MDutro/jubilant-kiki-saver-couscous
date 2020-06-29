import React, {useState, useEffect, useMemo} from 'react'
import Header from './Header'
import UserStore from './UserStore'
/* onSuccess, loginError */
const Login = React.memo(function(props) {
    
    const [loginForm, setLoginForm] = useState({});
    const [selfie, setSelfie] = useState({});
    const [selfieFilename, setSelfieFilename] = useState('');
    const [isPassword, setIsPassword] = useState('');

    const handleChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
            })
        }
    const getFilename = async () => {
    const fullPath = document.getElementById('selfie')?.value;
    if (fullPath) {
        const startIndex = (fullPath.indexOf('\\') >= 0 ? (fullPath.lastIndexOf('\\')+1) : fullPath.lastIndexOf('/'));
        let filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(2);
        }
        setSelfieFilename(filename);
        console.log(filename)
    }
    }

    const handleSelfieChange = e => {
    setSelfie({selfie: e.target.files})
    setLoginForm({
        ...loginForm,
        selfie: selfie
        });
    getFilename();
    }

    const handlePasswordChange = e => {
        const basePassword = new Buffer(e.target.value).toString('base64')
        setLoginForm({
            ...loginForm,
            password : basePassword
            })
    }
    useEffect( () => {
        gpsFunction()
    }, [])

    const gpsFunction = async () => {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition((position) => {
                setLoginForm({
                    ...loginForm,
                    gps: `${position.coords.latitude}, ${position.coords.longitude}`
                })
            });
        }
    }
        
    const handleSubmit = async () => {
        
        const formData = new FormData();
        formData.append('username', loginForm.username);
        formData.append('password', loginForm.password);
        formData.append('selfie', selfie.selfie[0]);
        formData.append('gps', loginForm.gps);
        console.log(loginForm);
        
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: formData
        });
        const body = await response.json();
        if (response.status === 401) {
            setIsPassword(true);
        } else if (response.status === 200) {
    
            props.loginSuccess(body.username, body.selfiePath, loginForm.username)

        }
        console.log(body);
    }

   



    return(
            <main id="container">
                <Header title={props.title} />
                <form method="post" id="login" className="col" encType="multipart/form-data">
                    <div className="col">
                        <label htmlFor="username">Username:</label>
                        <input onChange={handleChange} type="email" name="username" id="username" placeholder="Enter your email"  required />
                    </div>
                    <div className="col">
                        <label htmlFor="password">Password:</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="col">
                        <input onChange={handleSelfieChange} type="file" name="selfie" id="selfie" accept="image/png image/jpeg" className="btn" required />
                        <label htmlFor="selfie" className='btn'>
                            <i className="material-icons material-font-size">
                                add_photo_alternate
                            </i> &nbsp;
                            Choose Selfie
                        </label>
                        <p id='selfie-filename'>{(selfieFilename) ? <strong>{selfieFilename}</strong> : 'No Selfie Chosen'}</p>
                    </div>
                </form>
                <button className="btn" onClick={handleSubmit}>Submit</button>
                <div>{isPassword && 'Incorrect Password'}</div>
                <section className="login-button">
                    <p>Forgot your password?</p>
                    <button onClick={ () => props.setRoute('reset')} className="btn">Reset Password!</button>                   
                    <p>Don't have an account?</p>
                    <button onClick={ () => props.setRoute('signup')} className="btn">Sign up!</button>
                </section>
            </main>
            )


});

export default Login