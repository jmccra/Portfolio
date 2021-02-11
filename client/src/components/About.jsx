import React, { useState, useEffect } from 'react';

export default function(){
    return(
      <>
        <div className = "about">
          <div id = "topBar">
            <div id = "name"><img id = "julian" src="./images/Julian.png"/></div>
            <div id = "projects">Projects</div>
          </div>


          <div id = "informationBox">
            <div id = "information1">
            <div className = "hello">Hello!</div>
            I'm Julian McCrary, a software engineer specializing in creating dynamic, intuitive, and attractive interfaces that are appealing to users of all technological backgrounds.
            </div>
            <div id = "information2">
              <div id = "linkedIn"><a href="https://linkedin.com/in/julianmccrary"><img className = "icon" src = "./images/LinkedIn.png"/></a></div>
              <div id = "github"><a href="https://github.com/jmccra"><img className = "icon" src = "./images/github.png"/></a></div>
              <div id = "email"><a href="mailto:mccrary.julian@gmail.com"><img className = "icon" src = "./images/email.png"/></a></div>
            </div>
          </div>
        <div id = "soundBar"></div>
        </div>

      </>
    )
}




