// src/components/SiteLink.js
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SiteLink({ href, children, ...props }) {
  const {
    siteConfig: {
      customFields: { siteBaseUrl } = {},
    },
  } = useDocusaurusContext();

  const normalizedHref = href.startsWith('/')
    ? `${siteBaseUrl}${href}`
    : `${siteBaseUrl}/${href}`;

  return (
    <a href={normalizedHref} {...props}>
      {children}
    </a>
  );
}
