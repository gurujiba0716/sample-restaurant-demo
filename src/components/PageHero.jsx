import React from 'react';
import { SectionHeading } from './Section.jsx';

const h = React.createElement;

export function PageHero({ title, text, script, image, overlay = false }) {
  if (overlay) {
    return h(
      'section',
      {
        className: 'page-hero page-hero-overlay',
        style: { '--hero-image': `url(${image})` },
      },
      h(
        'div',
        { className: 'container page-hero-content' },
        h('h1', null, title),
        h('p', null, text),
      ),
    );
  }

  return h(
    'section',
    { className: 'page-hero page-hero-split' },
    h(
      'div',
      { className: 'container page-hero-split-inner' },
      h(SectionHeading, { script, title, text }),
      h(
        'div',
        { className: 'page-hero-image-wrap' },
        h('img', { src: image, alt: `${title} restaurant scene`, loading: 'eager' }),
      ),
    ),
  );
}
