import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Seo({ title, description, image, url }) {
  const { siteConfig } = useDocusaurusContext();
  const siteTitle = title || siteConfig.title;
  const siteDesc = description || siteConfig.tagline;

  // Use siteBaseUrl from customFields if available
  const baseUrl = siteConfig.customFields?.siteBaseUrl || siteConfig.url;
  const siteImage = image?.startsWith('http')
    ? image
    : `${baseUrl.replace(/\/$/, '')}/${image?.replace(/^\/+/, '') || 'img/logo.png'}`;

  const siteUrl = url || baseUrl;

  return (
    <Head>
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
