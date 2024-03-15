import React from 'react';

const GoogleMapEmbed = ({ src, width = "400", height = "300" }) => (
  <iframe
    src={src}
    width={width}
    height={height}
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

export default GoogleMapEmbed;
