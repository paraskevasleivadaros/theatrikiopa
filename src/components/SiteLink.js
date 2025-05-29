// src/components/SiteLink.js
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SiteLink({ href = '/', label, ...props }) {
  const {
    siteConfig: {
      customFields: { siteBaseUrl = '', siteDisplayName = '' } = {},
    },
  } = useDocusaurusContext();

  // Normalize href to avoid double slashes
  const normalizedHref = href.startsWith('/')
    ? `${siteBaseUrl}${href}`
    : `${siteBaseUrl}/${href}`;

  return (
    <a href={normalizedHref} {...props}>
      {label || siteDisplayName}
    </a>
  );
}
