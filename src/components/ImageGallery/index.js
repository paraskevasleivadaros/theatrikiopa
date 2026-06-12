import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((src, index) => (
          <button
            key={index}
            className={styles.imageButton}
            onClick={() => setSelectedImage(src)}
            type="button"
          >
            <img
              src={src}
              alt={`Φωτογραφία ${index + 1}`}
              className={styles.image}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Μεγέθυνση φωτογραφίας"
            className={styles.modalImage}
          />
        </div>
      )}
    </>
  );
}
