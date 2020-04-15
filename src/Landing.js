import React from 'react'
import Header from './Header'
import './App.css'
import Section from './Section'

function Main(props){
  return(
    <main>
      <Header title={props.title}/>
      <Section onLogin={props.onLogin}/> 
    </main>
  )
}
export default Main
