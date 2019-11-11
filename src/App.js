import React from 'react';
import Header from './header.js';
import Education from './education.js';
import Employment from './employment.js';
import Contact from './contact.js';

function App() {
  return (
    <main className='main'>
      <Header></Header>      
      <Education></Education>
      <Employment></Employment>
      <Contact></Contact>
    </main>
  );
}

export default App;
