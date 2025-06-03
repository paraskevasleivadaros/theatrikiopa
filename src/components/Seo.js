import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Seo({ title, description, image, imageAlt, url }) {
  const { siteConfig } = useDocusaurusContext();
  const siteTitle = title || siteConfig.title;
  const siteDesc = description || siteConfig.tagline;

  // Use siteBaseUrl from customFields if available
  const baseUrl = siteConfig.customFields?.siteBaseUrl || siteConfig.url;
  const siteImage = image?.startsWith('http')
    ? image
    : `${baseUrl.replace(/\/$/, '')}/${image?.replace(/^\/+/, '') || 'img/logo.png'}`;

  const resolvedImage = image?.startsWith('http')
    ? image
    : `${siteConfig.url}/${image?.replace(/^\/+/, '')}`; // ensure no leading slashes
  
  const siteUrl = url || siteConfig.url;

  return (
    <Head>
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={resolvedImage} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={resolvedImage} />
    </Head>
  );
}
