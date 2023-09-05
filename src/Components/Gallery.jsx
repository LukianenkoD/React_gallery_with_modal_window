import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  let [width, setWidth] = useState('');

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

  function changeSize() {
  
    setWidth(width = "1200px");
  }  



  
  return(
    photos.map((photo) => (
      <div onClick={changeSize}  key={photo.id}>
 
 <div >
<img style={{borderRadius:"50px"}} width={width} src={photo.url} alt="phot" />
 </div>

      </div>
         
    ))
  

  )
 
  
}

export default Gallery;
