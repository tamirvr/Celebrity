import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './a.gif';

const Logo = () =>  {
    return (
	<div className = 'ma1 mt0'>
      <Tilt className="Tilt br1 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 250 }} >
<div className="Tilt-inner pa3"> <img style= {{ paddingBottom:'5px'}} alt = 'logo' src = {brain}/> </div>
</Tilt>
 
      </div>
    );
  
}

export default Logo;
