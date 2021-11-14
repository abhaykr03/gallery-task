import React, { useState, useEffect } from 'react'
import Gallery from '../../components/gallery/gallery'
import { ImageUploader } from '../../components/imageUploader/imageUploader'


export default function Home() {
    const  [ imageArray, setImageArray ] = useState([]);
    useEffect(() => { 
        console.log('home', imageArray)
    }, [imageArray])
    const setImageUploader = (index) => {
        setImageArray(index)
    }
    return (
        <div>
            <ImageUploader
                imgArray = {setImageUploader}
            />
            <Gallery
                imgArr = {imageArray && imageArray.length ? imageArray : [] }
            />
        </div>
    )
}

