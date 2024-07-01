import React from 'react';

const ResponsivePDF = ({ pdfUrl }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '600px', // Adjust this to the desired maximum width
      height: '800px', // Fixed height or adjust based on your needs
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
