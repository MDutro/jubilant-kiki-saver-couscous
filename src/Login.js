import React, {useState, useEffect} from 'react'
import Header from './Header'
/* onSuccess, loginError */
const Login = function(props) {
    
    const [loginForm, setLoginForm] = useState({});
    const [selfie, setSelfie] = useState({});
    const [isPassword, setIsPassword] = useState(false);

    const handleChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
            })
      }
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
        await gpsFunction();
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
            
            /* const formData = new FormData();
            formData.append('user', 1)
            fetch('http://localhost:3000/attendance', {
                method: 'POST',
                body: formData
            }).then(data => console.log(data)) */
            
            props.loginSuccess(body.username, body.selfiePath, loginForm.username)
        }
        console.log(response);
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
                        <input onChange={handleChange} type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="col">
                        <label htmlFor="selfie">Selfie:</label>
                        <input onChange={e => {setSelfie({selfie: e.target.files})}} type="file" name="selfie" id="selfie" accept="image/png image/jpeg" className="btn" required />
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
                <button onClick={ () => props.setRoute('error') }>
                    Error
                </button>
            </main>
            )

}

export default Login