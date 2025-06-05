import React from 'react';

const ResponsiveYouTube = ({ videoId }) => {
  const isShort = videoId.startsWith('shorts/');
  const embedId = isShort ? videoId.replace('shorts/', '') : videoId;
  const videoUrl = `https://www.youtube.com/embed/${embedId}`;

  return (
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 Aspect Ratio
      paddingTop: '25px',
      height: 0,
      marginBottom: '20px'
    }}>
      <iframe
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveYouTube;
