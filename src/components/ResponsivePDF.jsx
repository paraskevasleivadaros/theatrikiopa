import React from 'react';

const ResponsivePDF = ({ pdfUrl }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '100%', // Maximum width set to 100% of the parent container
      height: '0',
      paddingBottom: '141.42%', // 1.4142 aspect ratio (sqrt(2)), common for A4 paper
      overflow: 'hidden', // Ensures the content doesn't overflow
      margin: '0 0 20px 0', // Centers the PDF and adds space below
    }}>
      <iframe
        src={pdfUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '0',
        }}
        title="PDF Document"
      ></iframe>
    </div>
  );
};

export default ResponsivePDF;
