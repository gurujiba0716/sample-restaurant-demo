import React from 'react';
import { Icon } from './Icon.jsx';
import { Reveal } from './Section.jsx';

const h = React.createElement;

export function ValueCard({ value, delay = 0 }) {
  return h(
    Reveal,
    { className: 'value-card', delay },
    h('div', { className: 'value-icon' }, h(Icon, { name: value.icon, size: 39 })),
    h('h3', null, value.title),
    h('p', null, value.text),
  );
}
