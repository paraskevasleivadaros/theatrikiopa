import React from 'react';

const SpotifyEmbed = ({ src }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        height: '152px', // Spotify’s standard embed height for tracks
        margin: '0 0 20px 0',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '0',
        }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyEmbed;
