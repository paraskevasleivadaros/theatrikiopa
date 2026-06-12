import React, { useState, useRef } from 'react';

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    handleSwipe();
  };

  const onMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const onMouseUp = (e) => {
    endX.current = e.clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = startX.current - endX.current;

    // threshold so tiny movements don't trigger swipe
    const threshold = 50;

    if (diff > threshold) {
      next(); // swipe left → next image
    } else if (diff < -threshold) {
      prev(); // swipe right → previous image
    }
  };

  if (!images.length) return null;

  return (
    <div
      style={{
        width: '100%',
        margin: '20px 0',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          draggable={false}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          style={{
            width: '100%',
            display: 'block',
            cursor: 'grab',
          }}
        />
      </div>

      {/* Controls */}
      <button onClick={prev} style={buttonStyle('left')}>
        ‹
      </button>

      <button onClick={next} style={buttonStyle('right')}>
        ›
      </button>

      {/* Dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6px',
          marginTop: '10px',
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '10px' : '8px',
              height: i === current ? '10px' : '8px',
              borderRadius: '50%',
              background: i === current ? '#333' : '#bbb',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function buttonStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '10px',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '20px',
  };
}
