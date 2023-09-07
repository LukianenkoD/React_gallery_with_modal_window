import React, {useState} from "react";
import Gallery from "./Components/Gallery";
import "./styles/App.css";
// import Choice from "./Components/Choice";
// import ModalWindow from "./Components/ModalWindow";

function App() {

  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
       {/* <ModalWindow/> */}
      <Gallery/>
      {/* <Choice/> */}
      {/* <ModalWindow/> */}
    
    </div>
  );
}

export default App;
