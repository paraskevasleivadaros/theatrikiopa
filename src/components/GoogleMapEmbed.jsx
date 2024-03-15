import React from 'react';

const GoogleMapEmbed = ({ src }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%', // Ensure it takes up the parent width
      maxWidth: '400px', // Limit the maximum width of the map
      height: '0',
      paddingBottom: '75%', // This maintains a 4:3 aspect ratio
      marginBottom: '20px', // Add 20px of space below
      marginLeft: 'auto', // Center the map
      marginRight: 'auto', // Center the map
    }}>
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // iframe takes up the width of the div
          height: '100%', // iframe takes up the height of the div, but not exceeding 300px
          border: '0', // Remove the border
          maxWidth: '400px',
          maxHeight: '300px',
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
