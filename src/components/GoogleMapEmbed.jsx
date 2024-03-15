import React from 'react';

const GoogleMapEmbed = ({ src, width = "400", height = "300" }) => {
  // Calculate aspect ratio for the padding-top value
  const paddingTop = (height / width) * 100 + '%';

  return (
    <div style={{
      position: 'relative',
      width: '100%', // Ensure it takes up the parent width
      paddingTop, // Maintain aspect ratio based on props
      height: 0, // Collapse the div to just the size of the iframe
      marginBottom: '20px', // Add 20px of space below
    }}>
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // iframe takes up the width of the div
          height: '100%', // iframe takes up the height of the div
          border: 0, // Remove the border
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
