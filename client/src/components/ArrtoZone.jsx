import React, { useState, useEffect } from 'react';

export default function(){

  const [ project, setProject ] = useState(0);

    return(
      <>
        <div id = "arrtoZoneInfo">
          <p>ArrtoZone is a pirate-themed recreation of AutoZone's website!</p>

          <p>This recreation, complete with nautical themes, was temporarily deployed using Docker, and built with service-oriented architecture!  I was personally responsible for much of the Front-end direction of the website, as well as the functionality of the Checkout component!</p>

          <a href="https://github.com/AutoZone-FEC/AutoZone-replica-SOA">ArrtoZone Github Page</a>

          <div className = "videoContainer">
            <img className = "arrtoZonegif" src="./images/ArrToZone.gif"/>
            <img className = "arrtoZonegif" src="./images/ArrToZone2.gif"/>
          </div>
        </div>
      </>
    )
}




