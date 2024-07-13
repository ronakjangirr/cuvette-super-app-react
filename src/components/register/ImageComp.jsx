import React from 'react'
// import img13 from "../../../public/images/img13.png"
function ImageComp() {
    
    const imageStyle = {
        width: '100%',
        maxHeight: '100vh',
      };
    
    
  return (
    <>
    <div>
    <img src="/images/img13.png" alt="Description of the image"  style={imageStyle}/>
    </div>
    </>
  )
}

export default ImageComp;