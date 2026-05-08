import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { business, images } from '../data/siteData.js';
import { Button } from '../components/Button.jsx';
import { Reveal, Section, SectionHeading } from '../components/Section.jsx';

const h = React.createElement;

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

function HomeHero() {
  return h(
    'section',
    {
      className: 'home-hero',
      style: { '--hero-image': `url(${images.homeHero})` },
    },
    h(
      'div',
      { className: 'container home-hero-inner' },
      h(
        Reveal,
        { className: 'home-hero-copy' },
        h('h1', null, 'Good Food,', h('br'), 'Good Vibes,', h('br'), 'Great Moments.'),
        h('p', null, 'Enjoy fresh ingredients, crafted with love,', h('br'), 'in the heart of Phnom Penh.'),
        h(
          'div',
          { className: 'hero-actions' },
          h(Button, { to: '/menu', variant: 'dark' }, 'View Menu'),
          h(Button, { to: '/contact', variant: 'outline-light' }, 'Contact Us'),
        ),
      ),
    ),
  );
}

export function Home() {
  usePageMeta(
    'Sample Restaurant | Good Food in Phnom Penh',
    'A warm and modern cafe restaurant demo concept for Phnom Penh customers, expats, and tourists.',
  );

  return h(
    React.Fragment,
    null,
    h(HomeHero),
    h(
      Section,
      { className: 'intro-section' },
      h(
        'div',
        { className: 'split-grid split-grid-balanced' },
        h(
          Reveal,
          { className: 'split-copy' },
          h(SectionHeading, { script: 'Welcome to', title: business.name }),
          h(
            'p',
            null,
            'We are a cozy restaurant in Phnom Penh, serving delicious food and drinks made from fresh, local ingredients. Whether you are here for a casual lunch, a coffee break, or a special dinner, we’ve got you covered.',
          ),
          h(Button, { to: '/about', variant: 'dark' }, 'Learn More About Us'),
        ),
        h(
          Reveal,
          { className: 'image-frame large-image', delay: 120 },
          h('img', { src: images.introDish, alt: 'Fresh grilled dish served with salad in a warm cafe setting' }),
        ),
      ),
    ),
    h(
      Section,
      { className: 'touch-section surface-band' },
      h(
        'div',
        { className: 'split-grid touch-grid' },
        h(
          Reveal,
          { className: 'split-copy' },
          h(SectionHeading, { title: 'Let’s Stay in Touch!' }),
          h('p', null, 'Have a question or want to make a reservation? Chat with us on Telegram or Messenger.'),
          h(
            'div',
            { className: 'stacked-actions' },
            h(Button, { href: business.telegramLink, icon: 'telegram', variant: 'telegram' }, 'Message on Telegram'),
            h(Button, { href: business.messengerLink, icon: 'messenger', variant: 'messenger' }, 'Message on Messenger'),
          ),
        ),
        h(
          Reveal,
          { className: 'image-frame large-image', delay: 120 },
          h('img', { src: images.contactCoffee, alt: 'Latte coffee on a restaurant table with flowers and a notebook' }),
        ),
      ),
    ),
  );
}
