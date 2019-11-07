import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <div className="text-center">
      <h3 className="mb-4">Oh snap! There's nothing here.</h3>
      <p>How did you get here, you sneaky rascal?</p>
    </div>
  </Layout>
);

export default NotFoundPage;
