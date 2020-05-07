import React from 'react'
import Header from './Header'

function Success(props) {
  const date = new Date()
  const timeInHours = (date.getHours() > 12) ? date.getHours() -12  : date.getHours()
  const timeInMinutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
  const timeOfDay = (date.getHours() > 12) ? "P.M."  : "A.M."
    return(
      <main id="container">
        <Header title={props.title} />
        <p>{`Hey ${props.store.getState().user.firstName}! Your attendance has been logged at ${timeInHours}:${timeInMinutes} ${timeOfDay}`}</p>
        <img src={`http://localhost:3000${props.store.getState().user.selfiePath}`} alt="Your uploaded selfie" width="520" height="auto" />
        <button className="btn" onClick={() =>props.setRoute('changePass')}>
            Change Password
        </button>
        <button className="btn" onClick={() =>props.onLogout('main')}>
            Logout
        </button>
      </main>
    )
}

export default Success