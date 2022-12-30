import React from 'react';
import Head from 'next/head';

interface HeadProps {
  title: string,
  content: string
}

const HeadTag = ({title, content}: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
    </Head>
  );
};

export default HeadTag;
