import React from 'react';

const h = React.createElement;

export function MenuItem({ item }) {
  return h(
    'article',
    { className: 'menu-item' },
    h('img', { src: item.image, alt: item.name, loading: 'lazy' }),
    h(
      'div',
      { className: 'menu-item-copy' },
      h(
        'div',
        { className: 'menu-item-title-row' },
        h('h3', null, item.name),
        h('strong', null, item.price),
      ),
      h('p', null, item.description),
    ),
  );
}
