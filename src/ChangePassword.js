import React from 'react';


export default class ChangePassword extends React.Component {

  constructor(props) {
    super(props)  
    this.state = {oldPassword: "", newPassword: "", verifyPassword: ""}
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
        [name]: value
    })
  }

  handleSubmit = async () => {
    
    const formData = new FormData();
        formData.append('oldPassword', this.state.oldPassword);
        formData.append('newPassword', this.state.newPassword);
        formData.append('verifyPassword', this.state.verifyPassword);
        console.log(this.state);

        const response = await fetch('http://localhost:3000/change', {
            method: 'POST',
            body: formData
        });
        console.log(response);
  }

  render() {
    return(
      <div id="container">
        <div className="col">
          <label for="oldPassword">Old Password:</label>
          <input onChange={this.handleChange} type="password" name="oldPassword" id="oldPassword" placeholder="Enter your old password" value={this.state.oldPassword} required />
        </div>

        <div className="col">
          <label for="newPassword">New Password:</label>
          <input onChange={this.handleChange} type="password" name="newPassword" id="newPassword" placeholder="Enter your new password" value={this.state.newPassword} required />
        </div>
            <div className="col">
              <label for="verifyPassword">New Password Confirmation:</label>
              <input onChange={this.handleChange} type="password" name="verifyPassword" id="verifyPassword" placeholder="Confirm your password" value={this.state.verifyPassword} required />
          </div>
        <button onClick={this.handleSubmit} className="btn">Reset Password</button>
      </div>
    )
  }
  


}