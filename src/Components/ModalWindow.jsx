import React from 'react';
import "../styles/App.css";

function ModalWindow(props) {
  let ModalWindow = props.src;
  let newBlock = props.block;
  let changer = props.func;

console.log(props.block); 
  return (
    <>
    <div style={{display:newBlock}} className={"modal"}>
        <div className={'modalContent'}>
            <span onClick={()=>{changer("none")}} className={'close'}>X</span>
            <img width={'100%'} height={'100%'} src={ModalWindow} alt="phot" />
        </div>
        
    </div>
    </>
    
    
    
  )
}

export default ModalWindow