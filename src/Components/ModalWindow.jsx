import React from 'react';
import "../styles/App.css";

function ModalWindow() {

  return (
    <div style={{id:'modal'}}>
        <div style={{id:'modalContent'}}>
            <span style={{float:"right", fontSize:"30px", color:"grey", cursor:"pointer"}}>X</span>
        </div>
        
    </div>
  )
}

export default ModalWindow