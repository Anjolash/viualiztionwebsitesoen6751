import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const ImageComponent = ({ imgSource }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/images/' + imgSource) 
      .then(response => response.blob())
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL);
        console.log(objectURL)
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <div className='imgcontainer'>
      <img src={imageSrc} alt="Example" />
    </div>
  );
}

ImageComponent.propTypes = {
  imgSource : PropTypes.string.isRequired
};
export default ImageComponent;
