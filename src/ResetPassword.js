import React, { useState } from 'react';
import Header from './Header'

function ResetPassword(props) {

  const [email, setEmail] = useState('')

  async function handleSubmit() {
    
    const formData = new FormData();
    formData.append('email', email);

    const response = await fetch('http://localhost:3000/reset', {
      method: 'POST',
      body: formData
    });
    console.log(response);
  }

  return (
    <div id="container">
      <Header title={props.title}/>
      <div className="col">
        <label htmlFor="email">Email:</label>
        <input onChange={e => setEmail(e.target.value)  } id="email" name="email" type="email" id="email" placeholder="email address" required />
      </div>
      <button onClick={handleSubmit} className="btn">Reset Password</button>
      <p>Don't want to reset your password?</p>
      <button onClick={ () => props.setRoute('main')} className="btn">Back to Home</button>
    </div>
  );

}

export default ResetPassword;