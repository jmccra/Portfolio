import React, { useState, useEffect } from 'react';

export default function(){
    return(
      <>
        <div className = "about" id="describeMe">
        <div className = "padding">
        <div className = "hello">About Me</div>
        <div className = "left">
          <img src="./images/me.jpg" id="profilePic"/>
        </div>
        <div className = "right">
        <p>I am a full stack software engineer with a diverse background - I have previous work experience as a teacher, artist, and Registered Nurse.</p>
        <p>I have experience in multiple fields because I was searching for passion, which I have finally found in software engineering, but I picked up important tools along the way.</p>
        <p>As a teacher, I learned how to mentor others, and that I had more to learn from everyone around me.</p>
        <p>As an artist, I gained insight into design, as well as the knowledge that everything is subjective and open to interpretation.</p>
        <p>As a nurse, I learned how to work and deliver consistent quality in a fast-paced and stressful environment, as well as how to work as a team and cooperate with others.</p>
        <p>I know now that no matter how far I progress, I will constantly be learning, which means that there is infinite room to grow - an exciting prospect to me!</p>
        </div>
        </div>
        </div>
      </>
    )
}




