import React, { useState, useEffect } from 'react';
import Gigl from './Gigl';
import Fernweh from './Fernweh';
import ArrtoZone from './ArrtoZone';

export default function(){

  const [ project, setProject ] = useState(0);

    return(
      <>
        <div className = "about" id="projectsTab">
          <div className = "padding">
            <div className = "hello">Projects</div>

            <div className = "projectsBar">
            <div className = "projectClick" id = "gigl" onClick={()=>{setProject(1)}}><span className="link" id = "giglLink">Gigl</span></div>
            <div className = "projectClick" id = "fernweh" onClick={()=>{setProject(2)}}><span className="link" id = "fernwehLink">Fernweh</span></div>
            <div className = "projectClick" id = "ArrtoZone" onClick={()=>{setProject(3)}}><span className="link" id = "arrtoZoneLink">ArrtoZone</span></div>
            </div>
            {project === 1 ? <Gigl/> : ''}
            {project === 2 ? <Fernweh/> : ''}
            {project === 3 ? <ArrtoZone/> : ''}
          </div>
        </div>
      </>
    )
}




