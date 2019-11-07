import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AppIcon from 'components/AppIcon';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Gatsby Starter" />
      <AppIcon />
      <h1 className="text-center">Hello World!</h1>
    </Layout>
  );
};

export default IndexPage;
