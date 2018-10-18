import React from 'react';
import './Face.css';
import img from 'react-image-resizer';


const Face = ({imageUrl,box}) =>  {

   if(box.Name){
    return (
       <div className="">
  <div className="">
    <a className="btn" href="#open-modal"><i className="fas fa-external-link-alt"></i> Press Here To Find Out</a>
     </div>

  <div id="open-modal" className="modal-window">
  <div>
    <a href="#" title="Close" className="modal-close">Close</a>
    
      <div className = ' ma'>
     <div className='absolute center '>
     <img id='inputimage' alt= '' src = {imageUrl} width='250px' height='20px'/>
      <div className='f3 link dim black underline pa3 pointer left'>{box.Name} </div>
       </div>
      </div>
          </div>

 </div>
 </div>

    );
}

 else
{
  return (

      <div className="">
  <div className="">
    <a className="btn" href="#open-modal"><i className="fas fa-external-link-alt"></i>Press Here To Find Out</a>
     </div>

  <div id="open-modal" className="modal-window">
  <div>
    <a href="#" title="Close" className="modal-close">Close</a>



     <div className = 'center '>
     <div className='d1'>
     <img id='inputimage' alt= '' style={{ height: 0, width: 0 }}/>
      
      <div> Please Try again. I didn't get that </div>
       </div>
      </div>
          </div>

 </div>
 </div>
      );
}
  }


export default Face;
