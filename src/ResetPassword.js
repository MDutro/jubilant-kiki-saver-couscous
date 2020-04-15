import React, { useState } from 'react';

function ResetPassword() {

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
      <input onChange={e => setEmail(e.target.value)  } id="email" name="email" type="email" placeholder="email address" />
      <button onClick={handleSubmit} className="btn">Reset Password</button>
    </div>
  );

}

export default ResetPassword;