import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Seo({title, description, image, url}) {
  const {siteConfig} = useDocusaurusContext();
  const siteTitle = title || siteConfig.title;
  const siteDesc = description || siteConfig.tagline;
  const siteImage = image || siteConfig.url + '/img/default-og.jpg';
  const siteUrl = url || siteConfig.url;

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
