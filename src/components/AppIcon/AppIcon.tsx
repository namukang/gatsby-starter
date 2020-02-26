import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Image, { GatsbyImageProps } from 'gatsby-image';

const AppIcon: React.FC<GatsbyImageProps> = props => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Image fluid={data.icon.childImageSharp.fluid} {...props} />;
};

export default AppIcon;
