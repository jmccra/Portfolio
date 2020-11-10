import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'

function Index(){
    return(
      <>
      Hello
      <About />
      </>
    )
}



ReactDOM.render(<Index />, document.getElementById('root'));