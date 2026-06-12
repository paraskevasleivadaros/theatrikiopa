import React, { useState } from 'react';

const ImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
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
            onClick={() => setSelectedImage(image)}
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '75%',
              overflow: 'hidden',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
