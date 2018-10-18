import React from 'react';

const Rank = ({ name, entries }) => {
  if(name.length){
  return (
    <div>
      <div className='white f3'>
        {`${name}, I've succesfully identified`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
      <div className = 'white f3'>
      images
	  <div className = 'white f3'>
      Find a celebrity picture and copy the url. As you press detect I will try to guess who you chose. 
        
      </div>
      </div>
    </div>
  );
}



else {
    return (
    <div>
      <div className='white f3'>
        {`Guest, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}
}
export default Rank;
