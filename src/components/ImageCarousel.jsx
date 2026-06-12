import React, { useState, useRef } from 'react';

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  const startX = useRef(0);
  const endX = useRef(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  const handleSwipe = () => {
    const diff = startX.current - endX.current;
    const threshold = 50;

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
          transition: animating ? 'transform 400ms ease' : 'none',
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              width: `${100 / images.length}%`,
              flexShrink: 0,
            }}
          >
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              draggable={false}
              onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
              onTouchMove={(e) => (endX.current = e.touches[0].clientX)}
              onTouchEnd={handleSwipe}
              onMouseDown={(e) => (startX.current = e.clientX)}
              onMouseUp={(e) => {
                endX.current = e.clientX;
                handleSwipe();
              }}
              style={{
                width: '100%',
                display: 'block',
                userSelect: 'none',
              }}
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
              transition: '0.2s',
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
    zIndex: 2,
  };
}
