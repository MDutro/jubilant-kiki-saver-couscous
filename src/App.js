import React from 'react';
import logo from './logo.png'
import './App.css';

function App() {
  return (
    <main>
      {/* <Header /> */}
      <header>
        <img src={logo} />
        <h1>
        Header component here
        </h1>
      </header>

      {/* <Section /> */}
      <article>
        <p>
        Section component here with buttons components
        </p>
      </article>
    </main>
  );
}

export default App;
