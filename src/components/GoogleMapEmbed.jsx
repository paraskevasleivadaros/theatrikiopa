import React from 'react';

const GoogleMapEmbed = ({ src }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%', // The map will try to fill the container
      paddingTop: '75%', // Maintains a 4:3 aspect ratio
      maxWidth: '400px', // Ensures the map does not grow beyond 400px in width
      maxHeight: '300px', // Aims to limit the height, indirectly through aspect ratio
      margin: '0 auto 20px', // Centers the map if it's smaller than the container, adds space below
      overflow: 'hidden', // Prevents the iframe from exceeding the div's maximum height
    }}>
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%',
          border: '0',
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
