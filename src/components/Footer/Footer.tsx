import React from 'react';

import LinkExternal from 'components/LinkExternal';
import Promo from 'components/Promo';
import MakerFooter from 'components/MakerFooter';

const Footer: React.FC = () => {
  return (
    <>
      <div className="mb-4 d-flex justify-content-center">
        <CreditsPill />
      </div>
      <div className="mb-4 d-flex justify-content-center">
        <Promo />
      </div>
      <div>
        <Legal />
      </div>
      <MakerFooter />
    </>
  );
};

const CreditsPill: React.FC = () => {
  return (
    <div className="border rounded-pill bg-white py-2 px-3 text-muted">
      Crafted for your well-being by{' '}
      <LinkExternal href="https://dkthehuman.com">DK the Human</LinkExternal>
    </div>
  );
};

const Legal: React.FC = () => {
  return (
    <div className="text-center text-muted">
      <LinkExternal href="https://example.com" className="text-muted">
        Privacy Policy
      </LinkExternal>
    </div>
  );
};

export default Footer;
