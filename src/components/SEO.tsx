import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: { [property: string]: string }[];
  imagePath?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = '',
  lang = 'en',
  meta = [],
  imagePath,
}) => {
  // icon size is limited to 400px to get square (not rectangle) thumbnail on Facebook
  const { icon, site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            origin
          }
        }
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              src
            }
          }
        }
      }
    `
  );

  if (!site.siteMetadata.origin) {
    throw new Error('Missing site origin from Gatsby config.');
  }

  if (!imagePath) {
    imagePath = icon.childImageSharp.fluid.src;
  }

  const metaDescription = description || site.siteMetadata.description;
  const titleTemplate =
    title === site.siteMetadata.title
      ? undefined
      : `%s | ${site.siteMetadata.title}`;

  const origin =
    typeof window !== 'undefined'
      ? window.location.origin
      : site.siteMetadata.origin;
  const imageUrl = imagePath && new URL(imagePath, origin).href;

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        ...meta,
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: imageUrl,
        },
        {
          name: 'twitter:image',
          content: imageUrl,
        },
        {
          name: 'twitter:card',
          content: 'summary', // change to 'summary_large_image' for large images
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  );
};

export default SEO;
