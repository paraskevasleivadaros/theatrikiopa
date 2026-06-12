import React from 'react';

export default function ImageGallery({ images }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        margin: '20px 0',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery image ${index + 1}`}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            display: 'block',
          }}
        />
      ))}
    </div>
  );
}
