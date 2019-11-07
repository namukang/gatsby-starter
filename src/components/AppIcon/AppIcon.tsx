import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import styles from './AppIcon.module.scss';

const AppIcon: React.FC = () => {
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
  return (
    <div className={`${styles.AppIcon} mx-auto`}>
      <Image fluid={data.icon.childImageSharp.fluid} />
    </div>
  );
};

export default AppIcon;
