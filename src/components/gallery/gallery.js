/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";


export default function Gallery({imgArr}) {
  useEffect(() => {
    console.log('gallery_images', imgArr)
  })

    return (
        <div>
           {/* <ImageGallery items={images} />; */}
           { imgArr.length ? 
           ( imgArr.map((image, index) => (
              <div key={index}>
                <img src={image.original} alt="img" width="100" />  
                <input type="text" disabled  value= { image && image.title ?  image.title : null } />
              </div>
            ))): null}
        </div>
    )
}

