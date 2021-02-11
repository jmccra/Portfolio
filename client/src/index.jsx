import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Info from './components/Info';
import Projects from './components/Projects';

function Index(){
    return(
      <>
      <div id="top"/>
      <About />
      <Info />
      <Projects />
      </>
    )
}



ReactDOM.render(<Index />, document.getElementById('root'));