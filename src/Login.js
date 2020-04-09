import React from 'react'
import Header from './Header'
/* onSuccess, loginError */
class Login extends React.Component {
    /* console.log(loginError); */
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            selfie: '',
            gps: '',
            isBadPassword: false
        }
    }
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                   gps: `${position.coords.latitude}, ${position.coords.longitude}`
               }) 
                console.log(this.state.gps)
            });
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async () => {
        
        const formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('selfie', this.state.selfie[0]);
        formData.append('gps', this.state.gps);
        console.log(this.state);
        
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: formData
        });
        if(response.status === 401) {
            this.setState({
                isBadPassword: true
            })
        }else if(response.status === 200) {
            this.props.loginSuccess()
        }
        console.log(response);
        
    }
    handleImage = (e) => {
        this.setState({
            selfie: e.target.files
        })
    }
    render() {
        return(
            <main>
                <Header />
                <h1>Login</h1>
                <form method="post" id="login" className="col" encType="multipart/form-data">
                    <div className="col">
                        <label for="username">Username:</label>
                        <input onChange={this.handleChange} type="email" name="username" placeholder="Enter your email" value={this.state.username} required />
                    </div>
                    <div className="col">
                        <label for="password">Password:</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password" value={this.state.password} placeholder="Enter your password" required />
                    </div>
                    <div className="col">
                        <label for="selfie">Selfie:</label>
                        <input onChange={this.handleImage} type="file" name="selfie" id="selfie" accept="image/png image/jpeg" className="btn" required />
                    </div>
                    <div className="buttons">
                        <input onChange={this.handleChange} type="hidden" name="gps" value={this.state.gps}/>
                    </div>
                </form>
                <button className="btn" onClick={this.handleSubmit}>Login</button>
                <div>{this.state.isBadPassword&&'Incorrect Password'}</div>
                <section className="login-button">

                    <p>Don't have an account?</p>
                    <a href="/signup"><button className="btn">Sign up!</button></a>
                    </section>
                    <button onClick={ () => this.props.loginError('error') }>
                    Error
                </button>
            </main>
            )
    }
    
}

export default Login