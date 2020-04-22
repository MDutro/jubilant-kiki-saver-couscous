import React, { useState } from 'react';
import Header from './Header';

const ChangePassword = (props) => {

  const[passwordForm, setPasswordForm] = useState({});

  const handleChange = e => {
    setPasswordForm({
        ...passwordForm,
        [e.target.name]: e.target.value
        })
  }

  const handleSubmit = async () => {
    
    const formData = new FormData();
        formData.append('oldPassword', passwordForm.oldPassword);
        formData.append('newPassword', passwordForm.newPassword);
        formData.append('verifyPassword', passwordForm.verifyPassword);
        console.log(passwordForm);

        const response = await fetch('http://localhost:3000/change', {
            method: 'POST',
            body: formData
        });
        console.log(response);
  }


    return(
      <div id="container">
        <Header title={props.title} />
        <div className="col">
          <label for="oldPassword">Old Password:</label>
          <input onChange={handleChange} type="password" name="oldPassword" id="oldPassword" placeholder="Enter your old password" required />
        </div>

        <div className="col">
          <label for="newPassword">New Password:</label>
          <input onChange={handleChange} type="password" name="newPassword" id="newPassword" placeholder="Enter your new password" required />
        </div>
            <div className="col">
              <label for="verifyPassword">New Password Confirmation:</label>
              <input onChange={handleChange} type="password" name="verifyPassword" id="verifyPassword" placeholder="Confirm your password" required />
          </div>
        <button onClick={handleSubmit} className="btn">Reset Password</button>
      </div>
    )
  }


export default ChangePassword;