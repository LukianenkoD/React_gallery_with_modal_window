import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalWindow from "./ModalWindow";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  const [src, setSrc] = useState(/*'https://via.placeholder.com/600/771796'*/);

  const [block, setBlock] = useState('none')

  function srcCounter(e){
    let src = e.target.src;
    setSrc(src);
    setBlock("block")

  };
  // console.log(src);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  
  return(
    <>
     {
    photos.map((photo) => (
      <div   key={photo.id}>
  
 <div >{
  <img onClick={srcCounter} style={{borderRadius:"50px"}} src={photo.url} alt="phot" />
  }

 </div>

      </div>
         
    ))
   }
   <ModalWindow src={src} block={block}/>
    </>
  
 

  )
 
  
}

export default Gallery;
