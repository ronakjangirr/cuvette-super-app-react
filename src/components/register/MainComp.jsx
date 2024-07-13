import React from 'react';
import RegisterForm from "../register/RegisterForm";
import Image from 'react-bootstrap/Image';
import "../register/MainCompStyle.css";

function MainComp() {
  const parentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    overflow:"hidden"
  };

  const imageContainerStyle = {
    flex: '1', // Cover half of the parent's width
    position: 'relative',
    margin: '0', // Remove potential margin
  };

  const imageStyle = {
    objectFit: 'cover', // Maintain aspect ratio while covering
    height: '100vh', // Cover the full height of the viewport
    width: '100%', // Cover the full width
    margin: '0', // Remove potential margin
  };

  const textOverlayStyle = {
    position: "absolute",
    top: "80%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "2.3rem",
    fontWeight: "bold",
    textAlign: "initial",
  };

  return (
    <>
    <div>      
      <div style={parentStyle}>
        <div className='container-fluid p-0'>
          <div className='row g-0'>
            <div className='col-12 col-md-6 h-100' style={imageContainerStyle}>
              <Image src="/images/img13.png" alt="Description of the image" fluid className="vh-100" style={imageStyle}/>
              <div style={textOverlayStyle}>
                Discover new things on Superapp
              </div>
            </div>

            <div className='col-12 col-md-6 h-100'>
              <RegisterForm />            
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default MainComp;
