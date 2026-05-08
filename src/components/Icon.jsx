import React from 'react';

const h = React.createElement;

const paths = {
  calendar: [
    h('path', { key: '1', d: 'M7 2v3M17 2v3M4 9h16' }),
    h('path', { key: '2', d: 'M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z' }),
    h('path', { key: '3', d: 'M8 13h3v3H8z' }),
  ],
  menu: [
    h('path', { key: '1', d: 'M4 7h16' }),
    h('path', { key: '2', d: 'M4 12h16' }),
    h('path', { key: '3', d: 'M4 17h16' }),
  ],
  close: [h('path', { key: '1', d: 'M6 6l12 12M18 6 6 18' })],
  arrow: [h('path', { key: '1', d: 'M5 12h14M13 6l6 6-6 6' })],
  telegram: [h('path', { key: '1', d: 'm21 4-4.7 16-5.1-4-3 2.8 1-5.1L21 4ZM21 4 3 11.4l6.2 2.3' })],
  messenger: [
    h('path', { key: '1', d: 'M4 13a8 8 0 1 1 3.2 6.4L4 20l.7-3A7.6 7.6 0 0 1 4 13Z' }),
    h('path', { key: '2', d: 'm8 14 3-3 3 2 3-3' }),
  ],
  chat: [
    h('path', { key: '1', d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z' }),
    h('path', { key: '2', d: 'M8 9h8M8 13h5' }),
  ],
  cup: [
    h('path', { key: '1', d: 'M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z' }),
    h('path', { key: '2', d: 'M16 9h2a3 3 0 0 1 0 6h-2' }),
    h('path', { key: '3', d: 'M7 3v2M11 3v2M15 3v2M4 21h14' }),
  ],
  utensils: [
    h('path', { key: '1', d: 'M6 2v8M3 2v8a3 3 0 0 0 6 0V2M6 10v12' }),
    h('path', { key: '2', d: 'M18 2v20M14 2v8a4 4 0 0 0 4 4' }),
  ],
  cloche: [
    h('path', { key: '1', d: 'M4 16h16M6 16a6 6 0 0 1 12 0M12 6v2M10 6h4M7 20h10' }),
    h('path', { key: '2', d: 'M12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z' }),
  ],
  leaf: [
    h('path', { key: '1', d: 'M20 4c-8 0-14 5-14 12 0 2 2 4 4 4 7 0 10-8 10-16Z' }),
    h('path', { key: '2', d: 'M6 20c3-7 7-10 14-16' }),
  ],
  heart: [h('path', { key: '1', d: 'M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z' })],
  users: [
    h('path', { key: '1', d: 'M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2' }),
    h('path', { key: '2', d: 'M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8' }),
  ],
  sprout: [
    h('path', { key: '1', d: 'M12 21V10' }),
    h('path', { key: '2', d: 'M12 10c-5 0-7-3-7-7 5 0 7 3 7 7ZM12 13c5 0 7-3 7-7-5 0-7 3-7 7Z' }),
  ],
  phone: [h('path', { key: '1', d: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z' })],
  pin: [
    h('path', { key: '1', d: 'M12 22s7-6.2 7-13A7 7 0 1 0 5 9c0 6.8 7 13 7 13Z' }),
    h('circle', { key: '2', cx: '12', cy: '9', r: '2.5' }),
  ],
  mail: [
    h('path', { key: '1', d: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z' }),
    h('path', { key: '2', d: 'm22 7-10 7L2 7' }),
  ],
  clock: [
    h('circle', { key: '1', cx: '12', cy: '12', r: '9' }),
    h('path', { key: '2', d: 'M12 7v5l3 2' }),
  ],
  facebook: [h('path', { key: '1', d: 'M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z' })],
  instagram: [
    h('rect', { key: '1', x: '4', y: '4', width: '16', height: '16', rx: '5' }),
    h('circle', { key: '2', cx: '12', cy: '12', r: '3.5' }),
    h('path', { key: '3', d: 'M17.5 6.5h.01' }),
  ],
  trip: [
    h('path', { key: '1', d: 'M4 10c2-2 4-3 8-3s6 1 8 3' }),
    h('circle', { key: '2', cx: '8', cy: '13', r: '3.2' }),
    h('circle', { key: '3', cx: '16', cy: '13', r: '3.2' }),
    h('path', { key: '4', d: 'M11 13h2M6.5 13h3M14.5 13h3' }),
  ],
};

export function Icon({ name, className = '', size = 22 }) {
  return h(
    'svg',
    {
      className: `icon ${className}`.trim(),
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      focusable: 'false',
    },
    paths[name] || paths.leaf,
  );
}
