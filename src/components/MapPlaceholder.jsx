import React from 'react';
import { business } from '../data/siteData.js';
import { Icon } from './Icon.jsx';

const h = React.createElement;

export function MapPlaceholder() {
  return h(
    'section',
    { className: 'map-section', 'aria-label': 'Map placeholder for Sample Restaurant location' },
    h(
      'div',
      { className: 'map-canvas' },
      h('span', { className: 'map-road road-one', 'aria-hidden': 'true' }),
      h('span', { className: 'map-road road-two', 'aria-hidden': 'true' }),
      h('span', { className: 'map-road road-three', 'aria-hidden': 'true' }),
      h('span', { className: 'map-river', 'aria-hidden': 'true' }),
      h(
        'div',
        { className: 'map-card' },
        h('span', { className: 'map-pin' }, h(Icon, { name: 'pin', size: 26 })),
        h('strong', null, business.name),
        h('span', null, '#123 Street 123, BKK1', h('br'), 'Phnom Penh, Cambodia'),
      ),
    ),
  );
}
