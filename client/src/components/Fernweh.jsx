import React, { useState, useEffect } from 'react';

export default function(){

  const [ project, setProject ] = useState(0);

    return(
      <>
        <div id = "fernwehInfo">
          <p>Fernweh is a simple, elegant website designed to capture what you like to see about travel. It then recommends curated locations, both well-known and lesser known, that suit your taste!</p>


          <a href="https://github.com/jmccra/Fernweh">Fernweh Github Page</a>

          <div className = "videoContainer">
            <img className = "fernwehImages" src="./images/Fernweh3.jpg"/>

          </div>
        </div>
      </>
    )
}




