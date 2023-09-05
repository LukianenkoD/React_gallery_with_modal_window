import React from "react";
import Gallery from "./Components/Gallery";
import "./styles/App.css";
import ModalWindow from "./Components/ModalWindow";

function App() {
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
      <Gallery/>
     <ModalWindow/>
    </div>
  );
}

export default App;
