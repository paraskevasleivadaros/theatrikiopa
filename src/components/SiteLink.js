// src/components/SiteLink.js
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SiteLink({ path, children }) {
  const { siteConfig } = useDocusaurusContext();
  const base = siteConfig.customFields.siteBaseUrl;
  return <a href={`${base}${path}`}>{children}</a>;
}
