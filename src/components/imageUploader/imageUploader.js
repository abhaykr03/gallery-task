import React, { useState, useEffect } from "react";

import ImageUploading from "react-images-uploading";

import "./imageUploader.css";

export function ImageUploader({imgArray}) {
  const [images, setImages] = useState([]);
  const [ imgsWithTitle, setImgsWithTitle ] = useState([]);

  const maxNumber = 9;
  useEffect(() => {
    console.log('images' , typeof(imgsWithTitle), imgsWithTitle)
    
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgsWithTitle])

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log('onChange',imageList, addUpdateIndex);
    setImages(imageList);
  };


  const onTextChange = (n, index) => {
        console.log('titleText', n.target.value, index);
        let newArr = images;
        for(let i = 0; i < images.length; i++){
          console.log('imageArr', images[i] )
          let obj = images[i]
          obj.title = n.target.value
          newArr[i] = obj
          console.log('newArray', newArr)
        }
        setImgsWithTitle(newArr) 
        imgArray(imgsWithTitle)
  }
  

  

  return (
    <div className="container">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="original"
        imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
        maxFileSize={1048576}
        fileSizeError=" file size is too big"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
          <h1>Gallery Task</h1>
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.original} alt="img" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>

                  
                  <input type="text" placeholder="Add Title here" onChange= {(n) => onTextChange(n, index)}/>
                  {/* <button onClick={() => onAddTitle(index)}>Add Title</button> */}

                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};