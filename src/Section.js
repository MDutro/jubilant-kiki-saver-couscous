import React from 'react'
import styled from 'styled-components'

function unstyledSection({onLogin}){
    return(
    <div id="one">
        <p>
        Please log your attendance today.
        </p>
        <section className="buttons">
            <button className="btn" onClick={()=> onLogin('signup')}>
            Signup
            </button>
            <button className="btn" onClick={()=> onLogin('login')}>
            Login
            </button>  

    </section>
    </div>
    )
}

const Section = styled(unstyledSection)`
#banner, #one {
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.btn {
    width: 250px;
    background: #48A2B3;
    padding: 3px;
    margin: 5px;
    color: white;
    font: inherit;
    font-family: 'Fira Code', 'Courier New', Courier, monospace;
    text-decoration: none;
    border-radius: 3px;
    align-self: center;
}

`

export default Section