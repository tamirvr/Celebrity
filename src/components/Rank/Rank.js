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