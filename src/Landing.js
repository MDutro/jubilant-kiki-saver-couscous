import React from 'react'
import Header from './Header'
import './App.css'
import Section from './Section'

function Main({onLogin}){
  return(
    <main>
      <Header />
      <Section onLogin={onLogin}/> 
    </main>
  )
}
export default Main
