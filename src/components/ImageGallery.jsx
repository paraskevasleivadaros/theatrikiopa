import React from 'react';

const ImageGallery = ({ images = [] }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        width: '100%',
        margin: '0 0 20px 0',
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '75%', // 4:3 aspect ratio
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
