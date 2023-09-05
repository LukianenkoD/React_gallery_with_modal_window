import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalWindow from "./ModalWindow";

function Gallery(props) {
  const [photos, setPhotos] = useState([]);


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


{/* <ModalWindow dat={photos.url}/> */}
  
  return(
    <>
     {
    photos.map((photo) => (
      <div   key={photo.id}>
  
 <div >
<img onClick={props.func} style={{borderRadius:"50px"}} src={photo.url} alt="phot" />
 </div>

      </div>
         
    ))
   }
   
    </>
  
 

  )
 
  
}

export default Gallery;
