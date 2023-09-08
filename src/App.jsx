import React from "react";
import Gallery from "./Components/Gallery";
import "./styles/App.css";

function App() {

  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
      <Gallery/>

    
    </div>
  );
}

export default App;
