import React, {useState} from 'react'
import styled from 'styled-components'
import logo from './logo.png'


function UnstyledHeader(props){
    return(
      <header id="banner">
        <img id="logo" src={logo} alt=""/>
        <h1>{props.title}!</h1>
      </header>
    )
}

const Header = styled(UnstyledHeader)`

#banner, #one {
    display: flex;
    flex-direction: column;
    align-items: center; 
}

#logo{
    margin: 0px auto;
    height: 5vh
}
`

export default Header