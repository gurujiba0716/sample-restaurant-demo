import React, { useEffect } from 'react';
import { images, values } from '../data/siteData.js';
import { Button } from '../components/Button.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { Reveal, Section, SectionHeading } from '../components/Section.jsx';
import { ValueCard } from '../components/ValueCard.jsx';

const h = React.createElement;

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

export function About() {
  usePageMeta(
    'About Us | Sample Restaurant',
    'Learn about the Sample Restaurant demo story, values, and warm Phnom Penh cafe space.',
  );

  return h(
    React.Fragment,
    null,
    h(PageHero, {
      title: 'About Us',
      text: 'Our story, our passion, and our promise to you.',
      image: images.aboutHero,
      overlay: true,
    }),
    h(
      Section,
      { className: 'story-section' },
      h(
        'div',
        { className: 'split-grid split-grid-balanced' },
        h(
          Reveal,
          { className: 'split-copy' },
          h(SectionHeading, { script: 'Our Story', title: 'More Than Just a Restaurant' }),
          h(
            'p',
            null,
            'Sample Restaurant was born from a love of good food and warm hospitality. We believe that food brings people together, and we are here to create memorable moments for you in a cozy and welcoming space.',
          ),
          h(
            'p',
            null,
            'From our carefully selected ingredients to our thoughtful service, everything we do is made with passion and purpose. Thank you for being a part of our story.',
          ),
          h(Button, { to: '/contact', variant: 'dark' }, 'Learn More'),
        ),
        h(
          Reveal,
          { className: 'image-frame large-image', delay: 120 },
          h('img', { src: images.aboutExterior, alt: 'Warm restaurant storefront with outdoor tables and green awning' }),
        ),
      ),
    ),
    h(
      Section,
      { className: 'values-section surface-band' },
      h(SectionHeading, { script: 'Our Values', title: 'What We Stand For', align: 'center' }),
      h(
        'div',
        { className: 'values-grid' },
        values.map((value, index) => h(ValueCard, { key: value.title, value, delay: index * 80 })),
      ),
    ),
    h(
      Section,
      { className: 'space-section' },
      h(
        'div',
        { className: 'space-grid' },
        h(
          Reveal,
          { className: 'split-copy' },
          h(SectionHeading, { script: 'Our Space', title: 'A Place to Belong' }),
          h(
            'p',
            null,
            'Whether you’re here for a morning coffee, a casual lunch, or a relaxing dinner, we’ve created a space that feels like home.',
          ),
          h(
            'p',
            null,
            'Cozy, comfortable, and filled with good energy — the perfect spot to connect, work, or simply enjoy the moment.',
          ),
        ),
        h(
          'div',
          { className: 'space-images' },
          [
            { src: images.spaceCozy, alt: 'Cozy restaurant seating with warm lights' },
            { src: images.spaceTable, alt: 'Restaurant table by a sunny window with flowers' },
            { src: images.spaceBar, alt: 'Warm restaurant bar and dining room' },
          ].map((image, index) =>
            h(
              Reveal,
              { key: image.src, className: 'image-frame space-image', delay: index * 80 },
              h('img', { src: image.src, alt: image.alt }),
            ),
          ),
        ),
      ),
    ),
  );
}
