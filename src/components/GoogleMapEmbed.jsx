import React from 'react';

const GoogleMapEmbed = ({ src }) => {
  // This calculates the padding-top percentage to maintain aspect ratio
  // But it's removed to address the height issue
  return (
    <div style={{
      position: 'relative',
      width: '100%', // Allows the map to be responsive up to the max width
      maxWidth: '400px', // Maximum width of the map
      height: '300px', // Fixed height to address the concern
      margin: '0 0 20px 0', // Centers the map and adds space below
    }}>
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // Ensures the iframe fills the div horizontally
          height: '100%', // Ensures the iframe fills the div vertically
          border: '0', // Removes the border
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
