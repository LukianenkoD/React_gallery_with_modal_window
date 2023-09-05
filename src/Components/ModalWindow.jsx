import React, {useState} from 'react';
import "../styles/App.css";

function ModalWindow(props) {
  const [displays, setDisplay] = useState('block');
console.log(displays);
  return (
    <div style={{display:displays}} className={"modal"}>
        <div className={'modalContent'}>
            <span onClick={()=>setDisplay('none')} className={'close'}>X</span>
            <img width={'100%'} height={'100%'} src={"https://via.placeholder.com/600/92c952"} alt="phot" />
        </div>
        
    </div>
  )
}

export default ModalWindow