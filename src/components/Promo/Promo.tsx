import React from 'react';

import LinkExternal from 'components/LinkExternal';

import { APP_NAME } from 'utils/app';

interface App {
  icon: string;
  name: string;
  url: string;
  description: string;
}

const APPS: App[] = [
  {
    icon: '🎯',
    name: 'Intention',
    url: 'https://getintention.com',
    description: 'Build the habit of focus',
  },
  {
    icon: '🙈',
    name: 'Hide Feed',
    url: 'https://hidefeed.com',
    description: 'Hide feeds and get things done without distractions',
  },
  {
    icon: '👍🏽',
    name: 'Hide Likes',
    url: 'https://hidelikes.com',
    description: 'Hide vanity metrics for an authentic online experience',
  },
];

const Promo: React.FC = () => {
  return (
    <div>
      <h5 className="text-muted text-center">More by DK</h5>
      <div className="list-group">
        {APPS.filter(app => app.name !== APP_NAME).map(app => (
          <LinkExternal
            key={app.name}
            href={app.url}
            className="list-group-item list-group-item-action"
          >
            {app.icon} {app.name} -{' '}
            <span className="text-muted">{app.description}</span>
          </LinkExternal>
        ))}
      </div>
    </div>
  );
};

export default Promo;
