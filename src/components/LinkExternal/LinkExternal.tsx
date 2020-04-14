import React from 'react';

interface LinkExternalProps {
  href: string;
  className?: string;
}

const LinkExternal: React.FC<LinkExternalProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkExternal;
