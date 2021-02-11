import React, { useState, useEffect } from 'react';

export default function(){

  const [ project, setProject ] = useState(0);

    return(
      <>
        <div id = "giglInfo">
          <p>Gigl is a marketplace that allows clients to book freelancers for their upcoming events!</p>

          <p>Have an event coming up and need talent? Gigl is a platform that connects clients to local freelancers such as photographers, bartenders, artists, and entertainers. Our website allows clients to post upcoming gigs and select a performer that meets their needs. It also permits talented peformers to create a profile, view gigs in their area, and apply for them!</p>

          <a href="https://hratx47-gigl.herokuapp.com/">Gigl Website</a>

          <div className = "videoContainer">
            <img className = "giglgif" src="./images/Gigl1.gif"/>
            <img className = "giglgif" src="./images/Gigl2.gif"/>
          </div>
        </div>
      </>
    )
}




