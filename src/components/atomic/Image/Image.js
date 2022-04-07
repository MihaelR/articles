import React from 'react';
import "./Image.css";


function Image({src}) {

  return (
    <div className="image-container">
        <img
            className="image" 
            src={src} 
            alt="new"
        /> 
    </div>
  );
}

export default Image;