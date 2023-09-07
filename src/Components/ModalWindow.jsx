import React, {useState, useRef, useEffect} from 'react';
import "../styles/App.css";
// import Choice from './Choice';
// import App from '../App';

function ModalWindow(props) {
  let ModalWindow = props.src;
  let newBlock = props.block;

  // const prevPropsRef = useRef(null);

  // useEffect(()=>{
  //   prevPropsRef.current = props;
  // })

  // let newBlock = props.block;
  // console.log(ModalWindow);
  // console.log(newBlock);
  // const [start, setStart] = useState();
  // console.log(start);
 
  // if(ModalWindow){
  //   setStart("block");
  // }

  // const [displays, setDisplay] = useState(newBlock);
  // // const toggle = () => setDisplay(!newBlock);

  // console.log(displays);
// console.log(displays);
  //  if(ModalWindow){
  // setDisplay("block");
  // }

  // newBlock=function(){
  //   let newDisplay ="none"
    
  //   return newDisplay
  // }
console.log(props.block); 
  return (
    <>
    <div style={{display:newBlock}} className={"modal"}>
        <div className={'modalContent'}>
            <span onClick={newBlock} className={'close'}>X</span>
            <img width={'100%'} height={'100%'} src={ModalWindow/*"https://via.placeholder.com/600/92c952"*/} alt="phot" />
        </div>
        
    </div>
    {/* <App srcModalWindow={srcModalWindow}/> */}
    {/* <Choice srcModalWindow={srcModalWindow}/> */}
    </>
    
    
    
  )
}

export default ModalWindow