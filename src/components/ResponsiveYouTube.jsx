import React from 'react';

const ResponsiveYouTube = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 Aspect Ratio
      paddingTop: '25px',
      height: 0,
      marginBottom: '20px' // Add 20px of space at the bottom
    }}>
      <iframe 
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default ResponsiveYouTube;
