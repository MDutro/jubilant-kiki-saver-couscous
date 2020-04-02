import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'

function unstyledHeader(){
    return(
      <header id="banner">
        <img id="logo" src={logo} />
        <h1>
        Welcome MS Coding Academy Students!
        </h1>
      </header>
    )
}

const Header = styled(unstyledHeader)`
h1 {
    color: #48A2B3;
    text-align: center;
    font-size: 3em;
}

#banner, #one {
    display: flex;
    flex-direction: column;
    align-items: center; 
}

#logo{
    margin: 0px auto;
}
`

export default Header