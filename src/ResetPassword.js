import React from 'react';


export default class ResetPassword extends React.Component {

  constructor(props) {
    super(props)  
    this.state = {email: null}
  }

  handleChange = (e) => {
    let email = e.target.value;
    this.setState({ email: email
    })
  }

  handleSubmit = async () => {
    
    const formData = new FormData();
        formData.append('email', this.state.email);
        console.log(this.state);

        const response = await fetch('http://localhost:3000/reset', {
            method: 'POST',
            body: formData
        });
        console.log(response);
  }

  render() {
    return(
      <div id="container">
        <input onChange={this.handleChange} id="email" name="email" type="email" placeholder="email address"/>
        <button onClick={this.handleSubmit} className="btn">Reset Password</button>
      </div>
    )
  }
  


}