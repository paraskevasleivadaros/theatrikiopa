import React, { useState, useRef } from 'react';

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  const next = () => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  const prev = () => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const handleSwipe = () => {
    const diff = startX.current - endX.current;
    const threshold = 60;

    if (diff > threshold) next();
    else if (diff < -threshold) prev();
  };

  return (
    <div
      style={{
        width: '100%',
        margin: '20px 0',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
      }}
    >
      {/* Track */}
      <div
        style={{
          display: 'flex',
          transform: `translateX(-${current * 100}%)`,
          transition: 'transform 450ms ease',
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              minWidth: '100%',
              flexShrink: 0,
            }}
          >
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              draggable={false}
              style={{
                width: '100%',
                display: 'block',
                userSelect: 'none',
                pointerEvents: 'none', // 👈 important fix for drag issues
              }}
              onMouseDown={(e) => {
                isDragging.current = true;
                startX.current = e.clientX;
              }}
              onMouseMove={(e) => {
                if (!isDragging.current) return;
                endX.current = e.clientX;
              }}
              onMouseUp={() => {
                if (!isDragging.current) return;
                isDragging.current = false;
                handleSwipe();
              }}
              onMouseLeave={() => {
                isDragging.current = false;
              }}
              onTouchStart={(e) => {
                startX.current = e.touches[0].clientX;
              }}
              onTouchMove={(e) => {
                endX.current = e.touches[0].clientX;
              }}
              onTouchEnd={handleSwipe}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button onClick={prev} style={buttonStyle('left')}>‹</button>
      <button onClick={next} style={buttonStyle('right')}>›</button>

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
    zIndex: 2,
  };
}
